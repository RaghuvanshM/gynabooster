import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    Image
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
import { FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";
import { regex } from '../../Component/constants'
import { min } from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TimerTest from '../../Component/Stopwatch'
import data from './javascript.json'
// import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
class TestInstruction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.route.params.numberoftestquestion,
            submit_ans_val: '',
            questionnumber: 0,
            isoptoinselect: false,
            timer: null,
            counter: 5,
            TestDuration: 0,
            selectedoption: '',
            isselcted: ''
        }
        console.log(props);

    }
    convertMinsToTime = (mins) => {
        var hours = Math.floor(mins / 3600);
        var minutes = Math.floor((mins - (hours * 3600)) / 60);
        var seconds = mins - (hours * 3600) - (minutes * 60);

    }
    componentDidMount() {
        let { questions } = this.props
        this.setState({
            TestDuration: questions && parseInt(questions[0].exam_limit)
        })
    }
    previeousquestionbuttonclick = () => {
        let { questionnumber } = this.state;
        this.setState({
            questionnumber: questionnumber - 1
        })
    }
    saveandnextbuttonclick = () => {
        let { questions } = this.props
        let { submit_ans_val,questionnumber } = this.state
        let { class_id, course_category_id, course_id, exam_id, exam_que_id } = questions[questionnumber]
        const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/quiz_submit'
        AsyncStorage.getItem('Loginid').then((token) => {
            let data = {
                class_id,
                course_category_id,
                course_id,
                exam_id,
                question_id: exam_que_id,
                submit_ans_val,
                student_id:token
            }
            console.log(data)
            fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-api-key': 'prabhat@123',
                    'Cache-Control': 'no-cache'
                },
                credentials: 'include',
                body: JSON.stringify(data),
            }).then((response) => response.json())
                .then(dataResponse => {
                    console.log(dataResponse)
                })
            let { questionnumber } = this.state;
            this.setState({
                questionnumber: questionnumber + 1,
            })
        })
    }
    onoptionselect = (uniqueoption) => {
        this.setState({
            isoptoinselect: uniqueoption
        })
    }
    onquestionnumberpress = (questionindex) => {
        this.setState({
            questionnumber: questionindex
        })
        this.RBSheet.close()
    }
    renderquestion = (item, index) => {
        return (
            <TouchableOpacity style={styles.questionplate}
                onPress={() => { this.onquestionnumberpress(item.index) }}
            >
                <Text style={styles.itemtext}>{item.index + 1}</Text>
            </TouchableOpacity>
        )
    }
    onptionSelectionPress = (name) => {
        this.setState({ isselcted: name })
        let { questions } = this.props
        let { questionnumber, selectedoption } = this.state
        let alloptions = this.props.questions[questionnumber].options
        alloptions.map((a) => {
            a.isAnswer = false
        })
        let selectedoptionindex = alloptions.findIndex((a => name === a.name))
        if (selectedoptionindex !== -1) {
            alloptions[selectedoptionindex].isAnswer = !(alloptions[selectedoptionindex].isAnswer)
        }
        this.setState({
            submit_ans_val: name
        })

    }
    renderquestonandoption = () => {

        let { questions } = this.props
        let { questionnumber, isselcted } = this.state
        return (
            <View>
                {questions && questions[questionnumber].options.map((a, index) => {
                    return (
                        <TouchableOpacity style={a.isAnswer ? styles.ontionslistselect : styles.ontionslist}
                            onPress={() => { this.onptionSelectionPress(a.name) }}
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
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
    previeousquestionintruction = () => {
        alert('this is first question ')
    }
    savenextinstruction = () => {
        alert('this is last question ')
    }
    render() {
        let { questionnumber, isoptoinselect } = this.state;
        let { questions } = this.props
        console.log(parseInt(questions[0].exam_limit))
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ marginBottom: hp('4%') }}>
                    <View style={styles.testinstheader}>
                        <View>
                            <Text style={styles.totalandletf}>{questions && `${questionnumber + 1}/${questions.length}`}</Text>
                        </View>
                        {/* <View >
                            <Timer totalDuration={questions && parseInt(questions[0].exam_limit)*60000} start={true}
                                reset={this.state.timerReset}
                                options={options}
                                handleFinish={handleTimerComplete}
                                getTime={this.getFormattedTime} />
                        </View> */}
                        <View>
                            <TimerTest
                                time={20}
                            />
                        </View>
                        <View >
                            <TouchableOpacity
                                onPress={() => { this.RBSheet.open() }}
                            >
                                <Image source={require('../../../../assets/menu.png')}
                                    style={{
                                        height: hp('5%'),
                                        width: wp('10%'),
                                        resizeMode: 'contain',
                                        margin: hp('2%')

                                    }}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View >
                        <View style={styles.questiontext}>
                            <Text style={styles.questionstyle}>{questions && questions[questionnumber].exam_question.replace(regex, ' ')}</Text>
                        </View>
                        <View style={styles.otionsview}>
                            {this.renderquestonandoption()}
                        </View>
                        <View>

                        </View>
                    </View>
                </ScrollView>
                <View >

                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={hp('80%')}
                        customStyles={{
                            wrapper: {

                            },
                            draggableIcon: {
                                backgroundColor: "red"
                            }
                        }}

                        closeOnDragDown={true}

                    >
                        <View style={styles.rbsheetstyle}>
                            <View style={styles.ciclewithtext}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.anweredcircle}>

                                    </View>
                                    <View>
                                        <Text style={styles.answeredtext}>Answered</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.notanweredcircle}>

                                    </View>
                                    <View>
                                        <Text style={styles.answeredtext}>Unanswered</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.notvisitedweredcircle}>

                                    </View>
                                    <View>
                                        <Text style={styles.answeredtext}>Not Visited</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.ciclewithtext}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.markedandanswerweredcircle}>

                                    </View>
                                    <View>
                                        <Text style={styles.answeredtext}>Marked and  Answered</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.markedanweredcircle}>
                                    </View>
                                    <View>
                                        <Text style={styles.answeredtext}>Marked For Review</Text>
                                    </View>
                                </View>
                            </View>
                            <FlatList
                                data={data}
                                renderItem={this.renderquestion}
                                keyExtractor={(item) => item.question_id}
                                numColumns={4}
                                style={{ alignSelf: 'center' }}
                            />
                        </View>
                    </RBSheet>
                </View>







                < View style={{ height: hp('10%'), backgroundColor: '#3b8d99' }}
                >
                    <View style={styles.buttonview}>
                        <TouchableOpacity style={styles.saveandnext}
                            onPress={() => { questions && questions.length - questionnumber == questions.length ? this.previeousquestionintruction() : this.previeousquestionbuttonclick() }}
                        >
                            <Text style={styles.buttontext}>Previous</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveandnext}>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveandnext}
                            onPress={() => { questions && questions.length - 1 - questionnumber == 0 ? this.savenextinstruction() : this.saveandnextbuttonclick() }}

                        >
                            <Text style={styles.buttontext}>Save & Next</Text>
                        </TouchableOpacity>
                    </View>
                </ View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        questions: state.testquestiondata
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestInstruction);
const styles = StyleSheet.create({
    testinstheader: {
        flex: 1,
        height: hp('10%'),
        backgroundColor: '#3b8d99',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        marginHorizontal: wp('4%'),
        marginVertical: hp('1.5%')
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
    totalandletf: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        padding: 20
    },
    rbsheetstyle: {
        flex: 1,
        borderTopEndRadius: 200
    },
    anweredcircle: {
        height: hp('4%'),
        width: hp('4%'),
        backgroundColor: 'green',
        borderRadius: hp('2%')
    },
    notanweredcircle: {
        height: hp('4%'),
        width: hp('4%'),
        backgroundColor: 'red',
        borderRadius: hp('2%')
    },
    answeredtext: {
        fontSize: 18,
        padding: 5
    },
    ciclewithtext:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('10%'),
        marginVertical: hp('1%')
    },
    notvisitedweredcircle: {
        height: hp('4%'),
        width: hp('4%'),
        borderWidth: 2,
        borderRadius: hp('2%'),
        borderColor: '#363333'
    },
    markedanweredcircle: {
        height: hp('4%'),
        width: hp('4%'),
        borderRadius: hp('2%'),
        backgroundColor: '#fce532'
    },
    markedandanswerweredcircle: {
        height: hp('4%'),
        width: hp('4%'),
        borderRadius: hp('2%'),
        backgroundColor: '#fce532',
        borderWidth: 2,
        borderColor: 'green'

    },
    questionplate: {
        height: hp('6%'),
        width: hp('6%'),
        borderRadius: hp('3%'),
        backgroundColor: '#cfceca',
        marginHorizontal: wp('2%')
    },
    itemtext: {
        fontSize: 24,
        alignSelf: 'center',
        marginTop: hp('1%')
    }


})
const options = {
    container: {
        padding: 5,
        borderRadius: 5,
        width: 220,
    },
    text: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 7,
    }
};


const handleTimerComplete = () => alert("custom completion function");