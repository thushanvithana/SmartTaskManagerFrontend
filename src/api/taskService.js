import axios from 'axios';

const API_BASE = 'https://smarttaskmanagerbackend.fly.dev/api/Tasks';

export const fetchTasks = async () => {
  return axios.get(API_BASE, { headers: { Accept: 'text/plain' } });
};

export const createTask = async (task) => {
  return axios.post(API_BASE, task);
};

export const updateTask = async (id, task) => {
  return axios.put(`${API_BASE}/${id}`, task);
};

export const deleteTask = async (id) => {
  return axios.delete(`${API_BASE}/${id}`);
};

