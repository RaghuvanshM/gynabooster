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
    ActivityIndicator,
    Alert,
    Modal
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faCoffee, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import * as Animatable from 'react-native-animatable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView, TapGestureHandler } from 'react-native-gesture-handler';
import { showMessage, hideMessage } from "react-native-flash-message"
import DropDownPicker from 'react-native-dropdown-picker';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { studentdashboarddata } from '../../redux/action/studentdata'
import RNFetchBlob from 'rn-fetch-blob';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
const options = {
    title: 'Profile Picture',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library',
}
class StudentUpdateScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showpassword: true,
            showcpassword: true,
            logoNewStyle: false,
            name: '',
            email: '',
            mobile: '',
            isapihit: false,
            age: '',
            address: '',
            event_name: '',
            country: '',
            state: '',
            city: '',
            landmark: '',
            pin_code: '',
            aboutinstitute: '',
            gender: 'gender',
            isProfileImageModal: false
        }

        // binding all the funtion 
        this.StudentProfileUpdate = this.StudentProfileUpdate.bind(this);
    }
    StudentProfileUpdate = () => {

        this.setState({ isapihit: true })
        let { name, email, password, cpassword, mobile, landmark,
            aboutinstitute, pin_code, age, address, event_name, country,
            state, gender
        } = this.state;
        const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/student_update'
        AsyncStorage.getItem('Loginid').then((token) => {
            let id = parseInt(token);
            let data = {
                id: id,
                name: name,
                email: email,
                password: password,
                cnfpassword: cpassword,
                phone: mobile,
                aboutinstitute: aboutinstitute,
                landmark: landmark,
                pin_code: pin_code,
                age: age,
                address: address,
                event_name: event_name,
                country: country,
                state: state,
                gender: gender
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
                    if (res2.status) {
                        this.setState({
                            isapihit: false,
                        })
                        showMessage({
                            message: res2.message,
                            type: "success",
                        });
                        this.props.fetchallData(id)
                    }
                    else {
                        this.setState({ isapihit: false })
                        showMessage({
                            message: res2.message,
                            type: "single",
                        })
                    }
                })
        })
    }
    validateName = (name) => {
        var regex = /^[a-zA-Z ]{2,30}$/
        if (!regex.test(name)) {
            showMessage({
                message: "Number and special character  is not allowed",
                type: "single line",
            })

        }
    }
    componentDidMount() {
        this.studentupdatedata()
    }
    studentupdatedata = () => {
        let { aboutinstitute, address, age, city,
            country, email, gender, landmark, name,
            phone, pin_code, state
        } = this.props.studentalldata
        this.setState({
            aboutinstitute: aboutinstitute,
            address: address,
            age: age,
            city: city,
            country: country,
            email: email,
            gender: gender,
            landmark: landmark,
            name: name,
            phone: phone,
            pin_code: pin_code,
            state: state
        })
    }
    updateProfilePic = () => {
        AsyncStorage.getItem('Loginid').then((token) => {
            let id = parseInt(token)
            ImagePicker.showImagePicker(options, (response) => {
                if (response.didCancel) {
                    console.log('User cancelled photo picker');
                }
                else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                }
                else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                }
                else {
                    let source = { uri: response.uri }
                    this.setState({ isProfileImageModal: true })
                   
                    AsyncStorage.getItem('Loginid').then((token) => {
                        RNFetchBlob.fetch('POST', 'https://gyanbooster.jingleinfo.com/mobileapp/user/student_pic', {
                            Authorization: "Bearer access-token",
                            otherHeader: "foo",
                            'Content-Type': 'multipart/form-data',
                            'x-api-key': 'prabhat@123'
                        }, [
                            { name: 'img', filename: response.fileName, type: 'image/png', data: response.data },
                            { name: 'id', data: token.toString() }
                        ]).then((resp) => {
                            this.props.fetchallData(id)
                           
                            showMessage({
                                message: "Profile picture successfully updated",
                                type: "success",
                            })
                            this.setState({ isProfileImageModal: false })
                        })
                    })

                }
            });
        })

    }
    render() {
        let { name, phone, email, gender, age, address, country, state, city, landmark,
            pin_code, aboutinstitute, isapihit, isProfileImageModal } = this.state
        let { img } = this.props.studentalldata
        const url = 'http://gyanbooster.jingleinfo.com/mobileapp/upload/studentprofile/' 
        const eye = <TextInput.Icon name="arrow-down-drop-circle-outline" size={25} color={'#C22D0D'}
            onPress={() => { this.setState({ showpassword: !showpassword }) }}
        />
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <LinearGradient colors={['#aa4b6b', '#6b6b83', '#3b8d99']} style={{ height: hp('30%'), width: wp('100%') }}>
                        <View style={{ flexDirection: "row", margin: hp('2%') }}>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('bottomTab') }}
                            >
                                <View>
                                    <FontAwesomeIcon icon={faArrowLeft} color="white" size={hp('3%')} />
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text style={{ color: 'white', marginLeft: hp('3%'), fontSize: hp('2%') }}>Update Profile</Text>
                            </View>
                        </View>
                        <View style={{ alignSelf: "center" }}>
                            <Pressable
                                onPress={() => { this.updateProfilePic() }}
                            >
                                <Image
                                    source={{ uri: url }}
                                    style={styles.logo}
                                   
                                />
                            </Pressable>
                            <Text style={{ color: "white" }}>Tap the image to change Profile Picture</Text>
                        </View>
                    </LinearGradient>
                    <View style={{ alignSelf: 'center' }}>
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}
                            label="Name"
                            value={name}
                            onFocus={() => this.setState({ logoNewStyle: true })}
                            onEndEditing={() => { this.validateName(name) }}
                            mode="outlined"
                            disabled={true}
                            onChangeText={text => this.setState({ name: text })}

                        />
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}
                            label="Mobile"
                            value={phone}
                            mode="outlined"
                            keyboardType="number-pad"
                            maxLength={10}
                            disabled={true}
                            onChangeText={text => this.setState({ mobile: text })}
                        />
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}
                            label="Email"
                            value={email}
                            mode="outlined"
                            disabled={true}
                            keyboardType="email-address"
                            onChangeText={text => this.setState({ email: text })}
                        />
                        {/* <View style={{ width: wp('80%'), marginTop: hp('2%') }}>
                            <DropDownPicker
                                items={[
                                    { label: 'Select Gender', value: 'gender' },
                                    { label: 'MALE', value: 'm' },
                                    { label: 'FEMALE', value: 'f' },
                                ]}
                                defaultValue={this.state.gender}
                                containerStyle={{ height: hp('6%') }}
                                style={{ backgroundColor: '#fafafa' }}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                    color: 'grey'
                                }}
                                labelStyle={{ color: 'grey' }}
                                dropDownStyle={{ backgroundColor: '#fafafa' }}
                                onChangeItem={item => this.setState({
                                    gender: item.value
                                })}
                            />
                        </View> */}
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}

                            label="Age"
                            value={age}
                            mode="outlined"
                            onChangeText={text => this.setState({ age: text })}
                        />
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}

                            label="Addrees"
                            value={address}
                            mode="outlined"
                            onChangeText={text => this.setState({ address: text })}
                        />
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}

                            label="Event Name"
                            mode="outlined"
                            onChangeText={text => this.setState({ event_name: text })}
                        />
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}

                            label="Country"
                            value={country}
                            mode="outlined"
                            onChangeText={text => this.setState({ country: text })}
                        />
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}

                            label="State"
                            value={state}
                            mode="outlined"
                            onChangeText={text => this.setState({ state: text })}
                        />
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}

                            label="City"
                            value={city}
                            mode="outlined"
                            onChangeText={text => this.setState({ city: text })}
                        />
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}

                            label="Land-Mark"
                            value={landmark}
                            mode="outlined"
                            onChangeText={text => this.setState({ landmark: text })}
                        />
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}

                            label="Pind Code"
                            value={pin_code}
                            mode="outlined"
                            onChangeText={text => this.setState({ pin_code: text })}
                        />
                        <TextInput
                            style={{ width: wp('80%'), marginTop: hp('2%') }}
                            label="About Institute"
                            value={aboutinstitute}
                            mode="outlined"
                            onChangeText={text => this.setState({ aboutinstitute: text })}
                        />

                    </View>

                    <Text style={{ marginBottom: hp('3%') }}>
                    </Text>
                </ScrollView>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isProfileImageModal}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View
                            style={{
                                height: hp('10%'),
                                width: wp('80%'),
                                backgroundColor: 'white',
                                borderRadius: hp('2%')
                            }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <ActivityIndicator size={50} color="red" style={{ margin: wp('4%') }} />
                                <Text style={{ alignSelf: 'center' }}>Uploading Profile Picture</Text>
                            </View>
                        </View>
                    </View>

                </Modal>
                <Card style={{ height: hp('10%'), backgroundColor: '#80b0bf' }}>
                    <LinearGradient start={{ x: 0.1, y: 0.1 }} end={{ x: 0.7, y: 1.0 }} colors={['#aa4b6b', '#6b6b83', '#3b8d99']}
                        style={{ height: hp('7%'), width: wp('80%'), marginTop: hp('2%'), borderRadius: hp('4%'), alignSelf: 'center' }}>
                        <TouchableOpacity
                            onPress={this.StudentProfileUpdate}
                        >
                            {!isapihit ? <Text style={styles.buttonText}>
                                Save
                            </Text> : <View style={{ justifyContent: "center", marginTop: hp('1%'), marginBottom: hp('3%') }}><ActivityIndicator size="large" color="white" /></View>}

                        </TouchableOpacity>
                    </LinearGradient>
                </Card>
            </View>

        );
    }
}
function mapStateToProps(state) {
    return {
        studentalldata: state.studentData
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchallData: (data) => dispatch(studentdashboarddata(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentUpdateScreen)

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
        width: wp('25%'),
        height: wp('25%'),
        alignSelf: 'center',
        borderRadius:hp('20%')
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