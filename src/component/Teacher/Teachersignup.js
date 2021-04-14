

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
import { TextInput } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import * as Animatable from 'react-native-animatable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { showMessage, hideMessage } from "react-native-flash-message";
export default class TeacherLoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            showpassword: true,
            showcpassword: true,
            changebuttonColor: false,
            logoNewStyle: false,
            name: '',
            email: '',
            mobile: '',
            password: '',
            cpassword: '',
            isapihit:false
        }
        // binding all the funtion 
        this.TeacherSignUp = this.TeacherSignUp.bind(this);
    }
    TeacherSignUp = () => {
        this.setState({isapihit:true})
        let { name, email, password, cpassword, mobile } = this.state;
        const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/teacher_registration'
        let data = {
            name: name,
            email: email,
            password: password,
            cnfpassword: cpassword,
            mobile: mobile
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
                    this.setState({
                        isapihit:false,
                        name:'',
                        mobile:'',
                        email:'',
                        password:'',
                        cpassword:''
                    })
                    showMessage({
                        message: res2.response.message,
                        type: "success",
                    });
                }
                else {
                    this.setState({isapihit:false})
                    showMessage({
                        message: res2.response.message,
                        type: "single",
                    })
                }
            })
    }
    render() {
        let { name, email, password, showcpassword,
             cpassword, mobile, showpassword, 
             changebuttonColor, logoNewStyle,
             isapihit
             } = this.state;
        const eye = <TextInput.Icon name="eye-off" size={25} color={'#C22D0D'}
            onPress={() => { this.setState({ showpassword: !showpassword }) }}
        />
        const eyecrros = <TextInput.Icon name="eye"
            size={25} color={'#C22D0D'}
            onPress={() => { this.setState({ showpassword: !showpassword }) }}
        />
        const confirmeye = <TextInput.Icon name="eye-off" size={25} color={'#C22D0D'}
            onPress={() => { this.setState({ showcpassword: !showcpassword }) }}
        />
        const confirmeyecrros = <TextInput.Icon name="eye"
            size={25} color={'#C22D0D'}
            onPress={() => { this.setState({ showcpassword: !showcpassword }) }}
        />
        return (
            <View>
                <ScrollView>
                <View style={{alignSelf:"center"}}>
                <Image
                    source={require('../../assets/gyan.png')}
                    style={!logoNewStyle ? styles.logo : styles.newlog}
                    resizeMode="stretch"
                />
                </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={styles.loginMainHeading}>Teacher SignUp</Text>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}
                            label="Name"
                            value={name}
                            onFocus={() => this.setState({ logoNewStyle: true })}
                            mode="outlined"
                            onChangeText={text => this.setState({ name: text })}
                            left={<TextInput.Icon name="emoticon" size={25}
                                color={'#C22D0D'}

                            />}
                        />
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}
                            label="Mobile"
                            value={mobile}
                            mode="outlined"
                            keyboardType="number-pad"
                            maxLength={10}
                            onChangeText={text => this.setState({ mobile: text })}
                            left={<TextInput.Icon name="phone" size={25}
                                color={'#C22D0D'}

                            />}
                        />
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}
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
                            style={{ width: wp('80%'), marginTop: hp('2%') }}
                            label="Password"
                            value={password}
                            mode="outlined"
                            right={!showpassword ?eye:eyecrros }
                            secureTextEntry={showpassword}
                            left={<TextInput.Icon name="lock" size={25}
                                color={'#C22D0D'}

                            />}

                            onChangeText={text => this.setState({ password: text })}
                        />
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}

                            label="Confirm Password"
                            value={cpassword}
                            mode="outlined"
                            right={!showcpassword ?confirmeye:confirmeyecrros }
                            secureTextEntry={showcpassword}
                            left={<TextInput.Icon name="lock" size={25}
                                color={'#C22D0D'}

                            />}

                            onChangeText={text => this.setState({ cpassword: text })}
                        />
                    </View>
                    <LinearGradient start={{ x: 0.1, y: 0.1 }} end={{ x: 0.7, y: 1.0 }} colors={changebuttonColor ? ['#fe7223', '#4A569D', '#192f6a'] : ['#aa4b6b', '#6b6b83', '#3b8d99']} style={{ height: hp('6%'), width: wp('70%'), marginTop: hp('2%'), borderRadius: 10, alignSelf: 'center' }}>
                        <TouchableOpacity
                            onPress={this.TeacherSignUp}
                        >
                            {!isapihit?<Text style={styles.buttonText}>
                                SignUp
                            </Text>:<View style={{marginTop:hp('1%')}}><ActivityIndicator size="large" color="white" /></View>}

                        </TouchableOpacity>
                    </LinearGradient>
                    <View style={{ flexDirection: 'row', alignSelf: "center", marginTop: hp('1%') }}>
                        <Text>
                            Already have an account?
                        </Text>
                        <Pressable onPress={() => { this.props.navigation.navigate('TeacherLogin') }}>
                            <Text style={{ color: '#80080a', marginLeft: wp('1%') }}>Login</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>

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
        marginTop: hp('2%')
    },
    logo: {
        width: wp('30%'),
        height: hp('15%'),
        marginTop: hp('2%')
    },
    newlog: {
        width: wp('30%'),
        height: hp('15%'),
        marginTop: hp('2%')
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