import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://sixr-clone.herokuapp.com/", //api will go here
    headers: {
      Authorization: token
    }
  });
};
export default axiosWithAuth;
