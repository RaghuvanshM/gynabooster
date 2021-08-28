import { FETCHING_QUESTION_REQUEST, FETCHING_QUESTION_FAILURE, FETCHING_QUESTION_SUCCESS } from '../action/type'
const initialStae = {
  //studentloginstatem
  studentloginid: '',
  studentloginstatus: '',
  studentloginMessage: '',
  studentData: [],
  studentClassesData: [],
  studentCourseData: [],
  studentVideoData: [],
  appdarkmodestate: false,
  Teacherdashboarddata: [],
  AllCourse: [],
  TeacherOtherInformation: [],
  AllBlogs: [],
  isFetchingquestion: false,
  testquestiondata: []
};
const reducer = (state = initialStae, action) => {
  switch (action.type) {
    case 'STUDNET_LOGIN':
      let { Student_id } = action.payload.data;
      let { status, message } = action.payload.response;
      return {
        ...state,
        studentloginid: Student_id,
        studentloginstatus: status,
        studentloginMessage: message,
      };
    case 'STUDNET_DATA':
      return { ...state, studentData: action.payload.data };
    case 'STUDENT_CLASSES_DATA':
      return { ...state, studentClassesData: action.payload };
    case 'STUDENT_COURSE_DATA':
      return { ...state, studentCourseData: action.payload };
    case 'STUDENT_VIDEO_DATA':
      return { ...state, studentVideoData: action.payload };
    case 'APP_DARKMODE':
      return { ...state, appdarkmodestate: action.payload };
    case 'TEACHER_PROFILE_DATA':
      return { ...state, Teacherdashboarddata: action.payload };
    case 'ALL_COURSE_GET':
      return { ...state, AllCourse: action.payload };
    case 'TEACHER_OTHERINFORMATION_DATA':
      return { ...state, TeacherOtherInformation: action.payload };
    case 'GET_BLOG_DATA':
      return { ...state, AllBlogs: action.payload };
    case FETCHING_QUESTION_REQUEST:
      return { ...state, isFetchingquestion: true };
    case FETCHING_QUESTION_SUCCESS:
      return { ...state, testquestiondata: action.payload };
  }
  return state;
};
export default reducer;
