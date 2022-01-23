import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ClassCard from '../Component/ClassCard';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <ClassCard name={'raghu'} />
      </View>
    </View>
  );
};

export default HomeScreen;
