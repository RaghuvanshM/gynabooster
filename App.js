import React from 'react'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import SplashComponent from './src/component/Loading'
import TeacherLoginComponent from './src/component/Teacher/TeacherLogin'
import TeaccherSignComponent from './src/component/Teacher/Teachersignup'
import StudentLoginComponent from './src/component/student/studentlogin'
import StudentSignUpComponent from './src/component/student/studentSignup'
import FlashMessage from "react-native-flash-message";
import StudentBottomTabScreen from './src/component/navigation/DrawernavigationTeacher/Drawerhome'
import TeacherBottomTabScreen from './src/component/navigation/TeacherDrawer/TeacherDrawerHome'
import StudentProfileUpdatComponent from './src/component/student/studentprfileupdate'
import  CoursesComponent  from "./src/component/student/Dashboard/courses";
import {
  Text,
  View
} from 'react-native'
import ConfirmationScreen from './src/component/confirmation'
import store from './src/redux/store/appstore'
import { Provider } from 'react-redux'
import DrawerContentComponent from './src/component/navigation/DrawernavigationTeacher/Draweritmenew'
const App =()=>{
  return(
    <Provider store={store()}>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Loading" component={SplashComponent}
     options={{headerShown:false}}
    
    />
    <Stack.Screen name="TeacherSignUp" component={TeaccherSignComponent}
     options={{headerShown:false}}
    
    />
    <Stack.Screen 
    name="Confirmation" component={ConfirmationScreen} 
    options={{headerShown:false}}
    />
     <Stack.Screen 
    name="TeacherLogin" component={TeacherLoginComponent} 
    options={{headerShown:false}}
    />
    <Stack.Screen 
    name="StudentLogin" component={StudentLoginComponent} 
    options={{headerShown:false}}
    />
      <Stack.Screen 
    name="StudentSignUp" component={StudentSignUpComponent} 
    options={{headerShown:false}}
    />
     <Stack.Screen 
    name="bottomTab" component={StudentBottomTabScreen} 
    options={{headerShown:false}}
    />
      <Stack.Screen 
    name="TeacherbottomTab" component={TeacherBottomTabScreen} 
    options={{headerShown:false}}
    />
     <Stack.Screen 
    name="drawerconten" component={DrawerContentComponent} 
    options={{headerShown:false}}
    />
    <Stack.Screen 
    name="studentprofileup" component={StudentProfileUpdatComponent} 
    options={{headerShown:false}}
    />
     <Stack.Screen 
    name="courses" component={CoursesComponent} 
    options={{headerShown:false}}
    />
  </Stack.Navigator>
  <FlashMessage position="bottom"
  floating={true}
  
  /> 
  </NavigationContainer>
  </Provider>
  )
}
export default App;