import React,{Component}  from 'react';
import {Image,View,Text} from 'react-native'
import LottieView from 'lottie-react-native';
export default class MyComponent extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    let {navigation} = this.props
    setTimeout(() => {
      navigation.navigate('Confirmation')
    }, 3000);
  }
  UNSAFE_componentWillMount(){
    clearInterval()
  }
render(){
  return (
    <LottieView 
    style={{height:'80%'}} source={require('../assets/reading.json')} 
    autoPlay loop />
   
  );
  }
}
