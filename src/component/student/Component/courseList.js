import max from 'date-fns/esm/max/index'
import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,ImageBackground } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const courseList = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.logoContainer}>
                
            <View style={styles.arrowContainer}>
                <AntDesign name='arrowleft' size={30} color={'white'} />
            </View>
                <View style={styles.logoBox}>
                    <Image style={styles.logoimg} source={require('../../../assets/gyanbooster.png')}
                    resizeMode= "contain" />
                </View>
            </View>
            <View style={styles.course}>
                <TouchableOpacity style ={styles.innerContainer}
                onPress={()=>{navigation.navigate('Chapter1')}}
                >

                <View style={styles.lefticonContainer}>
                    <Image style={styles.icon}
                    source={require('../../../assets/bio.png')}
                    resizeMode="contain"/>
                   
                </View>
                <View>
                <Text style={styles.classText}> Physics</Text>
                <Text style={styles.classText1}> price ₹ 150</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.course1}>
                <TouchableOpacity style ={styles.innerContainer}>
                <View style={styles.lefticonContainer}>
                    <Image style={styles.icon}
                    source={require('../../../assets/bio.png')}
                    resizeMode="contain"/>
                   
                </View>
                <View>
                <Text style={styles.classText}> Chamestry</Text>
                <Text style={styles.classText1}> price ₹ 150</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.course1}>
                <TouchableOpacity style ={styles.innerContainer}>
                <View style={styles.lefticonContainer}>
                    <Image style={styles.icon}
                    source={require('../../../assets/bio.png')}
                    resizeMode="contain"/>
                   
                </View>
                <View>
                <Text style={styles.classText}>Biology</Text>
                <Text style={styles.classText1}> price ₹ 150</Text>
                </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
            <View style={styles.bottom}>
                <FontAwesome 
                name='home' size={50} color={'white'} />
            </View>
        </View>
    )
}

export default courseList

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    logoContainer:{
        height:150,
        width:'100%',
        backgroundColor:'#52459f',
        borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
 },
 logoBox:{
     height:80,
     width:'80%',
     backgroundColor:'white',
     borderRadius:10
 },
 logoimg:{
     height:65,
     width:'92%',
     marginTop:10,
     marginLeft:3
 },
 course:{
     height:100,
     width:'100%',
     backgroundColor:'#fe6d1e',
     marginTop: 30
     
 },
 innerContainer:{
   height:60,
   width:'80%',
   backgroundColor:'white',
   borderRadius:50,
   alignSelf:'center',
   elevation:40 ,
   marginTop:20 ,
   flexDirection:'row',
   alignItems:'center',
   
 },
 lefticonContainer:{
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    marginRight: 20,
    marginLeft:20,
    marginTop:3
 },
 icon:{
     height:40,
     width:40,
     borderRadius:30

 },
 classText:{
     fontSize:18,
     color:'#fe6d1e',
     fontWeight:'600'
 },
 course1:{
    height:100,
    width:'100%',
    backgroundColor:'#fe6d1e',
    marginTop: 8
 },
 arrowContainer:{
    height: 40,
    width: 40,
    borderRadius: 10,
    borderColor: '#605baa',
    borderWidth: 1.5,
    marginRight:50
    
    

 },
 classText1:{
     fontSize:16,
     color:'#000000',


 },
 bottom:{
     height:80,
     width:'100%',
     backgroundColor:'#52459f',
     borderTopRightRadius:30,
     borderTopLeftRadius:30
 },
 arrowContainer:{
    height:35,
    width:35,
    backgroundColor:'#52459f',
    borderWidth:.5,
    borderRadius:10,
    marginRight:270,
    alignItems:'center',
    justifyContent:'center'
}
 
 


})
