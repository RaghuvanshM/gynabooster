import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faArrowLeft,
    faCoffee,
    faPenSquare,
} from '@fortawesome/free-solid-svg-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { color } from 'react-native-reanimated';
import { connect } from 'react-redux'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { regex } from '../../Component/constants'
class TestInstruction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.route.params.numberoftestquestion,
            questionnumber: 0,
            isoptoinselect:false
        }
    }
    componentDidMount() {

    }
    previeousquestionbuttonclick=()=>{
        let {questionnumber} = this.state;
        this.setState({
            questionnumber:questionnumber-1
        })
    }
    saveandnextbuttonclick=()=>{
        let {questionnumber} = this.state;
        this.setState({
            questionnumber:questionnumber+1
        })
    }
    onoptionselect =(uniqueoption)=>{
        this.setState({
            isoptoinselect:uniqueoption
        })
    }
    render() {
        let { data, questionnumber,isoptoinselect } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{marginBottom:hp('4%')}}>
                    <View style={styles.testinstheader}>
                       <View>
                           <Text style={styles.totalandletf}>{data && `${questionnumber+1}/${data.length}`}</Text>
                       </View>
                    </View>
                    <View >
                        <View style={styles.questiontext}>
                            <Text style={styles.questionstyle}>{data && data[questionnumber].exam_question.replace(regex, ' ')}</Text>
                            {/* <Text style={styles.questionstyle}>In publishing and graphic design, 
                    Lorem ipsum is a placeholder text commonly used to 
                    demonstrate the visual form of a document or a 
                    typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before 
                    final copy is available.</Text> */}
                        </View>
                        <View style={styles.otionsview}>
                            <TouchableWithoutFeedback style={isoptoinselect===data[questionnumber].exam_opt1?styles.ontionslistselect:styles.ontionslist}
                            onPress={()=>{this.onoptionselect(data[questionnumber].exam_opt1)}}
                            >
                                <View style={styles.ontionspoint}>
                                    <Text style={styles.ontionspointtext}>A</Text>
                                </View>
                                <View>
                                    <Text style={styles.ontionslistanswer}>{data && data[questionnumber].exam_opt1}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={isoptoinselect===data[questionnumber].exam_opt2?styles.ontionslistselect:styles.ontionslist}
                            onPress={()=>{this.onoptionselect(data[questionnumber].exam_opt2)}}
                            >
                                <View style={styles.ontionspoint}>
                                    <Text style={styles.ontionspointtext}>B</Text>
                                </View>
                                <View>
                                    <Text style={styles.ontionslistanswer}>{data && data[questionnumber].exam_opt2}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={isoptoinselect===data[questionnumber].exam_opt3?styles.ontionslistselect:styles.ontionslist}
                            onPress={()=>{this.onoptionselect(data[questionnumber].exam_opt3)}}
                            >
                                <View style={styles.ontionspoint}>
                                    <Text style={styles.ontionspointtext}>C</Text>
                                </View>
                                <View>
                                    <Text style={styles.ontionslistanswer}>{data && data[questionnumber].exam_opt3}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={isoptoinselect===data[questionnumber].exam_opt4?styles.ontionslistselect:styles.ontionslist}
                              onPress={()=>{this.onoptionselect(data[questionnumber].exam_opt4)}}
                            >
                                <View style={styles.ontionspoint}>
                                    <Text style={styles.ontionspointtext}>D</Text>
                                </View>
                                <View>
                                    <Text style={styles.ontionslistanswer}>{data && data[questionnumber].exam_opt1}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View>

                        </View>
                    </View>
                </ScrollView>
                < View style={{ height: hp('10%'), backgroundColor: '#3b8d99' }}
                >
                    <View style={styles.buttonview}>
                        <TouchableWithoutFeedback style={styles.saveandnext}
                        disabled={data && data.length-questionnumber==data.length?true:false}
                        onPress={()=>{this.previeousquestionbuttonclick()}}
                        >
                            <Text style={styles.buttontext}>Previous</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={styles.saveandnext}>

                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={styles.saveandnext}
                        onPress={()=>{this.saveandnextbuttonclick()}}
                        disabled={data && data.length-1-questionnumber==0?true:false}
                        >
                            <Text style={styles.buttontext}>Save & Next</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </ View>
            </View>
        )
    }
}

function mapStateToProps(state) {

    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestInstruction);
const styles = StyleSheet.create({
    testinstheader: {
        height: hp('10%'),
        backgroundColor: '#3b8d99',
        flexDirection: 'row',

    },
    questionstyle: {
        fontSize: 20,
        marginHorizontal: wp('5%'),
        marginVertical: hp('3%'),
        lineHeight: 30
    },
    saveandnext: {
        height: hp('6%'),
        backgroundColor: '#852080',
        borderRadius: hp('2%')
    },
    buttonview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('5%'),
        marginVertical: hp('3%')
    },
    buttontext: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginHorizontal:wp('4%'),
        marginVertical:hp('1.5%')
    },
    ontionslist: {
        backgroundColor: '#e8e8e8',
        height: hp('10%'),
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: hp('3%'),
        flexDirection: 'row'
    },
    ontionslistselect:{
        backgroundColor: '#b4e0f0',
        height: hp('10%'),
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: hp('3%'),
        flexDirection: 'row',
        borderWidth:2,
        borderColor:'#499155'
    },
    ontionspoint: {
        height: hp('4%'),
        width: hp('4%'),
        backgroundColor: 'white',
        borderRadius: hp('2%'),
        marginTop: hp('3%'),
        marginLeft: wp('4%'),
    },
    ontionspointtext: {
        fontSize: 18,
        alignSelf: 'center',
    

    },
    ontionslistanswer: {
        marginTop: hp('3.5%'),
        marginLeft: wp('6%'),
        fontSize: 20
    },
    totalandletf:{
        fontSize:30,
        color:'white',
        fontWeight:'bold',
        padding:20
    }


})