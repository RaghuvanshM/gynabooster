import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import customColor from '../../../utility/colors';
import ArrowBack from 'react-native-vector-icons/Ionicons';
const MainHeader = ({title, onPress}) => {
  return (
    <View style={styles.headerContianer}>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={{justifyContent: 'center', marginLeft: 10}}>
        <ArrowBack name="arrow-back" size={25} color={'white'} />
      </TouchableOpacity>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 15, color: 'white'}}>{title}</Text>
      </View>
    </View>
  );
};
export default MainHeader;

const styles = StyleSheet.create({
  headerContianer: {
    height: 60,
    backgroundColor: customColor.themcolor,
    flexDirection: 'row',
  },
});
