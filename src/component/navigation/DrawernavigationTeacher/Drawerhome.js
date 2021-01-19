import * as React from 'react';
import { Button, View, StyleSheet, TouchableOpacity,useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import bottomTab from '../BottomTabStudent/StudentbottomTab';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faLock, faArrowRight, faUser, faMobile, faBars } from '@fortawesome/free-solid-svg-icons';
import Drowecontent from './Draweritmenew'
const Drawer = createDrawerNavigator();
const BottomStack = createStackNavigator();
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const BottomStackScreen = ({ navigation }) => (
    <BottomStack.Navigator>
        <BottomStack.Screen name="bottom" component={bottomTab}
            options={{ headerShown: false }}
        />
    </BottomStack.Navigator>
)
export default function Dashboard({ navigation }) {
    const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
    return (
        <Drawer.Navigator 
      drawerStyle={{ width:wp('70%') }}
        drawerContent={props => <Drowecontent {...props} />}>
            <Drawer.Screen name="Profile" component={BottomStackScreen} options={{ drawerLabel: 'red' }} />
        </Drawer.Navigator>
    );
}
const styles = StyleSheet.create({
    navbarstyle: {
        color: 'white',
        marginHorizontal: 10

    }

})