import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import HeaderComponent from '../Component/Header';
import customColor from '../../../utility/colors';
import imageFile from '../../../assets';
import MenuItem from '../Component/MenuItem';
const Account = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderComponent title={'Account'} />
      <ScrollView>
        <View style={styles.imageContainer}>
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 45,
              borderWidth: 1.5,
              borderColor: customColor.Blue,
              overflow: 'hidden',
            }}>
            <Image
              style={{height: 80, width: 80}}
              source={imageFile.dummyImg}
            />
          </View>
          <Text>abc</Text>
          <Text>xyz@gmail.com</Text>
        </View>
        <View style={styles.itemContainer}>
          <MenuItem itemname={'My Profile'} />
          <MenuItem
            itemname={'My Course'}
            onPress={() => {
              navigation.navigate('PurchasedCourse');
            }}
          />
          <MenuItem itemname={'Log Out'} />
        </View>
      </ScrollView>
    </View>
  );
};
export default Account;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    padding: 15,
  },
});
