import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TextInput} from 'react-native-paper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FastImage from 'react-native-fast-image';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {
  faArrowLeft,
  faCoffee,
  faPenSquare,
} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';

const Tab = createMaterialTopTabNavigator();
class TeacherProfileUpdate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {appdarkmode} = this.props;
    return (
      <View>
        <LinearGradient
          colors={
            appdarkmode ? ['black', 'grey'] : ['#aa4b6b', '#6b6b83', '#3b8d99']
          }
          style={{height: hp('30%')}}>
          <View>
            <View style={{flexDirection: 'row', margin: hp('2%')}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigation('');
                }}>
                <View>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    color="white"
                    size={hp('3%')}
                  />
                </View>
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    color: 'white',
                    marginLeft: hp('3%'),
                    fontSize: hp('2%'),
                  }}>
                  Update Profile
                </Text>
              </View>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Pressable
                onPress={() => {
                  this.updateProfilePic();
                }}>
                <FastImage
                  source={require('../../../../assets/dummy.jpeg')}
                  style={styles.logo}
                />
              </Pressable>
              <Text style={{color: 'white', marginTop: hp('2%')}}>
                Tap the image to change Profile Picture
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    Teacheralldata: state.Teacherdashboarddata,
    appdarkmode: state.appdarkmodestate,
  };
}
export default connect(mapStateToProps)(TeacherProfileUpdate);

const styles = StyleSheet.create({
  logo: {
    height: hp('15%'),
    width: hp('15%'),
    borderRadius: hp('8%'),
    alignSelf: 'center',
  },
});
