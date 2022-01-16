import React from 'react';
import {Text, View, StyleSheet, StatusBar, Image,TouchableOpacity,} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = ({navigation}) => {
  return (
    <View  style={styles.container}
    
    >
      {/* <StatusBar hidden /> */}
      {/* <View style={styles.arrowContainer}>
        <AntDesign name="arrowleft" size={25} color={'white'} />
      </View> */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/gyanbooster.png')}
          style={styles.logoimg}
          resizeMode="contain"
        />
      </View>
      <View style={styles.titleContainer}>
        <View style={{marginLeft: 20}}>
          <Text style={styles.titleText}>List of Class</Text>
        </View>
        <View style={{marginRight: 10}}>
          <AntDesign name="right" size={30} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.classContainer}
        onPress={() => {
            
            navigation.navigate('Coursecatogry');
        }}>
        <View style={styles.lefticonContainer}> 
        <Image  
        source={require('../../../assets/class-icon.png')}
        style={styles.icon}
        />
        </View>
        <Text style={styles.classText}>Class X</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.classContainer}>
        <View style={styles.lefticonContainer}>
        <Image  
        source={require('../../../assets/class-icon.png')}
        style={styles.icon}
        />
        </View>
        <Text style={styles.classText}>Class XII</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f469a',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
  },
  // arrowContainer: {
  //   height: 40,
  //   width: 40,
  //   borderRadius: 10,
  //   borderColor: '#605baa',
  //   borderWidth: 1.5,
  //   margin: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  
  logoContainer: {
    height: 120,
    width: '90%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoimg: {
    height: 120,
    width: '95%',
  },
  titleContainer: {
    paddingVertical: 6,
    width: '90%',
    backgroundColor: 'white',
    marginTop: 40,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    color: '#4f4798',
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
  lefticonContainer: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: 'white',
    marginRight: 20,
  },
  icon:{
     flex:1,
     width: 20,
     height: 20,
     borderRadius:20,
     alignSelf:'center',
     justifyContent:'center',
   
    
    
  }
});