import axios from 'axios';
import { productsData, ProductData } from '../../dummyData/Menu';
import { getRefreshToken } from '../auth/index';

const api = process.env.REACT_APP_BASE_URL_NODE;
const accessToken = localStorage.getItem('accessToken');

//get popular product API
export const getProductCsm = async () => {
    try {
        const response = await axios.get(`${api}/cms/home_new_arrivals`, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};

//search product wise API
export const getFiltersList = async (id) => {
    try {
        const response = await axios.post(`${api}/product/productfilter/${id}`, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response
    } catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};

//product list API
export const getProductsList = async (csmProductData, categoryId, start, limit, selectedValues, priceRange, sortOrder) => {
    try {
        let data;
        if (csmProductData) {
            data = { productId: csmProductData };
        } else if (categoryId && priceRange) {
            data = {
                masterCategoryId: categoryId,
                minPrice: priceRange[0],
                maxPrice: priceRange[1],
                sort: sortOrder,
            };
            if (selectedValues && selectedValues.length > 0) {
                data.values = selectedValues;
            }
        }
        else if (categoryId) {
            data = {
                masterCategoryId: categoryId,
            };
            if (selectedValues && selectedValues.length > 0) {
                data.values = selectedValues;
            }
        }
        else {
            data = "";
        }
        const response = await axios.post(`${api}/product/productList?start=${start}&limit=${limit}&count=1`, data, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};

//product preview API
export const getProductsView = async (id) => {
    try {
        const response = await axios.get(`${api}/product/productview/${id}`, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};

export const getProductsData = async () => {
    try {
        return productsData;
    } catch (e) {
        console.log(e);
    }
};


export const getProductData = async (id) => {
    try {
        const selectedProduct = productsData.filter((product) => product.id == id)

        return selectedProduct[0];
    } catch (e) {
        console.log(e);
    }
};