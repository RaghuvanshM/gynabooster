import max from 'date-fns/esm/max/index';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';

import ApiHelper from '../Utills/Apihelper';
import ContentCard from './ContentCard';

const CourseList = ({navigation, route}) => {
  const [subjectList, setSubjectList] = useState([]);
  useEffect(() => {
    // console.log(route.params.id);
    let data = {
      category_id: route.params.id,
    };
    ApiHelper.fetchById('/student_get_course', JSON.stringify(data)).then(
      (res) => {
        if (res.response.status) {
          console.log(res.data);
          setSubjectList(res.data);
        }
      },
    );
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          <Image
            style={styles.logoimg}
            source={require('../../../assets/gyanbooster.png')}
            resizeMode="contain"
          />
        </View>
      </View>
      <FlatList
        data={subjectList}
        renderItem={(item, index) => {
          return (
            <ContentCard
              title={item.item.course_name}
              price={item.item.course_amt}
              onPress={() => {
                navigation.navigate('CourseDescription');
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default CourseList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    height: 150,
    width: '100%',
    backgroundColor: '#52459f',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logoBox: {
    height: 80,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  logoimg: {
    height: 65,
    width: '92%',
    marginTop: 10,
    marginLeft: 3,
  },
  course: {
    height: 100,
    width: '100%',
    backgroundColor: '#fe6d1e',
    marginTop: 50,
  },
  innerContainer: {
    height: 60,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 50,
    alignSelf: 'center',
    elevation: 40,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lefticonContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 3,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  classText: {
    fontSize: 18,
    color: '#fe6d1e',
    fontWeight: '600',
  },
  course1: {
    height: 100,
    width: '100%',
    backgroundColor: '#fe6d1e',
    marginTop: 20,
  },
  arrowContainer: {
    height: 40,
    width: 40,
    borderRadius: 10,
    borderColor: '#605baa',
    borderWidth: 1.5,
    marginRight: 50,
  },
  classText1: {
    fontSize: 16,
    color: '#000000',
  },
});
