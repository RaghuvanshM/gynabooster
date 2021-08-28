import {
    FETCHING_QUESTION_FAILURE,
    FETCHING_QUESTION_SUCCESS,
    FETCHING_QUESTION_REQUEST
} from '../action/type';

const initialStae = {
    data: [],
    isfetching: false,
    iserror: ''
}
const questionReducer = (state = initialStae, action) => {
    switch (action.type) {
        case FETCHING_QUESTION_REQUEST:
            return { ...state, isfetching: true }
        case FETCHING_QUESTION_FAILURE:
            return { ...state, iserror: action.payload }
        case FETCHING_QUESTION_SUCCESS:
            return { ...state, iserror: action.payload }
        default:
            return state;
    }
}
export default questionReducer