import axios from "axios";
import env from '$lib/variables';
import { token } from '$lib/store';

let accessToken;
token.subscribe(val=>accessToken=val);

const API = axios.create({
  baseURL : env.apiUrl
});

export const http = (method, url, request, config) => {
  const cancelTokenSource = axios.CancelToken.source();
  config = Object.assign(config||{},{
    cancelToken: cancelTokenSource.token
  })
  if(accessToken){
    return API('/sanctum/csrf-cookie').then(()=>{
      const headers = {
        'Authorization': `Bearer ${accessToken}` 
      };
      // cancelTokenSource.cancel()
      return API({
          method,
          url,
          data: request,
          headers,
          ...config
        }).then(res => {
          return Promise.resolve(res.data);
        })
        .catch(err => {
          return Promise.reject(err);
        });
    })
  }else{    
    return API({
      method,
      url,
      data: request,
      ...config
    }).then(res => {
      return Promise.resolve(res.data);
    })
    .catch(err => {
      return Promise.reject(err);
    });
  }
};