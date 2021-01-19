
export function studentlogin(text) {
    let { email, password } = text
    const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/student_login'
    let data = {
        email: email,
        password: password
    }
    return dispatch => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'prabhat@123'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        }).then(res=>res.json())
        .then(res2=>{
            dispatch({
                type:'STUDNET_LOGIN',
                payload:res2
            
              })
        })

    }

}




