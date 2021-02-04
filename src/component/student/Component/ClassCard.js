import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { State } from 'react-native-gesture-handler';
class ClassCardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isClassTouch: false
        }
    }
    onSubjectClicked=(id,name)=>{
        let classId = {id:id,className:name}
       this.props.navigation.navigate('courses',{...classId} )
    }
    render() {
        let { isClassTouch } = this.state;
         let {class_name,id}     =this.props.data.item
         let {appDarkmode} = this.props
        return ( 
                <View>
                    <TouchableOpacity
                    onPress={()=>{this.onSubjectClicked(id,class_name)}}
                    >
                    <Card style={appDarkmode?styles.allcoursesdarkmode:styles.allcourses}>
                        <Text
                       style={appDarkmode?styles.classnametextdarkmode:styles.classnametext}
                        >{class_name} 
                        </Text>  
                    </Card>
                    </TouchableOpacity>
                </View>

        )
    }
}
function mapStateToProps(state) {
    return {
      studentalldata: state.studentData,
      appDarkmode:state.appdarkmodestate
    };
  }
export default connect(mapStateToProps)(ClassCardComponent)
const styles = StyleSheet.create({
    classesCard: {
        height: hp('5%'), width: wp('20%'),
        borderRadius: hp('2%'),
        borderWidth: 2,
        borderColor: '#dfe1e6'
    },
    ClassesText: {
        color: 'blue',
        alignSelf: 'center',
        marginTop: hp('1%')

    },
    classnametextdarkmode:{
    color:'white',
    fontWeight:'bold',
    marginTop:hp('4%')
    },
    classnametext:{
        color:'black',
        fontWeight:'bold',
        marginTop:hp('4%')
    },
    allcourses: {
        backgroundColor: 'white',
        width: wp('45%'),
        flex:1,
        alignItems:'center',
        marginTop: hp('2%'),
        borderRadius: hp('1%'),
        height:hp('10%'),
        marginLeft:wp('2.5%'),

    },
    allcoursesdarkmode:{
        backgroundColor: '#1c1a1a',
        width: wp('45%'),
        flex:1,
        alignItems:'center',
        marginTop: hp('2%'),
        borderRadius: hp('1%'),
        height:hp('10%'),
        marginLeft:wp('2.5%'),
    }
})