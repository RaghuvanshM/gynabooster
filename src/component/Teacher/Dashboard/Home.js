import React, { Component } from 'react'
import HeaderScreen from '../../header'
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    Text,
    View,
    Button,
    TouchableOpacity

} from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
class HomeScreen extends Component {
    render() {
        let {name} = this.props.studentalldata
        return (
            <View>
                <LinearGradient colors={['#aa4b6b', '#6b6b83', '#3b8d99']} style={{ height: hp('30%') }}>
                    <HeaderScreen {...this.props} imagae={true} />
                    <View>
                        {/* <View style={{ marginTop: wp('6%') }}>
                            <Text style={{ color: 'white',  alignSelf: 'center', fontWeight: 'bold' }}>Hi {name} </Text>
                        </View> */}
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
function mapStateToProps(state) {
    return {
        studentalldata: state.studentData
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchallData: (data) => dispatch(studentdashboarddata(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
