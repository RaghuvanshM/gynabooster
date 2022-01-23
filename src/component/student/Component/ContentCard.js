import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ContentCard = ({title, price, onPress}) => {
  return (
    <View style={styles.course}>
      <TouchableOpacity
        style={styles.innerContainer}
        onPress={() => {
          onPress();
        }}>
        <View style={styles.lefticonContainer}>
          <Image
            style={styles.icon}
            source={require('../../../assets/bio.png')}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.classText}> {title}</Text>
          <Text style={styles.classText1}>{price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ContentCard;
const styles = StyleSheet.create({
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

  classText1: {
    fontSize: 16,
    color: '#000000',
  },
});
