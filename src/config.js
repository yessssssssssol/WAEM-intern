const BASE_URL = 'http://192.168.244.10:3000';

// const BASE_URL = 'http://172.20.10.4:3000';
// const BASE_URL = 'http://192.168.0.168:3000';

export const API = {
  SIGNUP: `${BASE_URL}/user/signup`,
  SIGNIN: `${BASE_URL}/user/signin`,
  EMAIL: `${BASE_URL}/user/emailCheck`,
  REGISTRATION: `${BASE_URL}/product/registration`,
  CREATE: `${BASE_URL}/product/registration`,
  MAIN: `${BASE_URL}/product?offset=0&limit=30`,
  PRODUCTDETAIL: `${BASE_URL}/product/`,
  MYPAGEPRODUCT: `${BASE_URL}/product/myPage`,
  LIVECERT: `${BASE_URL}/user/liveCert`,
};
