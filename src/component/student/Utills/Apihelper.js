const Base_url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/';
const header = {
  'Content-Type': 'application/json',
  'x-api-key': 'prabhat@123',
};
const ApiHelper = {
  fetchGet: function (url) {
    console.log(url);
    return fetch(Base_url + url, {
      method: 'GET',
      headers: header,
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res2) => {
        return res2;
        // if (res2.response.status === 'true') {
        //   return res2;
        // }
      })
      .catch((e) => {
        console.log(e);
      });
  },
  fetchById: function (url, id) {
    console.log(url);
    return fetch(Base_url + url, {
      method: 'POST',
      headers: header,
      credentials: 'include',
      body: id,
    })
      .then((res) => res.json())
      .then((res2) => {
        return res2;
        // if (res2.response.status === 'true') {
        //   return res2;
        // }
      })
      .catch((e) => {
        console.log(e);
      });
  },
};

export default ApiHelper;
