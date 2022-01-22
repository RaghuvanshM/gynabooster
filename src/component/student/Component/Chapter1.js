import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Chapter1 = () => {
  return (
    <View style={styles.Container}>
      <View style={{flex: 1}}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoimg}
            source={require('../../../assets/gyanbooster.png')}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.text1}>Science</Text>
          <View style={styles.Container1}>
            <View style={styles.logo}></View>
            <View style={styles.box1}>
              <Text style={styles.text2}>Physics</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 60,
          width: '100%',
          backgroundColor: 'red',
        }}></View>
    </View>
  );
};

export default Chapter1;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f4f5ff',
    borderRadius: 40,
  },
  logoContainer: {
    height: 120,
    width: '100%',
    backgroundColor: '#f7f2ff',
    marginTop: 30,
  },
  logoimg: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  text1: {
    color: '#9680f9',
    fontSize: 18,
    marginLeft: 15,
    fontWeight: '700',
  },
  Container1: {
    height: 150,
    width: '90%',
    backgroundColor: '#9b88f3',
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 20,
  },
  logo: {
    height: 35,
    width: 35,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 8,
  },
  box1: {
    height: 40,
    width: '50%',
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 15,
  },
  text2: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#fc6e26',
    marginTop: 5,
  },
});
