import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import images from '.././../../constant';
const NewCourseList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.courseHeader}>
        <View style={styles.logoContainer}>
          <Image
            source={images.gyanboosterlogo}
            style={styles.logoimg}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.course}>
        <View style={styles.classInnnerContainer}></View>
      </View>
      <View style={styles.course}>
        <View style={styles.classInnnerContainer}></View>
      </View>
      <View style={styles.course}>
        <View style={styles.classInnnerContainer}></View>
      </View>
    </View>
  );
};
export default NewCourseList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  courseHeader: {
    height: 130,
    width: '100%',
    backgroundColor: '#4f469a',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    height: 70,
    width: '75%',
    backgroundColor: 'white',
    marginTop: 5,
  },
  logoimg: {
    height: 70,
    width: '95%',
  },
  course: {
    height: 110,
    width: '100%',
    backgroundColor: '#eb793b',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  classInnnerContainer: {
    height: 70,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 40,
  },
});
