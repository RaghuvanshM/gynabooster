import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChapterList from '../../student/Component/Chapter1';
import HomeScreen from '../../student/Dashboard/HomeScreen';
import Account from '../../student/Dashboard/Account';
import CourseList from '../../student/Component/courseList';
import ClassList from '../../student/Dashboard/ClassList';
import {View, Text} from 'react-native';
import HomeIcon from 'react-native-vector-icons/Entypo';
import UserIcon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function StudentBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{ShowLabel: false, headerShown: false}}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#52459f',
          height: 60,
          borderTopLeftRadius: 10,
        },
      }}>
      <Tab.Screen
        name="ClassList"
        component={ClassList}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <HomeIcon name="home" size={25} color={'white'} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <UserIcon name="user" size={25} color={'white'} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default StudentBottomTab;
