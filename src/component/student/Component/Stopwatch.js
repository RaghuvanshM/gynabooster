import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet,Text,View, TouchableHighlight } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
 
class TimerTest extends PureComponent  {
  constructor(props) {
    super(props);
    this.state = {
      totalDuration: props.time*60000,
    }
  }
  render() {
    return (
      <View>
        <Timer totalDuration={this.state.totalDuration}  start={true}
          reset={this.state.timerReset}
          options={options}
          handleFinish={handleTimerComplete}
          getTime={this.getFormattedTime} />
      </View>
    );
  }
}
 
const handleTimerComplete = () => alert("custom completion function");
 
const options = {
  container: {
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  }
};
export default TimerTest