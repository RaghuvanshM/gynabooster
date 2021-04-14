import React, { Component } from 'react'
import {
 Text,
 View,
 Button,
 TouchableOpacity
} from 'react-native'
import { HomeScreenComponent,TestScreenComponent,BlogScreenComponent } from '../../../index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { studentClass } from '../../../redux/action/studentdata'
import {connect} from 'react-redux'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Tab = createBottomTabNavigator();
class  MyTabs extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
  this.props.fetchallCourse()
  }
  render(){
    let {mode} = this.props
  return (
    <Tab.Navigator
    tabBarOptions={{
        activeTintColor:mode?'white':'#ab2020',
        inactiveTintColor:'grey',
        style:{height:hp('10%'),borderRadius:hp('1%'),borderTopLeftRadius:hp('3%'),borderTopRightRadius:hp('3%')},
        labelStyle: {
          fontSize:hp('2%'),
          margin: 0,
          padding: 0,
        },
        
      }}
    >
      <Tab.Screen 
      name="Home" 
      component={HomeScreenComponent}
      options={{
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={hp('5%')} />)

      }}
       />
        <Tab.Screen 
      name="Blogs" 
      component={BlogScreenComponent} 
      options={{
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="file-certificate" color={color} size={hp('5%')} />)

      }}
      />
      <Tab.Screen 
      name="Test" 
      component={TestScreenComponent} 
      options={{
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="file-certificate" color={color} size={hp('5%')} />)

      }}
      />
    </Tab.Navigator>
  );
    }
}
function mapStateToProps(state) {
  return {
      studentalldata: state.studentData,
      mode:state.appdarkmodestate
  }
}
function mapDispatchToProps(dispatch) {
  return {
      fetchallCourse: () => dispatch(studentClass())
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyTabs)