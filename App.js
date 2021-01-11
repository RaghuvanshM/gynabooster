import React from 'react'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import SplashComponent from './src/component/Loading'
import TeacherLoginComponent from './src/component/TeacherLogin'
import TeaccherSignComponent from './src/component/Teachersignup'
import {
  Text,
  View
} from 'react-native'
import LoginScreen from './src/component/Login'
const App =()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Loading" component={SplashComponent}
     options={{headerShown:false}}
    
    />
    <Stack.Screen name="TeacherSignUp" component={TeaccherSignComponent}
     options={{headerShown:false}}
    
    />
    <Stack.Screen 
    name="Login" component={LoginScreen} 
    options={{headerShown:false}}
    />
     <Stack.Screen 
    name="TeacherLogin" component={TeacherLoginComponent} 
    options={{headerShown:false}}
    />
  </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App;