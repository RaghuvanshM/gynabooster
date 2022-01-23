import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChapterList from '../../student/Component/Chapter1';
import HomeScreen from '../../student/Dashboard/HomeScreen';
import Account from '../../student/Dashboard/Account';
import CourseList from '../../student/Component/courseList';
import ClassList from '../../student/Dashboard/ClassList';
import {View} from 'react-native-animatable';

const Tab = createBottomTabNavigator();

function StudentBottomTab() {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   tabBarShowLabel: false,
      //   headerShown: false,
      //   tabBarStyle: {backgroundColor: 'blue'},
      // }}
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
            return <View></View>;
          },
        }}
      />
      <Tab.Screen name="Setting" component={Account} />
    </Tab.Navigator>
  );
}
export default StudentBottomTab;
