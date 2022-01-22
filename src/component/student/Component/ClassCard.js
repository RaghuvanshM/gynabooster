import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
const ClassCard = ({item, name, navigation, onPressClass}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.classContainer}
        onPress={() => {
          onPressClass();
        }}>
        <View style={styles.lefticonContainer}>
          <Image
            source={require('../../../assets/class-icon.png')}
            style={styles.icon}
          />
        </View>
        <Text style={styles.classText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ClassCard;
const styles = StyleSheet.create({
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
  lefticonContainer: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: 'white',
    marginRight: 20,
  },
  icon: {
    flex: 1,
    width: 20,
    height: 20,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
