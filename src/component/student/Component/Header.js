import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
const HeaderComponent = ({title}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </View>
      <View
        style={{
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
          height: 0.25,
          backgroundColor: '#686868',
          elevation: 5,
          width: '100%',
        }}
      />
    </>
  );
};
export default HeaderComponent;
const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  titleStyle: {
    fontSize: 16,
  },
});
