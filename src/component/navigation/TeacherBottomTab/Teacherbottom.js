import React from 'react'
import {
 Text,
 View,
 Button,
 TouchableOpacity
} from 'react-native'
import HomeScreenComponent from '../../Teacher/Dashboard/Home'
import SubjectScreenComponent from '../../Teacher/Dashboard/subject'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
    tabBarOptions={{
        activeTintColor: '#ab2020',
        inactiveTintColor:'grey',
        style:{height:hp('8%'),borderRadius:hp('1%')},
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
      name="subject" 
      component={SubjectScreenComponent} 
      options={{
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="file-certificate" color={color} size={hp('5%')} />)

      }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs