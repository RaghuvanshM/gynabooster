import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import customColor from '../../../utility/colors';
import BookIcon from 'react-native-vector-icons/AntDesign';

const MenuItem = ({itemname, onPress}) => {
  return (
    <TouchableOpacity style={styles.menuContainer} onPress={onPress}>
      <View style={{justifyContent: 'center'}}>
        <BookIcon name="book" size={15} color={'#454545'} />
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.textStyles}>{itemname}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default MenuItem;
const styles = StyleSheet.create({
  menuContainer: {
    width: '100%',
    borderWidth: 1,
    paddingVertical: 5,
    borderColor: '#EBEBEB',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    flexDirection: 'row',
    paddingLeft: 10,
    marginTop: 15,
  },
  TextContainer: {
    marginLeft: 10,
  },
  textStyles: {
    fontSize: 14,
  },
});
