export function Teacherdashboarddata(id) {
  let data = {
    id: id,
  };
  const url =
    'https://gyanbooster.jingleinfo.com/mobileapp/user/teacher_profile';
  return (dispatch) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'prabhat@123',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res2) => {

        dispatch({
          type: 'TEACHER_PROFILE_DATA',
          payload: res2.data,
        });
      });
  };
}
export function Teacherotherinfodata(id) {
  let data = {
    teacher_registration_id: id,
  };
  const url =
    'https://gyanbooster.jingleinfo.com/mobileapp/user/teacher_othr_info';
  return (dispatch) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'prabhat@123',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res2) => {
        dispatch({
          type: 'TEACHER_OTHERINFORMATION_DATA',
          payload: res2.data[0],
        });
      });
  };
}