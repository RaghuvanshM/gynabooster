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