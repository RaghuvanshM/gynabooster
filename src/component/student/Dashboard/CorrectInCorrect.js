import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native';
import data from '../Dashboard/Quiz/javascript.json';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

class CorrectInCorrect extends Component {
    constructor(props) {
        super(props);
        this.state={
           questionnumber:0
        }
        
    }
    renderquestonandoption = () => {

        let { questions } = data
        let { questionnumber } = this.state
        return (
            <View>
                {questions && questions[questionnumber].options.map((a, index) => {
                    return (
                        <View style={a.isAnswer ? styles.ontionslistselect : styles.ontionslist}
                            key={a.name}
                        >
                            <View style={styles.ontionspoint}>
                                <Text style={styles.ontionspointtext}>
                                    {a.pointname}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.ontionslistanswer}>{a.name}</Text>
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }
    saveandnextbuttonclick = () => {
        let { questionnumber } = this.state;
        this.setState({
            questionnumber: questionnumber + 1,
        })
    }
    savenextinstruction = () => {
        alert('this is last question ')
    }
    previeousquestionbuttonclick = () => {
        let { questionnumber } = this.state;
        this.setState({
            questionnumber: questionnumber - 1
        })
    }
      previeousquestionintruction = () => {
        alert('this is first question ')
    }
    render() {
        let {questions } = data;
        let {questionnumber} = this.state;
        return (
            <View style={styles.container}>
            <View style={styles.questiontext}>
                <Text style={styles.questionnumber}>{questionnumber+1}</Text>
                <Text style={styles.questionstyle}>{questions && questions[questionnumber].name}</Text>
            </View>
            <View style={styles.otionsview}>
                {this.renderquestonandoption()}
            </View>
            <TouchableOpacity style={styles.saveandnext}
                            onPress={() => { questions && questions.length - 1 - questionnumber == 0 ? this.savenextinstruction() : this.saveandnextbuttonclick() }}

                        >
                            <Text style={styles.buttontext}>Next</Text>
                        </TouchableOpacity>

            <TouchableOpacity style={styles.saveandnext}
                         onPress={() => { questions && questions.length - questionnumber == questions.length ? this.previeousquestionintruction() : this.previeousquestionbuttonclick() }}


                        >
                            <Text style={styles.buttontext}>Previous</Text>
                        </TouchableOpacity>
        </View>
        );
    }
}
export default CorrectInCorrect;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginVertical:10,
        marginHorizontal:20
    },
    questionstyle: {
        fontSize: 20,
        marginHorizontal: wp('5%'),
        marginVertical: hp('3%'),
        lineHeight: 30
    },
    questionnumber:{
       marginLeft:wp('2%'),
        marginVertical: hp('3%'),
        fontSize: 20,
    },
    questiontext:{
        flexDirection:'row',
        flex:0.5
    },
    otionsview:{
        flex:4
    },
    ontionslist: {
        backgroundColor: '#e8e8e8',
        height: hp('10%'),
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: hp('3%'),
        flexDirection: 'row'
    },
    ontionslistselect: {
        backgroundColor: '#b4e0f0',
        height: hp('10%'),
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: hp('3%'),
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#499155'
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
    saveandnext: {
        height: hp('6%'),
        backgroundColor: '#852080',
        borderRadius: 10,
        flex:0.4,
        marginTop:10
    },
    buttontext: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginHorizontal: wp('4%'),
        marginVertical: hp('1.5%')
    },
})
