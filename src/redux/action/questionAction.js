import { block } from 'react-native-reanimated'
import {
    FETCHING_QUESTION_FAILURE,
    FETCHING_QUESTION_SUCCESS,
    FETCHING_QUESTION_REQUEST
} from './type'

export const fetchingQuestionRequest = () => ({
    type:
        FETCHING_QUESTION_REQUEST
})

export const fetchingQuestionSuccess = (json) => ({
    type: FETCHING_QUESTION_SUCCESS,
    payload: json
})

export const fetchingPeopleFailure = (error) => ({
    type: FETCHING_QUESTION_FAILURE,
    payload: error
})
export const fetchPeople = (course_id) => {
    return async dispatch => {
        dispatch(fetchingQuestionRequest)
        try {

            let data = {
                course_id
            }
            const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/quiz_display'
            await fetch(url, {
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
                    if (res2.response.status === "true") {
                        let allquestion = []
                        let questionoption = []
                        //  let booleanvalue ={isAnswer:false}
                        res2.data.map((a) => {
                            // let json ={optionname:a.exam_opt1,
                            //     optionname:a.exam_opt2,
                            //     optionname:a.exam_opt3,
                            //     optionname:a.exam_opt4
                            // }
                            let questionoption = []
                            let pointvar = 65
                            for (const key in a) {
                                if (`${key}` === 'exam_opt1' || `${key}` === 'exam_opt2' || `${key}` === 'exam_opt3' || `${key}` === 'exam_opt4') {
                                    let optionjson = { name: a[key], isAnswer: false, pointname: String.fromCharCode(pointvar++) }
                                    questionoption.push(optionjson)
                                    Object.assign(a, { options: questionoption });
                                }
                            }
                            allquestion.push(a)
                        })
                        dispatch(fetchingQuestionSuccess(allquestion))
                    }

                })
        }
        catch (error) {

        }
    }
}