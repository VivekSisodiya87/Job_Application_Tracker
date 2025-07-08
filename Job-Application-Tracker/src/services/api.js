import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend running here
});

export const getJobs = () => API.get('/jobs');
export const createJob = (jobData) => API.post('/jobs', jobData);
export const updateJob = (id, jobData) => API.put(`/jobs/${id}`, jobData);
export const deleteJob = (id) => API.delete(`/jobs/${id}`);
