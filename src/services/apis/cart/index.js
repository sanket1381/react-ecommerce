import axios from 'axios';
import { getRefreshToken } from '../auth/index';

const api = process.env.REACT_APP_BASE_URL_NODE;
const accessToken = localStorage.getItem('accessToken');

//Add to cart API
export const addCartData = async (data) => {
    const accessToken = localStorage.getItem('accessToken');
    const payload = {
        userId: data.userId,
        guestUserId: data.guestUserId,
        productId: data.productId,
        quantity: data.quanity,
        productVariantId: data.productVariantId,
    }
    try {
        const response = await axios.post(`${api}/cart/add`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
        if (response) {
            if (accessToken) {
                return response
            } else {
                const accessToken = response.data.result.accessToken;
                const refreshToken = response.data.result.refreshToken;
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);
                if (accessToken) {
                    return response
                }
            }
        }
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};

//update cart API
export const UpdateCartData = async (data) => {
    const payload = {
        productVariantId: data.productVariantId,
        quantity: data.quanity,
    }
    try {
        const response = await axios.put(`${api}/cart/update/${data.cart_id}`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};

//Get Cart List API
export const getCartList = async () => {
    try {
        const response = await axios.post(`${api}/cart/list`, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};

//Get User Cart API
export const getUserCartData = async (id) => {
    try {
        const response = await axios.get(`${api}/cart/${id}`, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};

//Get Guest User cart API
export const getguestUserCartData = async (id) => {
    try {
        const response = await axios.get(`${api}/cart/guestUser/${id}`);
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};

//Delete Cart API
export const deleteProductVariant = async (data) => {
    try {
        const response = await axios.delete(`${api}/cart/update/${data.cart_id}`, { headers: { Authorization: `Bearer ${accessToken}` } });
        return "product variant deleted successfully";
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};

//update Guest User Cart API
export const updateloggrduserCart = async (guestUserId, token) => {
    const payload = {
        userId: token,
    }
    try {
        const response = await axios.post(`${api}/cart/guestUser/${guestUserId}`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};