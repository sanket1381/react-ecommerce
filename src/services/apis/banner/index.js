import axios from 'axios';
import { productsData, ProductData } from '../../dummyData/Menu';
import {getRefreshToken} from '../auth/index';
const api = process.env.REACT_APP_BASE_URL_NODE;

//Get Banner API
export const getBanner = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    try {
        const response = await axios.post(`${api}/banner/list`,{headers: { Authorization: `Bearer ${accessToken}`}});
        return response 
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token')
        {
            await getRefreshToken();            
        }

    }
};