import apiClient from './axiosConfig.js';
import {ILogin} from "../pages/Login.tsx";

// TODO: Login
export const login = async (data: ILogin) => {
    const response = await apiClient.post('/admin/login', data);
    return response.data;
};

// TODO: GET Requests
// 1. Get All News
export const fetchNews = async () => {
    const response = await apiClient.get('/news');
    return response.data;
};

export const fetchEducation = async () => {
    const response = await apiClient.get('/education');
    return response.data;
};

export const fetchAttention = async () => {
    const response = await apiClient.get('/attention');
    return response.data;
};

export const fetchPoliceStation = async () => {
    const response = await apiClient.get('/police-department');
    return response.data;
};

// TODO: POST Requests
export const createNews = async (data: FormData) => {
    const response = await apiClient.post('/news', data);
    return response.data;
};

export const createEducation = async (data: FormData) => {
    const response = await apiClient.post('/education', data);
    return response.data;
};

export const createAttention = async (data: FormData) => {
    const response = await apiClient.post('/attention', data);
    return response.data;
};

export const createPoliceStation = async (data: FormData) => {
    const response = await apiClient.post('/police-department', data);
    return response.data;
};

// TODO: PUT Requests
export const editNews = async (id: number, data: FormData) => {
    const response = await apiClient.put(`/news/${id}`, data);
    return response.data;
};

export const editEducation = async (id: number, data: FormData) => {
    const response = await apiClient.put(`/education/${id}`, data);
    return response.data;
};

export const editAttention = async (id: number, data: FormData) => {
    const response = await apiClient.put(`/categories/${id}`, data);
    return response.data;
};

export const editPoliceStation = async (id: number, data: FormData) => {
    const response = await apiClient.put(`/police-department/${id}`, data);
    return response.data;
};


// TODO: DELETE Requests
export const deleteNews = async (id: number) => {
    const response = await apiClient.delete(`/news/${id}`);
    return response.data;
};

export const deleteEducation = async (id: number) => {
    const response = await apiClient.delete(`/education/${id}`);
    return response.data;
};

export const deleteAttention = async (id: number) => {
    const response = await apiClient.delete(`/attention/${id}`);
    return response.data;
};

export const deletePoliceStation = async (id: number) => {
    const response = await apiClient.delete(`/police-department/${id}`);
    return response.data;
};