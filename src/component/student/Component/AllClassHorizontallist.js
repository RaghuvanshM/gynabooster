import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet

} from 'react-native';
import { Card,Title,Paragraph } from 'react-native-paper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
class AllListCardComponentHorizontal extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
        }
    }
    render() {
        return (
            <View >
                <Card style={styles.CourseCardHorizontal}>
                 <Title style={{alignSelf:'center'}}>{this.props.items.item}</Title>
               </Card>
            </View>
        )
    }
}
export default AllListCardComponentHorizontal;
const styles = StyleSheet.create({
    CourseCardHorizontal: {
        height:hp('15%'),
        width:wp('30%'),
        marginLeft:hp('2%')
    }
})