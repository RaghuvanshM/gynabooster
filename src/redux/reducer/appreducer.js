
const initialStae = {
  //studentloginstate
  studentloginid: '',
  studentloginstatus: '',
  studentloginMessage: '',
  studentData: [],
  studentClassesData:[]


}
function studentLogin() {

}
const reducer = (state = initialStae, action) => {
 
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return { counter: state.counter + 1 }

    case 'DECREASE_COUNTER':
      return { counter: state.counter - 1 }
    case 'STUDNET_LOGIN':
      let { Student_id } = action.payload.data
      let { status, message } = action.payload.response
      return { studentloginid: Student_id, studentloginstatus: status, studentloginMessage: message }
      case 'STUDNET_DATA':
        return { studentData:action.payload.data  }
        case 'STUDENT_CLASSES_DATA':
          return {...initialStae, studentClassesData:action.payload }
  }
  return state;

}
export default reducer;