import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native'
import { Card } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
class CoursesList extends Component{
    render(){
        return(
            <View style={{backgroundColor:'#eae4eb',flex:1}}>
                <View >
                <Text style={{fontSize:hp('3%'),alignSelf:'center'}} >class 4 </Text>
                <Text style={{fontSize:hp('3%'),alignSelf:'center'}}>Select your course</Text>
                 <View>
                     <View>
                         <Card style={styles.courseCard}>
                             <Text style={{marginTop:hp('1%'),color:'#666366', marginLeft:wp('3%'), fontSize:hp('3%')}}>Java</Text>
                             <View style={{flexDirection:'row'}}>
                                 <Text style={styles.classesDetail}>10 Videos</Text>
                                 <Text  style={styles.classesDetail}>2 Concepts</Text>
                                 <Text  style={styles.classesDetail}>1 Exercise</Text>
                             </View>
                         </Card>
                         <Card style={styles.courseCard}>
                             <Text style={{marginTop:hp('1%'),color:'#666366', marginLeft:wp('3%'), fontSize:hp('3%')}}>HTML</Text>
                             <View style={{flexDirection:'row'}}>
                                 <Text  style={styles.classesDetail}>10 Videos</Text>
                                 <Text  style={styles.classesDetail}>2 Concepts</Text>
                                 <Text style={styles.classesDetail}>1 Exercise</Text>
                             </View>
                         </Card>
                         <Card style={styles.courseCard}>
                             <Text style={{marginTop:hp('1%'),color:'#666366', marginLeft:wp('3%'), fontSize:hp('3%')}}>DS</Text>
                             <View style={{flexDirection:'row'}}>
                                 <Text  style={styles.classesDetail}>10 Videos</Text>
                                 <Text  style={styles.classesDetail}>2 Concepts</Text>
                                 <Text  style={styles.classesDetail}>1 Exercise</Text>
                             </View>
                         </Card>
                     </View>
                 </View>
                </View>
            </View>
        )
    }
}
export default CoursesList;
const styles = StyleSheet.create({
    courseCard:{
        height:hp('10%'),
        width:wp('90%'),
        marginTop:hp('2%'),
        borderRadius:hp('1%'),
        alignSelf:'center',
    },
    classesDetail:{
        marginTop:hp('1%'),
        color:'#a298a3',
         marginLeft:wp('3%')

    }
})