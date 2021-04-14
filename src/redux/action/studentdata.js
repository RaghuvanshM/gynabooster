export function studentdashboarddata(id){
      let data = {
        id: id
      }
      const url = "https://gyanbooster.jingleinfo.com/mobileapp/user/student_profile";
      return dispatch =>{
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'prabhat@123'

        },
        credentials: 'include',
        body: JSON.stringify(data)
      }).then(res => res.json())
        .then(res2 => {
          dispatch({
            type:'STUDNET_DATA',
            payload:res2
        
          })
        }
        );
      }
  }
  export function studentClass(){
    const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/view_class'
    return dispatch=>{
     fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': 'prabhat@123',
            'Cache-Control': 'no-cache'
        },
        credentials: 'include',
    }).then(res => res.json())
        .then(res2 => {
        
          dispatch({
            type:'STUDENT_CLASSES_DATA',
            payload:res2
        
          })
        }
        );
      }
        
}

export function studentCourseData(id){
  let data = {
    category_id:id
  }
  const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/student_get_course'
  return dispatch=>{
   fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': 'prabhat@123',
          'Cache-Control': 'no-cache'
      },
      credentials: 'include',
      body:JSON.stringify(data)
  }).then(res => res.json())
      .then(res2 => {
        dispatch({
          type:'STUDENT_COURSE_DATA',
          payload:res2.data
      
        })
      }
      );
    }  
}
export function studentVideoData(id){
  let data = {
    course_subcategory:id
  }
  const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/student_get_course_video'
  return dispatch=>{
   fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': 'prabhat@123',
          'Cache-Control': 'no-cache'
      },
      credentials: 'include',
      body:JSON.stringify(data)
  }).then(res => res.json())
      .then(res2 => {
        dispatch({
          type:'STUDENT_VIDEO_DATA',
          payload:res2.data
      
        })
      }
      );
    }  
}
export function DarkMode(appstate){
  return dispatch=>{
        dispatch({
          type:'APP_DARKMODE',
          payload:appstate
      
        })
    }  
}
export function AllCourseGetData(){
  const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/view_course'
  return dispatch=>{
   fetch(url, {
      headers: {
        Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': 'prabhat@123',
          'Cache-Control': 'no-cache'
      },
      credentials: 'include',
  }).then(res => res.json())
      .then(res2 => {
        dispatch({
          type:'ALL_COURSE_GET',
          payload:res2
      
        })
      }
      );
    }  
}
export function BlogData(){
  const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/view_blog'
  return dispatch=>{
   fetch(url, {
      headers: {
        Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': 'prabhat@123',
          'Cache-Control': 'no-cache'
      },
      credentials: 'include',
  }).then(res => res.json())
      .then(res2 => {
        dispatch({
          type:'GET_BLOG_DATA',
          payload:res2
        })
      }
      );
    }  
}