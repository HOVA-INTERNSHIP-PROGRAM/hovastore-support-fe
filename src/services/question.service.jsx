import http from "../axiosInstance";

class solutionDataService {
  getAll() {
    return http.get("/questions");
  }

  get(questionId) {
    return http.get(`/questions/${questionId}`);
  }

  create(categoryId, data, token) {
    return http.post(`/questions/${categoryId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  update(questionId, data, token) {
    return http.put(`/questions/${questionId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  delete(questionId, token) {
    return http.delete(`/questions/${questionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const questionService = new solutionDataService();
export default questionService;
