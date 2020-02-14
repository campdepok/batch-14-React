import Axios from "axios";

export const getAllUser = () => {
  return {
    type: "GET_USER", // string yang mendiskripsikan perintah
    payload: Axios.get(process.env.REACT_APP_URL_STRING)
  };
};

export const postNewUser = name => {
  return {
    type: "POST_USER",
    payload: Axios.post(process.env.REACT_APP_URL_STRING, {
      username: name
    })
  };
};
