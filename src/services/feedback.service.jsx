import http from "../axiosInstance";

class feedbacksDataService {
  getAll() {
    return http.get("/feedbacks");
  }

  get(feedbacksId) {
    return http.get(`/feedbacks/${feedbacksId}`);
  }

  create(questionId, data) {
    return http.post(`/feedbacks/${questionId}/question`, data);
  }

  update(feedbacksId, data, token) {
    return http.put(`/feedbacks/${feedbacksId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  delete(feedbacksId, token) {
    return http.delete(`/feedbacks/${feedbacksId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const questionService = new feedbacksDataService();
export default questionService;
