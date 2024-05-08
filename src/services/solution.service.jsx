import http from "../axiosInstance";

class solutionDataService {
  getAll() {
    return http.get("/categories");
  }

  get(id) {
    return http.get(`/categories/${id}`);
  }

  getTitle(categoryTitle) {
    return http.get(`/articles/${categoryTitle}/category`);
  }

  create(data, token) {
    return http.post("/categories", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  update(id, data, token) {
    return http.put(`/categories/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  delete(id, token) {
    return http.delete(`/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const solutionService = new solutionDataService();
export default solutionService;
