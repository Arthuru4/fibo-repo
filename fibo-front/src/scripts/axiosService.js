import Axios from "axios";
/* eslint-disable */
let _ip;
const getIp = () => {
  return Axios({
    method: "GET",
    url: "https://www.cloudflare.com/cdn-cgi/trace"
  });
};
getIp().then(res => {
  res.data.match(/ip=([\d.]*)/);
  _ip = RegExp.$1 || null;
});

export const setData = data => {
  return Axios({
    method: "POST",
    url: "http://localhost:3002/setdata",
    data: { input: data, address: _ip }
  });
};
export const getData = () => {
  return new Promise(resolve => {
    if (!_ip)
      getIp().then(res => {
        res.data.match(/ip=([\d.]*)/);
        _ip = RegExp.$1 || null;

        resolve(
          Axios({
            method: "POST",
            url: "http://localhost:3002/getdata",
            data: { address: _ip }
          })
        );
      });
    else {
      resolve(
        Axios({
          method: "POST",
          url: "http://localhost:3002/getdata",
          data: { address: _ip }
        })
      );
    }
  });
};
