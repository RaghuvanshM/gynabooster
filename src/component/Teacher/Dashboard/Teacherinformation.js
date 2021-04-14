import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Modal,
  FlatList,
  Alert,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {AllCourseGetData} from '../../../redux/action/studentdata';
import {Teacherotherinfodata} from '../../../redux/action/TeacherData'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TextInput, Card} from 'react-native-paper';
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
import GetCourseHorizontal from '../Dashboard/component/GetToughtcourse';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {format} from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage';

class TeacherInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisiable: false,
      ToughtSubject: '',
      isModalclasseoffered: false,
      isDatePickerVisible: false,
      date:'',
      time:'',
      classOffered:'',
      isapihit:false,
      experience:'',
      AboutMe:'',
      fees:'',
      classbatch:''
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('Techerloginid').then((token)=>{
    this.props.fetchallAllCourse();
    this.props.fetchotherinformation(token)
    this.TeachProfileShowdata()
    })
  }

  TeachProfileShowdata =()=>{
    let {aboutme,batch,class_type,courselist,
      education,experience,mobile_date,
      mobile_time,fees
    } = this.props.TeacherOtherInformationdata;
    this.setState({
      AboutMe:aboutme,
      classbatch:batch,
      ToughtSubject:courselist,
      classOffered:class_type,
      experience:experience,
      date:mobile_date,
      time:mobile_time,
      fees:fees

      
    })
  }
  showDatePicker = () => {
    this.setState({isDatePickerVisible: true});
  };
  showTimePicker=()=>{
    this.setState({isTimePickerVisible: true});
  }

  hideTimePicker =()=>{
    this.setState({isTimePickerVisible:false})
  }
  hideDatePicker = () => {
    this.setState({isDatePickerVisible: false});
  };
  handleConfirm = (date) => {
    var formattedDate = format(date, 'dd/MM/yyyy');
   this.setState({date:formattedDate})
    this.hideDatePicker();
  };
  handleConfirmTime =(time)=>{
     let newtime =  time.getHours()+":"+time.getMinutes()
     this.setState({time:newtime});
    this.hideTimePicker();
  }
  TeacherotherInformation=()=>{
    let {AboutMe,classOffered,classbatch,ToughtSubject,fees,experience,time,date} = this.state
    AsyncStorage.getItem('Techerloginid').then((token) => {
    const url ='https://gyanbooster.jingleinfo.com/mobileapp/user/teacher'
    let data = {
      teacher_registration_id: parseInt(token),
      aboutme:AboutMe,
      class_type:classOffered,
      education:'Mca',
      experience:experience,
      fees:fees,
      batch:classbatch,
      mobile_date:date,
      mobile_time:time

    }
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
          this.props.fetchotherinformation(token)
        })
      })
  }
  render() {
    const url = 'http://gyanbooster.jingleinfo.com/admin/thumb_img/';
    let {appdarkmode} = this.props;
    let {
      ToughtSubject,
      isModalVisiable,
      isModalclasseoffered,
      isDatePickerVisible,
      date,
      isTimePickerVisible,
      time,
      classOffered,
      isapihit,
      AboutMe,
      experience,
      fees,
      classbatch,

    } = this.state;
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{flex: 1, alignSelf: 'center', marginTop: hp('4%')}}
          onPress={() => {
            this.setState({
              ToughtSubject: item.course_name,
              isModalVisiable: false,
            });
          }}>
          <Card
            style={
              appdarkmode ? styles.ModalCourseCardDark : styles.ModalCourseCard
            }>
            <View style={{flexDirection: 'row', margin: hp('2%')}}>
              <Image
                source={{uri: url + item.thumb_img}}
                style={{
                  height: hp('5%'),
                  width: wp('10%'),
                  marginRight: hp('2%'),
                }}
              />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{width: wp('50%')}}>
                {item.course_name}
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{flex:1}}>
        <ScrollView>
          <LinearGradient
            colors={
              appdarkmode
                ? ['black', 'grey']
                : ['#aa4b6b', '#6b6b83', '#3b8d99']
            }
            style={{height: hp('30%')}}>
            <View>
              <View style={{flexDirection: 'row', margin: hp('2%')}}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.goBack();
                  }}>
                  <View>
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      color="white"
                      size={25}
                    />
                  </View>
                </TouchableOpacity>

                <View>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: hp('1%'),
                      fontSize: 18,
                    }}>
                    Update Information
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('Teacherinformation');
                    }}>
                    <View>
                      <FontAwesomeIcon
                        icon={faPen}
                        color="white"
                        size={25}
                        style={{marginLeft: hp('6%')}}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
          <View>
            <Pressable
              onPress={() => {
                this.setState({isModalVisiable: true});
              }}>
              <TextInput
                style={{
                  width: wp('95%'),
                  alignSelf: 'center',
                  marginTop: hp('2%'),
                }}
                label="Choose Subject"
                disabled={true}
                value={ToughtSubject}
                onChangeText={(text) => this.setState({ToughtSubject:text})}
              />
            </Pressable>
            <View>
              <TextInput
                style={{
                  width: wp('95%'),
                  alignSelf: 'center',
                  marginTop: hp('2%'),
                }}
                label="About Me"
                value={AboutMe}
                multiline={true}
                onChangeText={(text) => this.setState({AboutMe:text})}
              />
              <Pressable
                onPress={() => {
                  this.setState({isModalclasseoffered: true});
                }}>
                <TextInput
                  style={{
                    width: wp('95%'),
                    alignSelf: 'center',
                    marginTop: hp('2%'),
                  }}
                  label="Classes offered by"
                  disabled={true}
                  value={classOffered}
                  onChangeText={(text) => this.setState({classOffered:text})}
                />
              </Pressable>
              <TextInput
                style={{
                  width: wp('95%'),
                  alignSelf: 'center',
                  marginTop: hp('2%'),
                }}
                label="Experience"
                keyboardType={'number-pad'}
                value={experience}
                onChangeText={(text) => this.setState({experience:text})}
              />
              <TextInput
                style={{
                  width: wp('95%'),
                  alignSelf: 'center',
                  marginTop: hp('2%'),
                }}
                label="Fees"
                keyboardType={'number-pad'}
                value={fees}
                onChangeText={(text) => this.setState({fees:text})}
              />
              <TextInput
                style={{
                  width: wp('95%'),
                  alignSelf: 'center',
                  marginTop: hp('2%'),
                }}
                label="Class Batch"
                value={classbatch}
                onChangeText={(text) => this.setState({classbatch:text})}

              />
              <Pressable
                onPress={() => {
                  this.showDatePicker();
                }}>
                <TextInput
                  style={{
                    width: wp('95%'),
                    alignSelf: 'center',
                    marginTop: hp('2%'),
                  }}
                  value={date}
                  label="Date"
                  disabled={true}
                />
              </Pressable>
              <Pressable
              onPress={()=>{this.showTimePicker()}}
              >
              <TextInput
                style={{
                  width: wp('95%'),
                  alignSelf: 'center',
                  marginTop: hp('2%'),
                }}
                label="Time"
                value={time}
                disabled={true}
              />
              </Pressable>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={this.handleConfirm}
                onCancel={this.hideDatePicker}
              />
               <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={this.handleConfirmTime}
                onCancel={this.hideTimePicker}
              />
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
              this.setState({isModalVisiable: false});
            }}
            visible={this.state.isModalVisiable}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: hp('40%'),
                  width: wp('80%'),
                  backgroundColor: 'white',
                  borderRadius: hp('3%'),
                }}>
                <FlatList
                  data={this.props.AllCourseGet}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                  renderItem={renderItem}
                />
              </View>
            </View>
          </Modal>
          <Modal
            visible={isModalclasseoffered}
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
              this.setState({isModalclasseoffered: false});
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: hp('20%'),
                  width: wp('40%'),
                  backgroundColor: 'white',
                  borderRadius: hp('3%'),
                }}>
                <View style={{alignSelf: 'center', marginTop: hp('5%')}}>
                  <Text>Choose one of them</Text>
                  <Pressable
                    onPress={() => {
                      this.setState({isModalclasseoffered: false,classOffered:'Individual'});
                    }}>
                    <Text>Individual</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      this.setState({isModalclasseoffered: false,classOffered:'In Group'});
                    }}>
                    <Text>In Group</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
        <Card style={{height: hp('10%'), backgroundColor:'#80b0bf'}}>
          <LinearGradient
            start={{x: 0.1, y: 0.1}}
            end={{x: 0.7, y: 1.0}}
            colors={
              appdarkmode
                ? ['black', 'grey']
                : ['#aa4b6b', '#6b6b83', '#3b8d99']
            }
            style={{
              height: hp('7%'),
              width: wp('80%'),
              marginTop: hp('2%'),
              borderRadius: hp('4%'),
              alignSelf: 'center',
            }}>
            <TouchableOpacity onPress={()=>{this.TeacherotherInformation()}}>
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
    AllCourseGet: state.AllCourse,
    appdarkmode: state.appdarkmodestate,
    TeacherOtherInformationdata:state.TeacherOtherInformation
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchallAllCourse: () => dispatch(AllCourseGetData()),
    fetchotherinformation: (teacherlogiinid) => dispatch(Teacherotherinfodata(teacherlogiinid)),
  
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TeacherInformation);
const styles = StyleSheet.create({
  //dark mode
  choissubjectdark: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'white',
  },

  //light mode
  choissubject: {
    fontSize: 18,
    alignSelf: 'center',
  },
  ModalCourseCardDark: {
    height: hp('10%'),
    width: wp('80%'),
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
