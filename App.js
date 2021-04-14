import React, {Component} from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
const Stack = createStackNavigator();
import SplashComponent from './src/component/Loading';
import TeacherLoginComponent from './src/component/Teacher/TeacherLogin';
import TeaccherSignComponent from './src/component/Teacher/Teachersignup';
import StudentLoginComponent from './src/component/student/studentlogin';
import StudentSignUpComponent from './src/component/student/studentSignup';
import FlashMessage from 'react-native-flash-message';
import StudentBottomTabScreen from './src/component/navigation/DrawernavigationTeacher/Drawerhome';
import TeacherBottomTabScreen from './src/component/navigation/TeacherDrawer/TeacherDrawerHome';
import StudentProfileUpdatComponent from './src/component/student/studentprfileupdate';
import CoursesComponent from './src/component/student/Dashboard/courses';
import AllCouresList from './src/component/student/Dashboard/allcourselist';
import VideoListScreenComponent from './src/component/student/Dashboard/videolistScreen';
import VidePlyerScreenComponent from './src/component/student/Dashboard/Videoplayer';
import ContactUsScreecComponent from './src/component/student/Dashboard/contactus';
import {Text, View} from 'react-native';
import ConfirmationScreen from './src/component/confirmation';
import store from './src/redux/store/appstore';
import {Provider, connect} from 'react-redux';
import DrawerContentComponent from './src/component/navigation/DrawernavigationTeacher/Draweritmenew';
import MaterTopBarScreen from './src/component/Teacher/Dashboard/TopBarnavigation/TeacherTopbarnavigation'
import TeacherInformationScreen from './src/component/Teacher/Dashboard/Teacherinformation'
import { BlogDetailsPage,TestInstructionComponent,StarttestComponent } from './src/index';

//Teahcer screen import

import TeacherProfileUpdateComponent from './src/component/Teacher/TeacherProfileupdate'
class App extends Component {
  render() {
    return (
      <NavigationContainer
       independent={true}
        theme={this.props.appDarkmode ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Loading"
            component={SplashComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Confirmation"
            component={ConfirmationScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StudentLogin"
            component={StudentLoginComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StudentSignUp"
            component={StudentSignUpComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="bottomTab"
            component={StudentBottomTabScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TeacherbottomTab"
            component={TeacherBottomTabScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="drawerconten"
            component={DrawerContentComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="studentprofileup"
            component={StudentProfileUpdatComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="courses"
            component={CoursesComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="allcourses"
            component={AllCouresList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="allvideo"
            component={VideoListScreenComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="blogdetails"
            component={BlogDetailsPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="videoplayer"
            component={VidePlyerScreenComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="contactus"
            component={ContactUsScreecComponent}
            options={{headerShown: false}}
          />
            <Stack.Screen
            name="testinstruction"
            component={TestInstructionComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="starttest"
            component={StarttestComponent}
            options={{headerShown: false}}
          />

          {/* Import Teacher screen  */}
          <Stack.Screen
            name="TeacherLogin"
            component={TeacherLoginComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TeacherSignUp"
            component={TeaccherSignComponent}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="Teacherprofileupdate"
            component={TeacherProfileUpdateComponent}
            options={{headerShown: false}}
          />
            <Stack.Screen
            name="materialtopbar"
            component={MaterTopBarScreen}
            options={{headerShown: false}}
          />
            <Stack.Screen
            name="Teacherinformation"
            component={TeacherInformationScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        <FlashMessage position="bottom" floating={true} />
      </NavigationContainer>
    );
  }
}
function mapStateToProps(state) {
  return {
    studentalldata: state.studentData,
    appDarkmode: state.appdarkmodestate,
  };
}
export default connect(mapStateToProps)(App);
