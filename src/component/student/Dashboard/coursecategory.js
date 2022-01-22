import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ApiHelper from '../Utills/Apihelper';

const Coursecategory = ({navigation, route}) => {
  useEffect(() => {
    console.log(route.params.class_id);
    ApiHelper.fetchById(
      '/get_class_categorey_byID',
      route.params.class_id,
    ).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <View style={styles.Container}>
      <View style={styles.box}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoimg}
            source={require('../../../assets/gyanbooster.png')}
          />
        </View>
        <Text style={styles.title}> List of category</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.classContainer}
          onPress={() => {
            navigation.navigate('Chapter1');
          }}>
          <Text style={styles.classText}>Science</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.classContainer}>
          <Text style={styles.classText}>Commerce</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.classContainer}>
          <Text style={styles.classText}>Arts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Coursecategory;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
  },
  box: {
    height: 250,
    width: '100%',
    borderRadius: 45,
    backgroundColor: '#52459f',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logoContainer: {
    height: 120,
    width: '90%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 25,
    alignItems: 'center',
  },
  logoimg: {
    height: 60,
    width: '95%',
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
    fontWeight: '600',
  },
  title: {
    marginTop: 40,
    color: '#ffffff',
    fontSize: 20,
  },
});
