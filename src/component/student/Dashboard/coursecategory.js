import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import images from '../../../constant';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CourseCategory = ({navigation}) => {
  return (
    <View style={styles.containner}>
      <View style={styles.upperView}>
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" size={25} color={'white'} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image
            source={images.gyanboosterlogo}
            style={styles.logoimg}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.categoryText}>List of category</Text>
      </View>
      <TouchableOpacity style={styles.classContainer}>
        <Text style={styles.classText}>Science</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.classContainer}>
        <Text style={styles.classText}>Commerce</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.classContainer}>
        <Text style={styles.classText}>Art</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CourseCategory;
const styles = StyleSheet.create({
  containner: {
    flex: 1,
    backgroundColor: 'white',
  },
  upperView: {
    height: 250,
    width: '100%',
    backgroundColor: '#4f469a',
    borderRadius: 30,
  },
  logoContainer: {
    height: 100,
    width: '90%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoimg: {
    height: 90,
    width: '95%',
  },
  categoryText: {
    fontSize: 14,
    marginTop: 20,
    color: 'white',
    alignSelf: 'center',
  },
  classContainer: {
    height: 60,
    width: '80%',
    backgroundColor: '#eb793b',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  classText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
  arrowContainer: {
    height: 40,
    width: 40,
    borderRadius: 10,
    borderColor: '#605baa',
    borderWidth: 1.5,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
