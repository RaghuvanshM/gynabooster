import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    
} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Card,Title } from 'react-native-paper';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
class CotegoryCardComponent extends Component {
    constructor(props) {
        super(props)
    }
    clickCategory =(id)=>{
        let cotegoryId = {id:id}
       this.props.navigation.navigate('allcourses',cotegoryId={cotegoryId});
    }
    render() {
        let {item,appDarkmode} = this.props
        return (
            <View >
            <View >
                <TouchableOpacity
                onPress={()=>{this.clickCategory(item.id)}}
                >
                <Card style={appDarkmode?styles.courseCardDarkmod:styles.courseCard}>
                <View style={{ marginLeft:hp('3%'),marginTop:hp('2%') }}>
                   <Text style={appDarkmode?styles.categorynamedarkmode:styles.categoryname}>{item.name}</Text>
                        <Text style={appDarkmode?styles.classesDetailDarmode:styles.classesDetail}>{item.description}</Text>
                    </View>
                </Card>
                </TouchableOpacity>
            </View>
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
export default connect(mapStateToProps)(CotegoryCardComponent);
const styles = StyleSheet.create({
    courseCardDarkmod: {
        height: hp('10%'),
        width: wp('90%'),
        marginTop: hp('2%'),
        borderRadius: hp('1%'),
        alignSelf: 'center',
        backgroundColor:'#1c1a1a'
    },
    courseCard:{
        height: hp('10%'),
        width: wp('90%'),
        marginTop: hp('2%'),
        borderRadius: hp('1%'),
        alignSelf: 'center',
    },
    classesDetail: {
        marginTop: hp('1%'),
        color: '#7b5f87',
        fontSize:hp('2%')
    },
    darkmodeCategory:{
    flex:1,
    backgroundColor:'black'
    },
    categorynamedarkmode:{
        color:'white',
        fontWeight:'bold'
    },
    classesDetailDarmode:{
        color:'white'
    }
})