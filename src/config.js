const BASE_URL = process.env.REACT_APP_BASE_URL;

export const API = {
  SIGNUP: `${BASE_URL}/user/signup`,
  SIGNIN: `${BASE_URL}/user/signin`,
  EMAIL: `${BASE_URL}/user/emailCheck`,
};
