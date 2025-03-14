import apiClient from './axiosConfig.js';

// 1. Create Category
export const createCategory = async (categoryData) => {
    const response = await apiClient.post('/categories', categoryData);
    return response.data;
};

// 2. Get All Categories
export const fetchCategories = async () => {
    const response = await apiClient.get('/categories');
    return response.data;
};

// 3. Update Category
export const updateCategory = async (id, categoryData) => {
    const formData = new FormData();
    // formData.append('_method', 'PUT'); // Required for Laravel PUT
    formData.append('name_ru', categoryData.rusName);
    formData.append('name_kz', categoryData.kzName);
    formData.append('type', categoryData.type);
    if (categoryData.preimage !== '' && categoryData.preimage !== null) {
        formData.append('preimage', categoryData.preimage);
        console.log(categoryData.preimage);
    } else {
        formData.append('preimage', '');
        console.log('No pre');
    }
    if (categoryData.postimage !== '' && categoryData.postimage !== null) {
        formData.append('postimage', categoryData.postimage);
    } else {
        formData.append('postimage', '');
    }
    const response = await apiClient.post(`/categories/${id}`, formData);
    return response.data;
};

// 4. Toggle Category Status
export const toggleCategoryStatus = async (id) => {
    const response = await apiClient.put(`/categories/${id}/toggle-status`);
    return response.data;
};

// 4. Delete Category
export const deleteCategory = async (id) => {
    const response = await apiClient.delete(`/categories/${id}`);
    return response.data;
};

// TODO: Food Items

// 5. Create Food Item
export const createFoodItem = async (foodData) => {
    const response = await apiClient.post('/food-items', foodData);
    return response.data;
};

// 6. Update Food Item
export const updateFoodItem = async (id, foodData) => {
    const response = await apiClient.post(`/food-items/${id}`, foodData);
    return response.data;
};

// 7. Toggle Food Item Status
export const toggleFoodStatus = async (id) => {
    const response = await apiClient.put(`/food-items/${id}/toggle-status`);
    return response.data;
};

// 8. Delete Food Item
export const deleteFoodItem = async (id) => {
    const response = await apiClient.delete(`/food-items/${id}`);
    return response.data;
};

// 9. Logout
export const logout = async () => {
    const response = await apiClient.post('/logout');
    return response.data;
};
