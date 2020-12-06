import { axios } from '../plugins/axios';

export class ApiService {
  constructor(Resource) {
    this.Resource = Resource;
    // this.Token = { Authorization: `Bearer ${localStorage.getItem("token")}` };
  }

  async queryAll(filter = {}) {
    try {
      const response = await axios.get(this.Resource, {
        headers: this.Token,
        params: filter,
      });
      return await response.data;
    } catch (error) {
      console.log(`Server error: ${error}`);
    }
  }

  async queryOne(id) {
    const response = await axios.get(`${this.Resource}/${id}`, {
      headers: this.Token,
    });
    return await response.data;
  }

  async createOne(data) {
    const response = await axios.post(this.Resource, data, {
      headers: this.Token,
    });
    return await response.data;
  }

  async updateOne(id, data) {
    const response = await axios.put(`${this.Resource}/${id}`, data, {
      headers: this.Token,
    });
    return await response.data;
  }

  async deleteOne(id) {
    const response = await axios.delete(`${this.Resource}/${id}`, {
      headers: this.Token,
    });
    return await response.data;
  }

  // Controle de usuário (Auth de login, Criação)
  async login(data) {
    const response = await axios.post(this.Resource, data);
    return await response.data;
  }

  async createUser(data) {
    const response = await axios.post('register', data);
    return await response.data;
  }
}
