import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const Loader = (props) => {
  const {heights} = props;
  return props.loading ? (
    <View
      style={{
        flex: 1,
        height: heights,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 1,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      }}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  ) : null;
};

export default Loader;
