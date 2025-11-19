import axios from "axios";

const API_BASE_URL = "localhost:3000/api/student/";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getStudent = async () => {
  const response = await api.get("/student"); 
  return response.data;
};

export const addStudent = async (newStudent) => {
  const response = await api.post("/student", newStudent); 
  return response.data;
};

export const updateStudent = async (id, updatedStudent) => {
  const response = await api.put(`/student/${id}`, updatedStudent); 
  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await api.delete(`/student/${id}`); 
  return response.data;
};

export default api;
