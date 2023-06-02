import axios from 'axios';
import { productsData, ProductData } from '../../dummyData/Menu';
import { getRefreshToken } from '../auth/index';

const api = process.env.REACT_APP_BASE_URL_NODE;
const accessToken = localStorage.getItem('accessToken');

export const getCsm = async () => {
    try {
        const response = await axios.get(`${api}/cms/home_popular_category`, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
        console.log(error);
    }
};

export const getCategorysList = async (csmCategoryData, id, priceRange, sortOrder) => {
    console.log(priceRange, sortOrder);
    try {
        let data;
        if (csmCategoryData) {
            data = {
                categoryId: csmCategoryData,

            };
        } else if (id) {
            data = {
                parentId: id,
                minPrice: priceRange[0],
                maxPrice: priceRange[1],
                sort: sortOrder
            };
        }
        else {
            data = "";
        }
        console.log(data);
        const response = await axios.post(`${api}/masterCategory/categoryList`, data, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
        console.log(error);
    }
};


export const getParentList = async () => {
    try {
        const response = await axios.post(`${api}/masterCategory/categoriesdata`, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
        console.log(error);
    }
};

export const autoSuggestion = async (data) => {
    try {
        const postData = {
            name: data.name,
            type: "product"
        };
        const response = await axios.post(`${api}/cms/autocomplete`, postData, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response;
    } catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
        console.log(error);
    }
};

