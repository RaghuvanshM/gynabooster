import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Linking, Pressable} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faCoffee, faPhone} from '@fortawesome/free-solid-svg-icons';
import call from 'react-native-phone-call'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
class ContactUsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hello',
      mobileNo: 78957694555,
    }
  }
 phoneCall =()=>{
  const args = {
    number: '9093900003', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
  }
   
  call(args).catch(console.error)
 }
  render() {
    const url = 'whatsapp://send?text=Hi&phone=+917895769455';
    return (
      <View>
        <View style={{flexDirection:'row',marginTop:hp('4%')}}>
          <Pressable
          onPress={()=>{this.props.navigation.navigate('Profile')}}
          >
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={20}
            color="#2c65d1"
            style={{marginLeft:hp('3%')}}
          />
          </Pressable>
          <Text style={{marginLeft:wp('25%'),fontWeight:'bold',color:'#293140'}}>Contact Us</Text>
        </View>
        <Pressable
          onPress={() => {this.phoneCall()  }}>
          <Card style={styles.contactCard}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  margin: hp('3%'),
                  color: '#c22542',
                }}>
                Call Us
              </Text>

              <FontAwesomeIcon
                icon={faPhone}
                size={20}
                style={{
                  margin: hp('3%'),
                  marginLeft: wp('50%'),
                  color: '#173fa6',
                }}
              />
            </View>
          </Card>
        </Pressable>
        <Pressable
          onPress={() => {
            Linking.openURL(url);
          }}>
          <Card style={styles.contactCard}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  margin: hp('3%'),
                  color: '#c22542',
                }}>
                Chat with Us
              </Text>
              <Image
                source={require('../../../assets/whatsapp.jpg')}
                style={{
                  height: hp('5%'),
                  width: hp('5%'),
                  marginTop: hp('1.5%'),
                  marginLeft: wp('38%'),
                }}
              />
            </View>
          </Card>
        </Pressable>
      </View>
    );
  }
}
export default ContactUsComponent;
const styles = StyleSheet.create({
  contactCard: {
    height: hp('10%'),
    marginTop: hp('3%'),
    width: wp('95%'),
    alignSelf: 'center',
    borderRadius: hp('2%'),
  },
});
