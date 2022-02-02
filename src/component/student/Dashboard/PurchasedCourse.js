import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import MainHeader from '../Component/MainHeader';
import ApiHelper from '../Utills/Apihelper';
const data = [1, 2, 3, 4, 5, 6, 7, 8];
const PurchasedCourse = ({navigation}) => {
  useEffect(() => {
    let data = {
      category_id: 48,
    };
    ApiHelper.fetchById('/student_get_course', JSON.stringify(data)).then(
      (res) => {
        console.log(res);
      },
    );
  }, []);
  return (
    <View>
      <MainHeader
        title={'Course'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <StatusBar hidden />
      <FlatList
        data={data}
        numColumns={2}
        contentContainerStyle={{padding: 4}}
        keyExtractor={(item, index) => {
          String(index + item + 'ra' + index);
        }}
        ListFooterComponent={() => {
          return <View style={{height: 80}}></View>;
        }}
        renderItem={({item, index}) => {
          return <CourseComponent key={index} />;
        }}
      />
    </View>
  );
};
export default PurchasedCourse;

const CourseComponent = () => {
  return (
    <TouchableOpacity style={styles.containerView}>
      <Image
        source={{
          uri: 'https://gyanbooster.jingleinfo.com/admin/thumb_img/py.jpg',
        }}
        style={{height: '60%'}}
      />
      <View style={{padding: 10}}>
        <Text style={{fontSize: 14}}>Physics</Text>
        <Text style={{fontSize: 14}}>Valid Till : Life Time </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerView: {
    height: 130,
    width: '48%',
    backgroundColor: 'white',
    margin: 3,
    elevation: 24,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
