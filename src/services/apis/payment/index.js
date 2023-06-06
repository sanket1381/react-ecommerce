import axios from "axios";
const api = process.env.REACT_APP_BASE_URL_NODE;

let accessToken = localStorage.getItem('accessToken');

//payment API
export const paymentgetway = async (req) => {
    try {
        const payload = {
            order_id: req.order_id,
            currency: "INR",
            amount: req.amount,
            billing_name: req.billing_name,
            billing_address: req.billing_address,
            billing_city: req.billing_city,
            billing_state: req.billing_state,
            billing_zip: req.billing_zip,
            billing_country: req.billing_country,
            billing_tel: req.billing_tel,
            billing_email: req.billing_email,
        }
        var response = await axios.post(`${api}/payment/pay`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
        return response;
    }
    catch (error) {
        if (error) {
        }
    }
};