import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class MyComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AsyncStorage.getItem('Loginid').then((token) => {
      let {navigation} = this.props;
      setTimeout(() => {
        token
          ? this.props.navigation.navigate('StudentHome')
          : navigation.navigate('Confirmation');
      }, 3000);
    });
  }
  UNSAFE_componentWillMount() {
    clearInterval();
  }
  render() {
    return (
      <LottieView
        style={{alignItems: 'center'}}
        source={require('../assets/reading.json')}
        autoPlay
        loop
      />
    );
  }
}
