import axios from 'axios';
import { getRefreshToken } from '../auth/index';

const api = process.env.REACT_APP_BASE_URL_NODE;
const accessToken = localStorage.getItem('accessToken');

//create order API
export const createOrder = async (data) => {
    let payload;
    try {
        let accessToken = localStorage.getItem('accessToken');
         payload = {
            userId: data.userId,
            guestUserId: data.guestUserId,
            cartId: data.cartId,
            userAddressId: data.userAddressId,
            currency: data.currency
        }

        if (!accessToken) {
            await getRefreshToken();
            accessToken = localStorage.getItem('accessToken');
        }

        var response = await axios.post(`${api}/orders`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response;

    } catch (error) {
        if (error) {
            const tokenres = await getRefreshToken();
            localStorage.setItem('accessToken', tokenres.data.result.accessToken); 
            var response = await axios.post(`${api}/orders`, payload, { headers: { Authorization: `Bearer ${tokenres.data.result.accessToken}` } }); // call the API again with the new access token
            return response;
        }
    }
};

//update Order API
export const updateOrder = async (data) => {
    const payload = {
        Status: data.paymentStatus,
    }
    try {
        const response = await axios.put(`${api}/orders/${data.cart_id}`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};

//get order API
export const getOrderDetails = async (uniqueOrderId) => {
    const payload = {
        uniqueOrderId: uniqueOrderId,
    }
    try {
        const response = await axios.post(`${api}/orders/list`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};

//Get Order list API
export const getOrderList = async (userId, start, limit) => {
    const payload = {
        userId: userId
    }
    try {
        const response = await axios.post(`${api}/orders/list?start=${start}&limit=${limit}&count=1`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};

//Order FullFill API
export const orderFullFill = async (uniqueOrderId) => {
    let accessToken = localStorage.getItem('accessToken');
    const payload = {
        uniqueOrderId: uniqueOrderId,
    }
    try {
        const response = await axios.post(`${api}/orders/order-fulfillment`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response
    }
    catch (error) {
        if (error) {
            if (error === 'Unauthorized') {
                await getRefreshToken();
            }
        }
        return false;
    }
};
