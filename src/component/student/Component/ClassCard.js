import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { State } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
class ClassCardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isClassTouch: false
        }
    }
    onSubjectClicked = (id, name) => {
        let classId = { id: id, className: name }
        this.props.navigation.navigate('allcourses', { ...classId })
    }
    render() {
        let { isClassTouch } = this.state;
        let { name, id } = this.props.data.item
        let { appDarkmode } = this.props
        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={() => { this.onSubjectClicked(id, name) }}
                >
                    <Card style={appDarkmode ? styles.allcoursesdarkmode : styles.allcourses}>
                        <View style={styles.roundcircle}>
                        <Text style={{alignSelf:'center',fontSize:20,marginTop:hp('0.5%'),color:'white'}}>
                            
                            {name!=''?name.substring(0,1).toUpperCase():null}</Text>
                        </View>
                        <Text
                            style={appDarkmode ? styles.classnametextdarkmode : styles.classnametext}
                        >{name}
                        </Text>
                        <View style={styles.classbottomLine}>

                        </View>
                    </Card>
                </TouchableWithoutFeedback>
            </View>

        )
    }
}
function mapStateToProps(state) {
    return {
        studentalldata: state.studentData,
        appDarkmode: state.appdarkmodestate
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
    classnametextdarkmode: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: hp('4%')
    },
    classnametext: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: hp('2%'),
        alignSelf: 'center'
    },
    allcourses: {
        backgroundColor: 'white',
        width: wp('45%'),
        flex: 1,
        alignItems: 'center',
        marginTop: hp('2%'),
        borderRadius: hp('1%'),
        height: hp('15%'),
        marginLeft: wp('2.5%'),

    },
    allcoursesdarkmode: {
        backgroundColor: '#1c1a1a',
        width: wp('45%'),
        flex: 1,
        alignItems: 'center',
        marginTop: hp('2%'),
        borderRadius: hp('1%'),
        height: hp('15%'),
        marginLeft: wp('2.5%'),
    },
    classbottomLine: {
        height: hp('1%'),
        width: wp('45%'),
        backgroundColor: '#02bcf0',
        borderBottomLeftRadius: hp('1%'),
        marginTop:hp('2%'),
        borderBottomRightRadius: hp('1%')
    },
    roundcircle: {
        height: wp('10%'),
        width: wp('10%'),
        backgroundColor: '#8dba99',
        alignSelf: 'center',
        borderRadius: hp('7%'),
        marginTop:hp('2%')
    }
})