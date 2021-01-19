import React, { Component } from 'react'
import HeaderScreen from '../../header'
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux'
import { studentClass } from '../../../redux/action/studentdata'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet

} from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { create } from 'react-test-renderer';
class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isClassTouch: false
        }
    }
    classTouch = () => {
        let { isClassTouch } = this.state;
        this.setState({
            isClassTouch: !isClassTouch
        })
        this.props.navigation.navigate('courses')
    }
    componentDidMount() {
        const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/view_class'
        return dispatch => {
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'prabhat@123'
                },
                credentials: 'include',
            }).then(res => res.json())
                .then(res2 => {
                    console.log(res2)
                    dispatch({
                        type: 'STUDENT_CLASSES_DATA',
                        payload: res2

                    })
                }
                );
        }
    }
    render() {
        // let {name} = this.props.studentalldata
        console.log
        let { isClassTouch } = this.state
        return (
            <View>
                <LinearGradient colors={['#aa4b6b', '#6b6b83', '#3b8d99']} style={{ height: hp('30%') }}>
                    <HeaderScreen {...this.props} imagae={true} />
                    <View>
                        <View style={{ marginTop: wp('6%') }}>
                            <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>Hi raghuvansh </Text>
                            <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', marginTop: hp('1%'), fontSize: hp('2%') }}>Choose your class</Text>
                        </View>
                        <View>
                            <Card style={styles.allcourses}>
                                <Text style={{ margin: hp('2%') }}>class 4-12</Text>
                                <View style={{ flexDirection: 'row', margin: hp('3%'), alignSelf: 'center' }}>
                                    <TouchableOpacity
                                        onPress={() => { this.classTouch() }}
                                    >
                                        <Card style={{ ...styles.classesCard, backgroundColor: isClassTouch ? '#3b8d99' : 'white' }}>
                                            <Text style={styles.ClassesText}>4th</Text>
                                        </Card>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{ marginLeft: wp('3%') }}
                                    //    onPress={()=>{this.classTouch()}}
                                    >
                                        <Card style={{ ...styles.classesCard }}>
                                            <Text style={styles.ClassesText}>5th</Text>
                                        </Card>
                                    </TouchableOpacity>
                                    <View style={{ marginLeft: wp('3%') }}>
                                        <Card style={styles.classesCard}>
                                            <Text style={styles.ClassesText}>6th</Text>
                                        </Card>
                                    </View>
                                </View>
                            </Card>

                        </View>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)

    return {
        studentalldata: state.studentData,
        studentclasses:state.studentClassesData
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchallData: (data) => dispatch(studentdashboarddata(data)),
      
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
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
    allcourses: {

        backgroundColor: 'white',

        width: wp('90%'),
        alignSelf: 'center', marginTop: hp('6%'),
        borderRadius: hp('2%')

    }


})