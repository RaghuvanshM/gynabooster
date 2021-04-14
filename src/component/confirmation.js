

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class SplashScreen extends Component {
    render() {
        return (
            <LinearGradient start={{ x: 0.0, y: 0.1 }} end={{ x: 0.3, y: 1.0 }} colors={['#aa4b6b', '#6b6b83', '#3b8d99']} style={styles.linearGradient}>
                <View style={styles.header}>
                    <Animatable.Image
                        animation="fadeInDown"
                        source={require('../assets/gyan.png')}
                        style={styles.logo}
                        resizeMode="stretch"
                    />
                </View>
                <Animatable.View
                    animation="fadeInUp"
                    style={styles.footer}>
                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                    <Text style={styles.loginMainHeading}>Are you Teacher</Text>
                    <Text style={styles.loginSubHeading}>or Student ?</Text>
                    </View>
                    <LinearGradient start={{ x: 0.1, y: 0.1 }} end={{ x: 0.7, y: 1.0 }} colors={['#aa4b6b', '#6b6b83', '#3b8d99']} style={{  width: wp('85%'),marginTop:hp('2%'), borderRadius: 10, alignSelf: 'center' }}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('TeacherLogin') }}
                        >
                            <Text style={styles.buttonText}>
                                Teacher
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient start={{ x: 0.1, y: 0.1 }} end={{ x: 0.7, y: 1.0 }} colors={['#aa4b6b', '#6b6b83', '#3b8d99']} style={{  width: wp('85%'),marginTop:hp('2%'), borderRadius: 10, alignSelf: 'center' }}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('StudentLogin') }}
                        >
                            <Text style={styles.buttonText}>
                                Student
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </Animatable.View>
            </LinearGradient>
        );
    }
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,

    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },
    buttonText: {
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin:7,
        fontSize:hp('3%'),
        color: '#ffffff',
        backgroundColor: 'transparent',
        padding:10
    },
    loginMainHeading: {
        fontSize: hp('3%'),
        color: 'grey'
    },
    loginSubHeading: {
        fontSize: hp('3%'),
        fontWeight: 'bold'

    },

});