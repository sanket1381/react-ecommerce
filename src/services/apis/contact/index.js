import axios from 'axios';
import { productsData, ProductData } from '../../dummyData/Menu';
import { getRefreshToken } from '../auth/index';
import jwt_decode from 'jwt-decode';

const api = process.env.REACT_APP_BASE_URL_NODE;

//Send email API
export const contact = async (data) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const payload = {
        name: data.name.data,
        phone: data.phone.data,
        emailId: data.emailId.data,
        subject: data.subject.data,
    }
    try {
        const response = await axios.post(`${api}/email/sendEmail`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};

