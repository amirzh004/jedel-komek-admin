import apiClient from './axiosConfig.js';
import {ICategory} from "../models/ICategory.ts";
import {IItem} from "../models/IItem.ts";
import {ICarousel} from "../models/ICarousel.ts";
import {IPopularItems} from "../models/IPopularItems.ts";
import {ISocialLink} from "../models/ISocialLink.ts";

// TODO: GET Requests
// 1. Get All Categories
export const fetchCategories = async () => {
    const response = await apiClient.get('/categories');
    return response.data;
};

// 2. Get All Items
export const fetchItems = async () => {
    const response = await apiClient.get('/items');
    return response.data;
};

// 3. Get All Items by Category
export const fetchItemsByCategoryId = async (id: number) => {
    const response = await apiClient.get(`/items/${id}`);
    return response.data;
};

// 4. Get All Banners
export const fetchCarousel = async () => {
    const response = await apiClient.get('/banners');
    return response.data;
};

// 5. Get All Popular Items
export const fetchPopularItems = async () => {
    const response = await apiClient.get('/popular-items');
    return response.data;
};

// 6. Get Home Texts
export const fetchHomeTexts = async () => {
    const response = await apiClient.get('/hometexts');
    return response.data;
};

// 7. Get Footer Texts
export const fetchFooterTexts = async () => {
    const response = await apiClient.get('/footertexts');
    return response.data;
};

// 8. Get Social Links
export const fetchSocialLinks = async () => {
    const response = await apiClient.get('/social-links');
    return response.data;
};


// TODO: POST Requests
// 1. Create Category
export const createCategory = async (data: ICategory) => {
    const response = await apiClient.post('/categories', data);
    return response.data;
};

// 2. Create Item
export const createItem = async (data: IItem) => {
    const response = await apiClient.post('/items', data);
    return response.data;
};

// 3. Create Banner
export const createBanner = async (data: ICarousel) => {
    const response = await apiClient.post('/banners', data);
    return response.data;
};

// 4. Create Popular Item
export const createPopularItem = async (data: IPopularItems) => {
    const response = await apiClient.post('/popular-items', data);
    return response.data;
};

// 5. Create Social Links
export const createSocialLink = async (data: ISocialLink) => {
    const response = await apiClient.post('/social-links', data);
    return response.data;
};


// TODO: PUT Requests
// 1. Edit Category
export const editCategory = async (id: number, data: ICategory) => {
    const response = await apiClient.put(`/categories/${id}`, data);
    return response.data;
};

// 2. Edit Item
export const editItem = async (id: number, data: IItem) => {
    const response = await apiClient.put(`/items/${id}`, data);
    return response.data;
};

// 3. Edit Banner
export const editBanner = async (id: number, data: ICarousel) => {
    const response = await apiClient.put(`/banners/${id}`, data);
    return response.data;
};

// 4. Edit Popular Item
export const editPopularItem = async (id: number, data: IPopularItems) => {
    const response = await apiClient.put(`/popular-items/${id}`, data);
    return response.data;
};

// 5. Edit Social Links
export const editSocialLink = async (id: number, data: ISocialLink) => {
    const response = await apiClient.put(`/social-links/${id}`, data);
    return response.data;
};

// 6. Edit Home Texts
export const editHomeTexts = async (id: number, data: IPopularItems) => {
    const response = await apiClient.put(`/hometexts/${id}`, data);
    return response.data;
};

// 7. Edit Footer Texts
export const editFooterTexts = async (id: number, data: ISocialLink) => {
    const response = await apiClient.put(`/footertexts/${id}`, data);
    return response.data;
};


// TODO: DELETE Requests
// 1. Delete Category
export const deleteCategory = async (id: number) => {
    const response = await apiClient.delete(`/categories/${id}`);
    return response.data;
};

// 2. Delete Item
export const deleteItem = async (id: number) => {
    const response = await apiClient.delete(`/items/${id}`);
    return response.data;
};

// 3. Delete Banner
export const deleteBanner = async (id: number) => {
    const response = await apiClient.delete(`/banners/${id}`);
    return response.data;
};

// 4. Delete Popular Item
export const deletePopularItem = async (id: number) => {
    const response = await apiClient.delete(`/popular-items/${id}`);
    return response.data;
};

// 5. Delete Social Links
export const deleteSocialLinks = async (id: number) => {
    const response = await apiClient.delete(`/social-links/${id}`);
    return response.data;
};


// TODO: TOGGLE Requests
// 1. Toggle Category
export const toggleCategory = async (id: number) => {
    const response = await apiClient.put(`/categories/${id}/toggle-status`);
    return response.data;
};

// 2. Toggle Item
export const toggleItem = async (id: number) => {
    const response = await apiClient.put(`/items/${id}/toggle-status`);
    return response.data;
};

// 3. Toggle Banner
export const toggleBanner = async (id: number) => {
    const response = await apiClient.put(`/banners/${id}/toggle-status`);
    return response.data;
};

// 4. Toggle Popular Item
export const togglePopularItem = async (id: number) => {
    const response = await apiClient.put(`/popular-items/${id}/toggle-status`);
    return response.data;
};

// 5. Toggle Social Links
export const toggleSocialLinks = async (id: number) => {
    const response = await apiClient.put(`/social-links/${id}/toggle-status`);
    return response.data;
};