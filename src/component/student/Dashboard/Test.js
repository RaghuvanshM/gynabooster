import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
class TestScreen extends Component {
  render() {
    return (
      <View style={{margin: 20}}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{fontSize: 20}}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default TestScreen;
