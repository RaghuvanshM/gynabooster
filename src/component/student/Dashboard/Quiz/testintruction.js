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
import { color, cos } from 'react-native-reanimated';
import {fetchPeople} from '../../../../redux/action/questionAction'
import { connect } from 'react-redux'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
class TestInstruction extends Component {
    constructor(props) {
        super(props)

        this.state = {
            numberoftestquestion: [],
            course_category_id: props.route.params.courseCategoryid
        }
    }
    onstarttestPress=()=>{
        let {questions } = this.props;
        if(questions.length>=1){
            this.props.navigation.navigate('starttest',{...this.state})
        }
    }
    componentDidMount() {
        let { course_category_id } = this.state
         this.props.getQuestion(course_category_id)
        let data = {
            course_id: course_category_id
        }
        const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/quiz_display'
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 'prabhat@123',
                'Cache-Control': 'no-cache'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(res2 => {
    
               if(res2.response.status){
                   if(res2.data){
                this.setState({
                    numberoftestquestion:res2.data
                })
            }
               }
               else{
                   
               }
            }
            );
    }
    render() {
        let {course_category_id,numberoftestquestion} =this.state
        let data ={courescategoryid:course_category_id}
        return (
            <View style={{flex:1}}>
            <ScrollView>
                <View style={styles.testinstheader}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            size={25}
                            color="white"
                            style={styles.iconstyles}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headertext}>Tests</Text>
                </View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 20 }}> Language</Text>
                <View style={styles.textstyleview}>
                    <Text style={styles.insructiontext}>Test Language</Text>
                    <Text style={styles.insructiontext}>English</Text>
                </View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 20 }}>Exam Patterns</Text>
                <View style={styles.textstyleview}>
                    <Text style={styles.insructiontext}>No of Questions</Text>
                    <Text style={styles.insructiontext}>20</Text>
                </View>
                <View style={styles.textstyleview}>
                    <Text style={styles.insructiontext}>Time(In Minutes)</Text>
                    <Text style={styles.insructiontext}>60</Text>
                </View>
                <View style={styles.textstyleview}>
                    <Text style={styles.insructiontext}>Total Marks</Text>
                    <Text style={styles.insructiontext}>100</Text>
                </View>
                <View style={styles.textstyleview}>
                    <Text style={styles.insructiontext}>Correct Answers</Text>
                    <Text style={styles.insructiontext}>1</Text>
                </View>
                <View style={styles.textstyleview}>
                    <Text style={styles.insructiontext}>Wrong Answer(Negative Marking)</Text>
                    <Text style={styles.insructiontext}>0</Text>
                </View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 20 }}>General Instructions</Text>
                <View style={styles.textstyleview}>
                    <Text style={styles.insructiontext}>It is a long established fact
                     that a reader will be distracted by the readable content of a 
                     page when looking at its layout. The point of using Lorem Ipsum is
                      that it has a more-or-less normal distribution of letters, as opposed 
                      
                      to using 'Content here, content here', making it look like readable English. 
                      Many desktop publishing packages and web page editors now use Lorem Ipsum as
                       their default model text, and a search for 'lorem ipsum' will uncover many web
                       
                        sites still in their infancy. Various versions have evolved over the years,
                         sometimes by accident, sometimes on purpose 
                         (injected humour and the like).
                         It is a long established fact that a reader will be distracted by the 
                         
                         readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
                         that it has a more-or-less normal distribution of letters, as opposed to using 'Content

                          here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes 
                         
                         by accident, sometimes on purpose (injected humour and the like).
                         </Text>
                </View>
            </ScrollView>
           <TouchableOpacity style={{height:hp('10%'),backgroundColor:'#3b8d99'}}
        //  onPress={() => { this.props.navigation.navigate('starttest',{...this.state}) }}
        onPress={()=>{this.onstarttestPress()}}
           >
                <Text style={styles.starttesttext}>Start Test</Text>
           </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        questions:state.testquestiondata
    }
}
function mapDispatchToProps(dispatch) {
    return {
     getQuestion:(course_id)=>dispatch(fetchPeople(course_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestInstruction);
const styles = StyleSheet.create({
    testinstheader: {
        height: hp('10%'),
        backgroundColor: '#3b8d99',
        flexDirection: 'row',

    },
    headertext: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginLeft: wp('30%')
    },
    iconstyles: {
        marginVertical: hp('3.5%'),
        marginHorizontal: wp('3%'),

    },
    insructiontext: {
        fontSize: 18,
        lineHeight:30
    },
    textstyleview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('10%'),
        marginVertical: hp('1%')
    },
    starttesttext:{
        fontSize:18,
        alignSelf:'center',
        fontWeight:'bold',
        color:'white',
        marginTop:hp('4%')
    }

})