/**
 * @author ArishArish
 * @description This file contains all the API methods which are used in the application
 */
import axios from "axios";
var baseURL = "http://itaxadmin.idossapp.in/api/v1";
export default class RestApi {
  static login(data) {
    return axios.post(`${baseURL}/login`, data);
  }

  static register(data) {
    return axios.post(`${baseURL}/register`, data);
  }

  static homePage() {
    return axios.get(`${baseURL}/home-page`);
  }
  static socialLogin(data){
    return axios.post(`${baseURL}/social/login`,data)
  }
}
