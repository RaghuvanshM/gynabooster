import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import ClassCard from '../Component/ClassCard';
import Loader from '../Component/Loader';
import ApiHelper from '../Utills/Apihelper';

const Coursecategory = ({navigation, route}) => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noData, setNodata] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log(route.params.class_id);
    let data = {
      class_id: route.params.class_id,
    };
    ApiHelper.fetchById('/get_class_categorey_byID', JSON.stringify(data)).then(
      (res) => {
        if (res.response) {
          setCategory(res.data);
          if (res.data.length > 0) {
            setNodata(false);
          } else {
            setNodata(true);
          }
          setLoading(false);
        } else {
          setLoading(false);
        }
      },
    );
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
      {!noData && (
        <FlatList
          data={category}
          renderItem={(item, index) => {
            return (
              <ClassCard
                onPressClass={() => {
                  navigation.navigate('CourseList', {id: item.item.id});
                  //   alert(JSON.stringify(item.item));
                }}
                name={item.item.name}
              />
            );
          }}
        />
      )}
      <Loader loading={loading} />
      {noData && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 18}}>No data </Text>
        </View>
      )}
    </View>
  );
};

export default Coursecategory;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
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
