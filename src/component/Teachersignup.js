

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
import { TextInput } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import * as Animatable from 'react-native-animatable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
export default class TeacherLoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            showpassword: true,
            changebuttonColor:false,
            logoNewStyle:false

        }
    }

    render() {
        let { email, showpassword,changebuttonColor,logoNewStyle } = this.state;
        const eye = <TextInput.Icon name="eye" size={25} color={'#C22D0D'}
            onPress={() => { this.setState({showpassword:true}) }}
        />
        const eyecrros = <TextInput.Icon name="eye"
            size={25} color={'#C22D0D'}
            onPress={() => { this.setState({showpassword:true}) }}
        />
        return (
            <LinearGradient start={{ x: 0.0, y: 0.1 }} end={{ x: 0.3, y: 1.0 }} colors={['#DED2D0','#F6F1F0']} style={styles.linearGradient}>
                <View style={styles.header}>
                    <Animatable.Image
                        animation="fadeInDown"

                        source={require('../assets/gyan.png')}
                        style={!logoNewStyle?styles.logo:styles.newlog}
                        resizeMode="stretch"
                    />
                </View>
                <Animatable.View
                    animation="fadeInUp"
                    style={styles.footer}>
                        <ScrollView>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={styles.loginMainHeading}>Teacher SignUp</Text>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                    <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}
                            label="Name"
                            value={email}
                            onFocus={()=>this.setState({logoNewStyle:true})}
                            mode="outlined"
                            onChangeText={text => this.setState({ email: text })}
                            left={<TextInput.Icon name="emoticon" size={25}
                                color={'#C22D0D'}

                            />}
                        />
                         <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}
                            label="Mobile"
                            value={email}
                            mode="outlined"
                            onChangeText={text => this.setState({ email: text })}
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
                            value={email}
                            mode="outlined"
                            right={!showpassword?eyecrros:eye}
                            secureTextEntry={showpassword}
                            left={<TextInput.Icon name="lock" size={25}
                                color={'#C22D0D'}

                            />}

                            onChangeText={text => this.setState({ email: text })}
                        />
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}
                            label="Password"
                            value={email}
                            mode="outlined"
                            right={!showpassword?eyecrros:eye}
                            secureTextEntry={showpassword}
                            left={<TextInput.Icon name="lock" size={25}
                                color={'#C22D0D'}

                            />}

                            onChangeText={text => this.setState({ email: text })}
                        />
                    </View>
                    <LinearGradient start={{ x: 0.1, y: 0.1 }} end={{ x: 0.7, y: 1.0 }} colors={changebuttonColor?['#fe7223', '#4A569D', '#192f6a']:['#192f6a', '#4A569D','#fe7223']} style={{ height: hp('6%'), width: wp('70%'), marginTop: hp('2%'), borderRadius: 10, alignSelf: 'center' }}>
                        <TouchableOpacity
                            onPress={() => { this.setState({changebuttonColor:!changebuttonColor})}}
                        >
                            <Text style={styles.buttonText}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    </ScrollView>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius:hp('2%'),
        borderTopRightRadius:hp('2%'),
        paddingVertical:hp('2%'),
        paddingHorizontal:hp('3%'),
        marginTop:hp('10%')
    },
    logo: {
        width:wp('40%'),
        height:hp('20%'),
        marginTop:hp('5%')
    },
    newlog:{
        width:wp('40%'),
        height:hp('20%'),
        marginTop:hp('5%')
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