import React from 'react';
import { Text, StyleSheet, View, Dimensions, 
  Image, ScrollView, TextInput,TouchableOpacity,
   ActionSheetIOS, MaskedViewBase, 
   Pressable } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { Avatar } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux'
import { faBell, faBook, faBookmark, faCommentDollar, faDownload, faPencilRuler, faPenSquare, faPhone, faPhoneVolume, faSquare, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Component } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {studentdashboarddata} from '../../../redux/action/studentdata'
import LinearGradient from 'react-native-linear-gradient';
import {studentClass} from '../../../redux/action/studentdata'
import { State } from 'react-native-gesture-handler';
class DrawerContent extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
     console.log('this is drawertime element');
    AsyncStorage.getItem('Loginid').then((token) => {
      let id = parseInt(token)
    this.props.fetchallData(id)
    })
    //this.props.fetchallClases()
  }
  render(){
  //   console.log(this.props.studentalldata);
   let {name,email,phone,city,age,img} = this.props.studentalldata
    const url = 'http://gyanbooster.jingleinfo.com/mobileapp/upload/studentprofile/'
    return(
  <View>
    <ScrollView>
      <LinearGradient colors={['#aa4b6b', '#6b6b83', '#3b8d99']} style={{ height: hp('23%'), width: wp('65%'), borderRadius: hp('2%'), marginTop: hp('3%'), alignSelf: "center" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
        <View>
        </View>
        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('studentprofileup') }}
        >
          <View>
            <FontAwesomeIcon
              icon={faPenSquare}
              style={{ color: 'white', margin: hp('2%') }}
              size={30}
            />
          </View>
        </TouchableOpacity>
      </View >
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image source={{uri:url}} style={styles.profileimage} />
        </View>
        {/* <Avatar.Image size={24} source={{uri:url}} /> */}
        <View style={{ marginTop: hp('5%') }}>
          <Text style={{ color: 'white', fontWeight: "bold" }}>{name}</Text>
          <Text style={{ color: 'white' }}>{email}</Text>
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

                onPress={() => { this.props.navigation.navigate('Profile') }}
              />
            </View>
            <View >
              <DrawerItem
                labelStyle={styles.drawerContentList}
                inactiveBackgroundColor={styles.back}
                icon={() => (
                 <View> 
                   <FontAwesomeIcon
                    icon={faBook}
                    style={styles.drawerIcon}
                    size={20}
                  />
                  </View>
                )}
                label="Books"
                
                onPress={() => { this.props.navigation.navigate('Profile') }}
              />
               <View >
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
                
                onPress={() => { this.props.navigation.navigate('Profile') }}
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
                
                onPress={() => { this.props.navigation.navigate('Profile') }}
              />
            </View>
            <View >
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
                
                onPress={() => { this.props.navigation.navigate('Profile') }}
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
                
                onPress={() => { this.props.navigation.navigate('Profile') }}
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
                
                onPress={() => { this.props.navigation.navigate('Profile') }}
              />
            </View>
            
            </View>
            </View>     
            </ScrollView>
    </View>
    
    )
  }
}
function mapStateToProps(state) {
  console.log(state)
  return {
       studentalldata:state.studentData
  }
}
  function mapDispatchToProps (dispatch) {
    return {
      fetchallData: (data) => dispatch(studentdashboarddata(data)),
      fetchallClases:()=>dispatch(studentClass())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(DrawerContent)
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  linearGradient: {
    height: hp('30%'),
    padding: 20

  },
  mainDrawer: {
    backgroundColor: 'white'
  },
  userInfoSection: {
    paddingLeft: wp('5%'),
    height: hp('40%')
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
    marginLeft: hp('3%')

  },
  title: {
    fontSize: hp('2%'),
    marginTop: hp('2%'),
    fontWeight: 'bold',
    color: 'white'
  },
  drawerAllitem: {
    marginTop: hp('10%'),
    color: 'white',
  
  },
  drawerIcon: {
    color: '#4ea2f5'
  },
  draweritem: {
    color: '#ab2020'
  },
  caption: {
    color: 'white'
  },
  back: {
    backgroundColor: 'white'
  },

});