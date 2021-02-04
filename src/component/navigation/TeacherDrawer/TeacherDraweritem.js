import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActionSheetIOS,
  MaskedViewBase,
  Pressable,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawernvigationvariable} from '../../../utility/Teacherutility/Teaccher';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {
  faPencilRuler,
  faPenSquare,
  faSquare,
  faUser,
  faSun,
  faBell,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  studentdashboarddata,
  DarkMode,
} from '../../../redux/action/studentdata';
import {Teacherdashboarddata} from '../../../redux/action/TeacherData';
import LinearGradient from 'react-native-linear-gradient';
class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('Techerloginid').then((token) => {
      let id = parseInt(token);
      this.props.fetchallTeacherData(id);
    });
  }
  onDarkMode = () => {
    let {isActive} = this.state;
    this.setState({isActive: !this.state.isActive});
    this.props.getappmode(!isActive);
  };
  render() {
    let {appdarkmode} = this.props;
    let {name, email, phone, city, age, img} = this.props.Teacheralldata;
    const url =
      'http://gyanbooster.jingleinfo.com/mobileapp/upload/studentprofile/' +
      img;
    return (
      <View>
        <LinearGradient
          colors={['#aa4b6b', '#6b6b83', '#3b8d99']}
          style={{
            height: hp('23%'),
            width: wp('65%'),
            borderRadius: hp('2%'),
            marginTop: hp('3%'),
            alignSelf: 'center',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.onDarkMode();
                }}>
                {appdarkmode ? (
                  <FontAwesomeIcon
                    icon={faSun}
                    style={{color: 'white', margin: hp('2%')}}
                    size={30}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faMoon}
                    style={{color: 'white', margin: hp('2%')}}
                    size={30}
                  />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Teacherprofileupdate');
              }}>
              <View>
                <FontAwesomeIcon
                  icon={faPenSquare}
                  style={{color: 'white', margin: hp('2%')}}
                  size={30}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                source={
                  img ? {uri: url} : require('../../../assets/dummy.jpeg')
                }
                style={styles.profileimage}
              />
            </View>
            <View style={{marginTop: hp('7%')}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>{name}</Text>
              <Text style={{color: 'white'}}>{email}</Text>
            </View>
          </View>
        </LinearGradient>
        {/* <View style={styles.drawerAllitem}>
          <DrawerItem
            labelStyle={styles.drawerContentList}
            inactiveBackgroundColor={styles.back}
            icon={() => (
              <View>
                <FontAwesomeIcon
                  icon={faBell}
                  style={styles.drawerIcon}
                  size={20}
                />
              </View>
            )}
            label="Notifications"
            // labelStyle={appDarkmode ? styles.labelstyle : styles.newlabelstyle}
            onPress={() => {
              this.props.navigation.navigate('Profile');
            }}
          />
        </View> */}
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
    getappmode: (appmode) => dispatch(DarkMode(appmode)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  linearGradient: {
    height: hp('30%'),
    padding: 20,
  },
  mainDrawer: {
    backgroundColor: 'white',
  },
  userInfoSection: {
    paddingLeft: wp('5%'),
    height: hp('40%'),
  },
  drawerContentList: {
    color: '#42413c',
    fontSize: hp('3%'),
  },
  profileimage: {
    width: wp('25%'),
    height: wp('25%'),
    marginBottom: hp('2%'),
    marginTop: hp('8%'),
    borderRadius: hp('10%'),
    marginLeft: hp('3%'),
  },
  title: {
    fontSize: hp('2%'),
    marginTop: hp('2%'),
    fontWeight: 'bold',
    color: 'white',
  },
  drawerAllitem: {
    marginTop: hp('4%'),
    color: 'white',
    borderTopColor: '#f4f4f4',
    borderTopWidth: hp('.5%'),
  },
  drawerIcon: {
    color: '#f576b2',
  },
  draweritem: {
    color: '#ab2020',
  },
  caption: {
    color: 'white',
  },
  back: {
    backgroundColor: 'white',
  },
});
