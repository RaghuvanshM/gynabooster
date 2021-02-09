

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Pressable,
    ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux'
import { TextInput } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import * as Animatable from 'react-native-animatable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { studentlogin } from '../../redux/action/studentLogin'
class StudentLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            showpassword: true,
            password: '',
            isApihit: false
        }
    }
    StudentLogin = () => {
        this.setState({isApihit:true})
        let { email, password } = this.state;
        const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/student_login'
        let data = {
            email: email,
            password: password,

        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'prabhat@123'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(res2 => {
               
                if (res2.response.status === "true") {
                    let {id} =res2.data  
                     AsyncStorage.setItem("Loginid",id)
                    this.setState({
                        isApihit:false,
                        email:'',
                        password:''
                    })
                    showMessage({
                        message: res2.response.message,
                        type: "success",
                    })
                    this.props.navigation.navigate('bottomTab')
                }
                else {
                    this.setState({isApihit:false})
                    showMessage({
                        message: res2.response.message,
                        type: "single",
                    })
                }
            })
    }



    render() {
        let { email, showpassword, password, isApihit } = this.state;
        const eye = <TextInput.Icon name="eye" size={25} color={'#C22D0D'}
            onPress={() => { this.setState({ showpassword: !showpassword }) }}
        />
        const eyecrros = <TextInput.Icon name="eye-off"
            size={25} color={'#C22D0D'}
            onPress={() => { this.setState({ showpassword: !showpassword }) }}
        />
        return (
            <LinearGradient start={{ x: 0.0, y: 0.1 }} end={{ x: 0.3, y: 1.0 }} colors={['#DED2D0', '#F6F1F0']} style={styles.linearGradient}>
                <View style={styles.header}>
                    <Animatable.Image
                        animation="fadeInDown"
                        source={require('../../assets/gyan.png')}
                        style={styles.logo}
                        resizeMode="stretch"
                    />
                </View>
                <Animatable.View
                    animation="fadeInUp"
                    style={styles.footer}>
                    <ScrollView>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <Text style={styles.loginMainHeading}>Student Login</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <TextInput
                                style={{ width: wp('85%'), marginTop: hp('2%') }}
                                label="Email"
                                value={email}
                                mode="outlined"
                                keyboardType="email-address"

                                onChangeText={text => this.setState({ email: text })}
                                left={<TextInput.Icon name="email" size={25}
                                    color={'#C22D0D'}

                                />}
                            />
                            <TextInput
                                style={{ width: wp('85%'), marginTop: hp('2%') }}
                                label="Password"
                                value={password}
                                mode="outlined"
                                right={!showpassword ? eyecrros : eye}
                                secureTextEntry={showpassword}
                                left={<TextInput.Icon name="lock" size={25}
                                    color={'#C22D0D'}

                                />}

                                onChangeText={text => this.setState({ password: text })}
                            />
                        </View>
                        <LinearGradient start={{ x: 0.1, y: 0.1 }} end={{ x: 0.7, y: 1.0 }} colors={['#aa4b6b', '#6b6b83', '#3b8d99']} style={{ height: 50, width: wp('85%'), marginTop: hp('2%'), borderRadius: 10, alignSelf: 'center' }}>
                            <TouchableOpacity
                                onPress={() => { this.StudentLogin()}}
                            >
                                {!isApihit ? <Text style={styles.buttonText}>
                                    Login
                            </Text> : <View style={{ alignSelf: "center", marginTop: hp('1%') }} ><ActivityIndicator size="large" color="white" /></View>}
                            </TouchableOpacity>
                        </LinearGradient>
                        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: hp('2%') }}>
                            <Text>Don't have an account?</Text>
                            <Pressable onPress={() => { this.props.navigation.navigate('StudentSignUp') }}>
                                <Text style={{ color: "#80080a", marginLeft: wp('1%') }}>SignUp</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </Animatable.View>
            </LinearGradient>
        );
    }
}
function mapStateToProps(state) {

    return {
        studentloginid: state.studentloginid,
        studentloginstatus: state.studentloginstatus,
        studentloginMessage: state.studentloginMessage
    }

}
function mapDispatchToProps(dispatch) {
    return {
        userlogin: (text) => dispatch(studentlogin(text)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentLogin)

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,

    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: hp('2%'),
        borderTopRightRadius: hp('2%'),
        paddingVertical: hp('2%'),
        paddingHorizontal: hp('3%'),
        marginTop: hp('10')
    },
    logo: {
        width: wp('40%'),
        height: hp('20%'),
        marginTop: hp('5%')
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
        fontSize: hp('3%'),
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    loginMainHeading: {
        fontSize: hp('3%'),

    },
    loginSubHeading: {
        fontSize: hp('3%'),
        fontWeight: 'bold'

    },


});