import http from "../axiosInstance";

class loginDataService {
  login(data) {
    return http.post("/users/auth", data);
  }
}

const loginService = new loginDataService();
export default loginService;
