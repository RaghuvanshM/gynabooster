import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Modal
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput,Card} from 'react-native-paper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FastImage from 'react-native-fast-image';
import TopBarNavigationComponent from './Dashboard/TopBarnavigation/TeacherTopbarnavigation';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {
  faArrowLeft,
  faCoffee,
  faPen,
  faPenSquare,
} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import { Teacherdashboarddata } from '../../redux/action/TeacherData';
import RNFetchBlob from 'rn-fetch-blob';
import ImagePicker from 'react-native-image-picker';

const Tab = createMaterialTopTabNavigator();
const options = {
  title: 'Profile Picture',
  takePhotoButtonTitle: 'Take photo with your camera',
  chooseFromLibraryButtonTitle: 'Choose photo from library',
};
class TeacherProfileUpdate extends Component {
  constructor() {
    super();
    // let {name,email,mobile,age,address} = this.props.Teacheralldata;
    this.state = {
      showpassword: true,
      showcpassword: true,
      logoNewStyle: false,
      Name: '',
      email: '',
      mobile: '',
      isapihit: false,
      Age: '',
      address: '',
      event_name: '',
      country: '',
      state: '',
      city: '',
      landmark: '',
      pin_code: '',
      aboutinstitute: '',
      gender: 'gender',
      isProfileImageModal: false,
    };
  }
  componentDidMount() {
    this.Teacherupdatedata();
  }
  TeacherProfileUpdate = () => {
    this.setState({isapihit: true});
    let {
      mobile,
      landmark,
      pin_code,
      age,
      address,
      country,
      city,
      state,
      gender,
    } = this.state;
    const url =
      'https://gyanbooster.jingleinfo.com/mobileapp/user/teacher_update';
    AsyncStorage.getItem('Techerloginid').then((token) => {
      let id = parseInt(token);
      let data = {
        id: id,
        phone: mobile,
        landmark: landmark,
        pincode: pin_code,
        age: age,
        address: address,
        country: country,
        state: state,
        gender: gender,
        city:city
      };
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'prabhat@123',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res2) => {
          if (res2.status) {
            this.setState({
              isapihit: false,
            });
            showMessage({
              message: res2.message,
              type: 'success',
            });
            this.props.fetchallTeacherData(id);
          } else {
            this.setState({isapihit: false});
            showMessage({
              message: res2.message,
              type: 'single',
            });
          }
        });
    });
  };
  Teacherupdatedata = () => {
    let {
      address,
      age,
      city,
      country,
      email,
      gender,
      landmark,
      name,
      phone,
      pincode,
      state,
    } = this.props.Teacheralldata;
    this.setState({
      address: address,
      age: age,
      city: city,
      country: country,
      email: email,
      gender: gender,
      landmark: landmark,
      name: name,
      phone: phone,
      pin_code: pincode,
      state: state,
    });
  };
  updateProfilePic = () => {
    AsyncStorage.getItem('Techerloginid').then((token) => {
      let id = parseInt(token);
      ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
      
        } else if (response.error) {
        
        } else if (response.customButton) {
      
        } else {
          let source = {uri: response.uri};
          this.setState({isProfileImageModal: true});

          AsyncStorage.getItem('Techerloginid').then((token) => {
            RNFetchBlob.fetch(
              'POST',
              'https://gyanbooster.jingleinfo.com/mobileapp/user/teacher_pic',
              {
                Authorization: 'Bearer access-token',
                otherHeader: 'foo',
                'Content-Type': 'multipart/form-data',
                'x-api-key': 'prabhat@123',
              },
              [
                {
                  name: 'img',
                  filename: response.fileName,
                  type: 'image/png',
                  data: response.data,
                },
                {name: 'teacher_registration_id', data: token.toString()},
              ],
            ).then((resp) => {
              this.props.fetchallTeacherData(id);

              showMessage({
                message: 'Profile picture successfully updated',
                type: 'success',
              });
              this.setState({isProfileImageModal: false});
            });
          });
        }
      });
    });
  };
  TeacherInformation =()=>{
    AsyncStorage.getItem('Techerloginid').then((token) => {
      let data ={
        teacher_registration_id:parseInt(token)
      }
      const url ='https://gyanbooster.jingleinfo.com/mobileapp/user/teacher_insert';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'prabhat@123',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res2) => {
        })
    this.props.navigation.navigate('Teacherinformation')
    })
  }
  render() {
    let {appdarkmode} = this.props;
    let {
      name,
      phone,
      email,
      gender,
      age,
      address,
      country,
      state,
      city,
      landmark,
      pin_code,
      aboutinstitute,
      isapihit,
      isProfileImageModal,
    } =this.state;
     const theme = {
      roundness: 5,
      colors: {
        text: 'black',
        placeholder: '#0b59b8',
        primary: 'green',
        background: 'white',
      },
    };
    return (
      <View style={{flex: 1}}>
        <ScrollView>
        <LinearGradient
          colors={
            appdarkmode ? ['black', 'grey'] : ['#aa4b6b', '#6b6b83', '#3b8d99']
          }
          style={{height: hp('30%')}}>
          <View>
            <View style={{flexDirection: 'row', margin: hp('2%')}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('TeacherbottomTab');
                }}>
                <View>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    color="white"
                    size={hp('3%')}
                  />
                </View>
              </TouchableOpacity>
              
              <View>
                <Text
                  style={{
                    color: 'white',
                    marginLeft: hp('3%'),
                    fontSize: hp('2%'),
                  }}>
                  Update Profile
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'white',
                    marginLeft: hp('15%'),
                    fontSize: hp('2%'),
                  }}>
                 Information
                </Text>
              </View>
              <View>
              <TouchableOpacity
                onPress={() => {
                  this.TeacherInformation()
                }}>
                <View>
                  <FontAwesomeIcon
                    icon={faPen}
                    color="white"
                    size={hp('3%')}
                    style={{marginLeft:hp('3%')}}
                  />
                </View>
              </TouchableOpacity>
              </View>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Pressable
                onPress={() => {
                  this.updateProfilePic();
                }}>
                <FastImage
                  source={require('../../assets/dummy.jpeg')}
                  style={styles.logo}
                />
              </Pressable>
              <Text style={{color: 'white', marginTop: hp('2%')}}>
                Tap the image to change Profile Picture
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View style={{alignSelf:'center'}}>
            <TextInput
              style={{width: wp('95%'), marginTop: hp('2%')}}
              label="Name"
              value={name}
              onFocus={() => this.setState({logoNewStyle: true})}
              disabled={true}
              onChangeText={(text) => this.setState({Name: text})}
            />
            <TextInput
              style={{width: wp('95%'), marginTop: hp('2%')}}
              label="Mobile"
              value={phone}
              keyboardType="number-pad"
              maxLength={10}
              disabled={true}
              onChangeText={(text) => this.setState({mobile: text})}
            />
            <TextInput
              style={{width: wp('95%'), marginTop: hp('2%')}}
              label="Email"
              value={email}
              disabled={true}
              keyboardType="email-address"
              onChangeText={(text) => this.setState({email: text})}
            />
            <TextInput
              style={{width: wp('95%'), marginTop: hp('2%')}}
              label="Age"
              value={age}
              onChangeText={(text) => this.setState({age: text})}
            />
            <TextInput
              style={{width: wp('95%'), marginTop: hp('2%')}}
              label="Addrees"
              value={address}
              onChangeText={(text) => this.setState({address: text})}
            />
            <TextInput
              style={{width: wp('95%'), marginTop: hp('2%')}}
              label="Country"
              value={country}
              onChangeText={(text) => this.setState({country: text})}
            />
            <TextInput
              style={{width: wp('95%'), marginTop: hp('2%')}}
              label="State"
              value={state}
              onChangeText={(text) => this.setState({state: text})}
            />
            <TextInput
              style={{width: wp('95%'), marginTop: hp('2%')}}
              label="City"
              value={city}
              onChangeText={(text) => this.setState({city: text})}
            />
            <TextInput
              style={{width: wp('95%'), marginTop: hp('2%')}}
              label="Land-Mark"
              value={landmark}
              onChangeText={(text) => this.setState({landmark: text})}
            />
            <TextInput
              style={{width: wp('95%'), marginTop: hp('2%')}}
              label="Pind Code"
              value={pin_code}
              onChangeText={(text) => this.setState({pin_code: text})}
            />
            <Text style={{marginBottom:hp('3%')}}></Text>
          </View>
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isProfileImageModal}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View
              style={{
                height: hp('10%'),
                width: wp('80%'),
                backgroundColor: 'white',
                borderRadius: hp('2%'),
              }}>
              <View style={{flexDirection: 'row'}}>
                <ActivityIndicator
                  size={50}
                  color="red"
                  style={{margin: wp('4%')}}
                />
                <Text style={{alignSelf: 'center'}}>
                  Uploading Profile Picture
                </Text>
              </View>
            </View>
          </View>
        </Modal>
        <Card style={{height: hp('10%'), backgroundColor: '#80b0bf'}}>
          <LinearGradient
            start={{x: 0.1, y: 0.1}}
            end={{x: 0.7, y: 1.0}}
            colors={
              appdarkmode ? ['grey', 'black'] : ['#aa4b6b', '#6b6b83', '#3b8d99']
            }
            style={{
              height: hp('7%'),
              width: wp('80%'),
              marginTop: hp('2%'),
              borderRadius: hp('4%'),
              alignSelf: 'center',
            }}>
            <TouchableOpacity onPress={()=>{this.TeacherProfileUpdate()}}>
              {!isapihit ? (
                <Text style={styles.buttonText}>Save</Text>
              ) : (
                <View
                  style={{
                    justifyContent: 'center',
                    marginTop: hp('1%'),
                    marginBottom: hp('3%'),
                  }}>
                  <ActivityIndicator size="large" color="white" />
                </View>
              )}
            </TouchableOpacity>
          </LinearGradient>
        </Card>
      
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    Teacheralldata: state.Teacherdashboarddata,
    appdarkmode: state.appdarkmodestate,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchallTeacherData: (data) => dispatch(Teacherdashboarddata(data)),
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(TeacherProfileUpdate);

const styles = StyleSheet.create({
  logo: {
    height: hp('15%'),
    width: hp('15%'),
    borderRadius: hp('8%'),
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: hp('3%'),
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
