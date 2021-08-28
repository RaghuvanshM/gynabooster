import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import { coursethumnail, regex } from '../Component/constants';
class Prouductcheckout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            singlecoursedata: props.route.params
        }
    }
    render() {
        let { singlecoursedata } = this.state
        if (singlecoursedata) {
            return (
                <View style={styles.container}>
                    <LinearGradient colors={['#BE93C5', '#7BC6CC', '#3b8d99']} style={{ height: hp('30%') }}>
                        <FastImage
                            style={
                                styles.courseImage
                            }
                            source={{ uri: `${coursethumnail}${singlecoursedata[0].thumb_img}` }}
                        />
                    </LinearGradient>
                </View>
            )
        }
    }
}
export default Prouductcheckout;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    courseImage: {
        height: hp('26%'),
        width: hp('50%'),
         marginVertical:20,
        alignSelf: 'center',
        resizeMode:'contain'
    },

})