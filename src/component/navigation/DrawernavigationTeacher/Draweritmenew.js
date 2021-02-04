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
import {Avatar} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import {
  faBell,
  faBook,
  faBookmark,
  faCommentDollar,
  faDownload,
  faMoon,
  faPencilRuler,
  faPenSquare,
  faPhone,
  faPhoneVolume,
  faSquare,
  faSun,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {studentdashboarddata} from '../../../redux/action/studentdata';
import LinearGradient from 'react-native-linear-gradient';
import {studentClass, DarkMode} from '../../../redux/action/studentdata';
import {State} from 'react-native-gesture-handler';
import FlipToggle from 'react-native-flip-toggle-button';
import {color} from 'react-native-reanimated';
class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('Loginid').then((token) => {
      let id = parseInt(token);
      this.props.fetchallData(id);
    });
    //this.props.fetchallClases()
  }
  OnDarkModde = (isActive) => {
    this.setState({isActive: !this.state.isActive});
    this.props.AppDarkMode(!isActive);
  };
  render() {
    //  console.log(this.props.studentalldata);
    let {appDarkmode} = this.props;
    let {isActive} = this.state;
    let {name, email, phone, city, age, img} = this.props.studentalldata;
    const url =
      'http://gyanbooster.jingleinfo.com/mobileapp/upload/studentprofile/' +
      img;
    return (
      <View>
        <ScrollView>
          <LinearGradient
            colors={['#aa4b6b', '#6b6b83', '#3b8d99']}
            style={{
              height: hp('23%'),
              width: wp('65%'),
              borderRadius: hp('2%'),
              marginTop: hp('3%'),
              alignSelf: 'center',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.OnDarkModde(isActive);
                  }}>
                  {appDarkmode ? (
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
                  this.props.navigation.navigate('studentprofileup');
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
                <FastImage source={{uri: url}} style={styles.profileimage} />
              </View>
              <View style={{marginTop: hp('5%')}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>{name}</Text>
                <Text style={{color: 'white'}}>{email}</Text>
              </View>
            </View>
          </LinearGradient>

          <View style={styles.drawerAllitem}>
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
              labelStyle={
                appDarkmode ? styles.labelstyle : styles.newlabelstyle
              }
              onPress={() => {
                this.props.navigation.navigate('Profile');
              }}
            />
          </View>
          <View>
            <DrawerItem
              labelStyle={styles.drawerContentList}
              inactiveBackgroundColor={styles.back}
              icon={() => (
                <View>
                  <FontAwesomeIcon
                    icon={faBook}
                    style={
                      appDarkmode ? styles.darkmodeIcon : styles.drawerIcon
                    }
                    size={20}
                  />
                </View>
              )}
              label="Books"
              labelStyle={
                appDarkmode ? styles.labelstyle : styles.newlabelstyle
              }
              onPress={() => {
                this.props.navigation.navigate('Profile');
              }}
            />
            <View>
              <DrawerItem
                labelStyle={styles.drawerContentList}
                inactiveBackgroundColor={styles.back}
                icon={() => (
                  <View>
                    <FontAwesomeIcon
                      icon={faDownload}
                      style={styles.drawerIcon}
                      size={20}
                    />
                  </View>
                )}
                label="Videos"
                labelStyle={
                  appDarkmode ? styles.labelstyle : styles.newlabelstyle
                }
                onPress={() => {
                  this.props.navigation.navigate('Profile');
                }}
              />
              <View>
                <DrawerItem
                  labelStyle={styles.drawerContentList}
                  inactiveBackgroundColor={styles.back}
                  icon={() => (
                    <View>
                      <FontAwesomeIcon
                        icon={faBookmark}
                        style={styles.drawerIcon}
                        size={20}
                      />
                    </View>
                  )}
                  label="Bookmarks"
                  labelStyle={
                    appDarkmode ? styles.labelstyle : styles.newlabelstyle
                  }
                  onPress={() => {
                    this.props.navigation.navigate('Profile');
                  }}
                />
              </View>
              <View>
                <DrawerItem
                  labelStyle={styles.drawerContentList}
                  inactiveBackgroundColor={styles.back}
                  icon={() => (
                    <View>
                      <FontAwesomeIcon
                        icon={faCommentDollar}
                        style={styles.drawerIcon}
                        size={20}
                      />
                    </View>
                  )}
                  label="Feedback"
                  labelStyle={
                    appDarkmode ? styles.labelstyle : styles.newlabelstyle
                  }
                  onPress={() => {
                    this.props.navigation.navigate('Profile');
                  }}
                />
              </View>
              <View>
                <DrawerItem
                  labelStyle={styles.drawerContentList}
                  inactiveBackgroundColor={styles.back}
                  icon={() => (
                    <View>
                      <FontAwesomeIcon
                        icon={faUsers}
                        style={styles.drawerIcon}
                        size={20}
                      />
                    </View>
                  )}
                  label="About Us"
                  labelStyle={
                    appDarkmode ? styles.labelstyle : styles.newlabelstyle
                  }
                  onPress={() => {
                    this.props.navigation.navigate('Profile');
                  }}
                />
              </View>
              <View>
                <DrawerItem
                  labelStyle={styles.drawerContentList}
                  inactiveBackgroundColor={styles.back}
                  icon={() => (
                    <View>
                      <FontAwesomeIcon
                        icon={faPhoneVolume}
                        style={styles.drawerIcon}
                        size={20}
                      />
                    </View>
                  )}
                  label="Contact Us"
                  labelStyle={
                    appDarkmode ? styles.labelstyle : styles.newlabelstyle
                  }
                  onPress={() => {
                    this.props.navigation.navigate('contactus');
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    studentalldata: state.studentData,
    appDarkmode: state.appdarkmodestate,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchallData: (data) => dispatch(studentdashboarddata(data)),
    fetchallClases: () => dispatch(studentClass()),
    AppDarkMode: (appstate) => dispatch(DarkMode(appstate)),
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
    marginTop: hp('10%'),
    color: 'white',
  },
  drawerIcon: {
    color: '#4ea2f5',
  },
  darkmodeIcon: {
    color: '#4ea2f5',
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
  labelstyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  newlabelstyle: {
    color: 'black',
  },
});
