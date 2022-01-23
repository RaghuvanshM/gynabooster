import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CourseList from '../student/Component/courseList';
import Coursecategory from '../student/Dashboard/coursecategory';
import ChapterList from '../student/Component/Chapter1';
import HomeScreen from '../student/Dashboard/HomeScreen';
import ClassList from '../student/Dashboard/ClassList';
import CourseDescription from '../student/Dashboard/CourseDescription';
import Account from '../student/Dashboard/Account';
import StudentBottomTab from './BottomTabStudent/StudentbottomTab';
const Stack = createStackNavigator();

function StudentAppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StudentBottomTab"
        component={StudentBottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ClassList"
        component={ClassList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CourseList"
        component={CourseList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Coursecatogry"
        component={Coursecategory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chapter"
        component={ChapterList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CourseDescription"
        component={CourseDescription}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default StudentAppStack;
