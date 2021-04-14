import React, { Component } from 'react'
import HeaderScreen from '../../header'
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux'
import { studentClass,BlogData,AllCourseGetData } from '../../../redux/action/studentdata'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ScrollView,
    ActivityIndicator

} from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { create } from 'react-test-renderer';
import AllClassCardComponent from '../Component/ClassCard';
import TextTicker from 'react-native-text-ticker'

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isClassTouch: false
        }
    }
    componentDidMount(){
        this.props.fetcblogs()
        this.props.fetcAllCourese()
    }
    classTouch = () => {
        let { isClassTouch } = this.state;
        this.setState({
            isClassTouch: !isClassTouch
        })
        this.props.navigation.navigate('courses')
    }
    onSubmit = () => {
        const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/view_class'
        fetch(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 'prabhat@123',
                'Cache-Control': 'no-cache'
            },
        }).then((response) => response.json())
            .then(dataResponse => {

            })
    }

    render() {
        let { name } = this.props.studentalldata
        let { studentclasses,studentAllCoures } = this.props
        let { isClassTouch } = this.state
        return (
            <View style={{ flex: 1 ,backgroundColor:'#d7dbd9'}}>
                <LinearGradient colors={['#aa4b6b', '#6b6b83', '#3b8d99']} style={{ height: hp('30%') }}>
                    <HeaderScreen {...this.props} imagae={true} />
                    <View style={{ marginTop: wp('6%') }}>
                        <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>{`Hi ${name}`} </Text>
                        <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', marginTop: hp('1%'), fontSize: hp('2%') }}>Choose your class</Text>
                        <TextTicker
                            style={{ fontSize: 20, color: 'white', marginTop: 20 }}
                            duration={27000}
                            loop
                            bounce
                            marqueeDelay={11000}
                        >
                            We provides always our best educational services for our all students  and  always try to achieve our students trust and satisfaction
                </TextTicker>
                    </View>

                </LinearGradient>
                { studentAllCoures ? <FlatList
                    data={studentAllCoures}
                    renderItem={item => <AllClassCardComponent data={item} {...this.props} />}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{
                        flexGrow: 1
                    }}
                    showsVerticalScrollIndicator={false}
                // style={{
                //     padding: SIZES.padding * 2,
                //     marginBottom: SIZES.padding * 2
                // }}
                /> : <ActivityIndicator size="large" color="#631139"
                    style={{ justifyContent: 'center', alignSelf: 'center' }}
                    />}

                <Card style={{ marginBottom: hp('2%') }}>

                </Card>
            </View>
        )
    }
}
function mapStateToProps(state) {
    return {
        studentalldata: state.studentData,
        studentclasses: state.studentClassesData,
        studentAllCoures:state.AllCourse
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchallData: (data) => dispatch(studentdashboarddata(data)),
        fetcblogs:()=>dispatch(BlogData()),
        fetcAllCourese:()=>dispatch(AllCourseGetData())

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