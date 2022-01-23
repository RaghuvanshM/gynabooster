import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Chapter1 = () => {
    return (
        <View style ={styles.Container}>
            <View style={styles.logoContainer}>
                   
            
            <Image style={styles.logoimg}
            source={require('../../../assets/gyanbooster.png')} 
            resizeMode= "contain"
            />
            </View>
            <Text style={styles.text1}>Science</Text>
            <View style={styles.ContainerPage}>
            <View style={styles.logopage}>
                <Image 
                style={styles.logoImg}
                source={require('../../../assets/icon.jpg')}
                resizeMode="cover"
                />
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.text2}>Physics</Text>
            </View>

            </View>
            <Text style={styles.text3}>Chapter</Text>
            <View style={styles.textBoxt}>
                <View style={styles.picture}>
                    <Image style={styles.pic} source={require('../../../assets/chapter.jpg')}
                    resizeMode="contain"
                    />
                  
                </View>
                <View style={styles.textBox}>
                <Text style={styles.text4}>Lesson 01:Name</Text>
                 <Text style={styles.text5}>₹10k-₹15k/year</Text>
                </View>
                
            </View>
            <View style={styles.textBoxt}>
                <View style={styles.picture}>
                    <Image style={styles.pic} source={require('../../../assets/chapter.jpg')}
                    resizeMode="contain"
                    />
                  
                </View>
                <View style={styles.textBox}>
                <Text style={styles.text4}>Lesson 02:Name</Text>
                 <Text style={styles.text5}>₹10k-₹15k/year</Text>
                </View>
            </View>
            <View style={styles.textBoxt}>
                <View style={styles.picture}>
                    <Image style={styles.pic} source={require('../../../assets/chapter.jpg')}
                    resizeMode="contain"
                    />
                  
                </View>
                <View style={styles.textBox}>
                <Text style={styles.text4}>Lesson 03:Name</Text>
                 <Text style={styles.text5}>₹10k-₹15k/year</Text>
                </View>
            </View>
            
        </View>
    )
}

export default Chapter1

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#efeef4',
        borderRadius:40
    },
    logoContainer:{
        height:70,
        width:'90%',
        alignSelf:'center',
        backgroundColor:'#efeef4',
        marginTop:10,
        justifyContent:'center'
    },
    logoimg:{
        height:50,
        width:'70%',
        alignSelf:'center',
        
    },
    text1:{
        fontSize:20,
        fontWeight:'700',
        color:'#52469a',
    
    marginLeft:35
    },
    ContainerPage:{
        height:120,
        width:'80%',
        backgroundColor:'#8e77f9',
        borderRadius:15,
        alignSelf:'center',
        marginTop:3
    },
    logopage:{
        height:35,
        width:35,
        backgroundColor:'white',
        alignSelf:"center",
        marginTop:15,
        borderRadius:8
    },
    logoImg:{
        
        height:35,
        width:35,
        borderRadius:8,
        
        
    },
    subContainer:{
        height:30,
        width:"60%",
        backgroundColor:'white',
        alignSelf:'center',
        marginTop:15,
        justifyContent:'center',
        borderRadius:5
    },
    text2:{
        fontSize:18,
        fontWeight:'600',
        alignSelf:'center',
        color:'#fe6d1e'
        
    },
    text3:{
        fontSize:20,
        fontWeight:'700',
        color:'#fe6d1e',
        marginTop:3,
        marginLeft:35
    },
    textBoxt:{
        height:70,
        width:'80%',
        backgroundColor:'white',
        alignSelf:'center',
        marginTop:2,
        padding:2,
        flexDirection:"row",
        borderRadius:5,
        marginBottom:10
        
    },
    picture:{
        height:60,
        width:60,
        backgroundColor:'white',
        borderWidth:.3,
        borderRadius:8,
        marginLeft:5,
        marginTop:2,
        justifyContent:'center'
    },
    pic:{
        height:50,
        width:50,
        alignSelf:'center'
    },
    textBox:{
        margin:10
    },
    text4:{
        fontSize:18,
        fontWeight:'600'
    },
    text5:{
        fontSize:12
    }
})
