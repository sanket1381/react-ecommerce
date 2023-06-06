import React, { useContext, useEffect, useState } from "react";
import { MyThankYou, OrderList, useStyles } from "./index.styles";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CartContext } from "../../../context/cart";
import { getOrderDetails} from "../../../services/apis/order";
import { useLocation } from "react-router-dom";
import LoaderCartElement from "../../../components/loader/LoaderCartElement";
import { Helmet } from "react-helmet";

function ThankYou_c(props) {
    const classes = useStyles()
    //create states
    const [orderItems, setOrderItems] = useState([])
    const [totalPrice, setTotalPrice] = useState('');
    const [totalPackageCost, setTotalPackageCost] = useState('');
    const [uniqueOrderId, setUniqueOrderId] = useState('')
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(true);
    const { cartState, cartDispatch } = useContext(CartContext);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const uniqueOrderId = searchParams.get("uniqueOrderId");
        setUniqueOrderId(uniqueOrderId);
    }, [location, uniqueOrderId]);
    //get order details API
    useEffect(() => {
        const fetchData = async () => {
            if (uniqueOrderId) {
                const ordersDeatails = await getOrderDetails(uniqueOrderId);
                const token = localStorage.getItem("authToken");
                cartDispatch.fetchData(token);

                setOrderItems(ordersDeatails.data.result);
                setLoading(false);
                const productVariantTotalPrice = ordersDeatails.data.result.map((ele) => ele.totalPrice);
                const totalPrice = productVariantTotalPrice.reduce((accumulator, currentValue) => accumulator + currentValue);
                setTotalPrice(totalPrice);
                const productVariantTotalweight = ordersDeatails.data.result.map((ele) => (ele.productVariantDetails.productVariantId.packageWeightPrice) * (ele.productVariantDetails.quantity));
                const totalweightcost = productVariantTotalweight.reduce((accumulator, currentValue) => accumulator + currentValue);
                setTotalPackageCost(totalweightcost);

                const uniqueStatus = ordersDeatails.data.result.map((data) => data.status);
                
                const uniqueStatusSet = new Set(uniqueStatus);
                
                const uniqueStatusString = Array.from(uniqueStatusSet).join(", ");
                setStatus(uniqueStatusString);
                
            }
        };
        fetchData().catch(console.error);
    }, [uniqueOrderId]);

    return (
        <>
            <Helmet>
                <title>Art & Craft : Thank you</title>
                <meta
                    name="description"
                    content="Art & Craft attractive products"
                />
                <meta
                    name="keywords"
                    content="Art, Craft, Craftmegastore"
                />
            </Helmet>
            {orderItems.map((data, index) => {
                return (
                    data.status === 2 ?
                        <MyThankYou {...props} onClick={props.onClick}>
                            <div className={classes.thankText}>
                                <CheckCircleIcon sx={{ color: '#2AC957', fontSize: '22px' }} />Thank you for your order
                            </div>
                            <OrderList elevation={5} {...props} onClick={props.onClick}>
                                <div className={classes.orderListhead}>
                                    <div className={classes.orderListhead1}>
                                        <div className={classes.estimatedTltle}>Estimated Delievery</div>
                                    </div>
                                    <div className={classes.estimatedTltle}>Invoice</div>
                                </div>
                                <div>
                                    {loading ? (
                                        <div><LoaderCartElement /></div>
                                    ) : orderItems?.length > 0 ? (
                                        orderItems.map((data, index) => {
                                            return (
                                                <div className={classes.cartList} key={index}>

                                                    <div className={classes.imageparent}>
                                                        <img
                                                            className={classes.cartImg}
                                                            src={data.productId.images && data.productId.images.length > 0 ? data.productId.images[0] : '/defaultimage.png'}
                                                        />
                                                    </div>
                                                    <div className={classes.cartdeletes}>
                                                        {data.productId.description}
                                                    </div>
                                                    <div className={classes.middleCart}>
                                                        <div className={classes.cartTitle}>{data.productName} ({data.productVariantDetails.productVariantName})</div>
                                                        <div className={classes.priceperpiece}>Price : <CurrencyRupeeIcon sx={{ fontSize: '12px' }} /> {data.productVariantDetails.price}</div>

                                                        <div className="">
                                                            <div className={classes.priceperpiece}>Address : {data.userAddressId.address1},{data.userAddressId.city},{data.userAddressId.countryName}</div>
                                                            <div className={classes.priceperpiece} style={{ marginTop: '6px' }}>Status : {data.status == 1 ? "In Progress" : data.status == 2 ? "Confirm" : "Completed"}</div>

                                                        </div>
                                                    </div>
                                                    
                                                    <div className={classes.quantitydisplay}>
                                                        <div className={classes.alignStar}><CurrencyRupeeIcon sx={{ fontSize: '14px' }} /> {data.totalPrice}</div>
                                                        <div className={classes.qtyperpiece}>Qty : {data.productVariantDetails.quantity}</div>
                                                    </div>

                                                </div>
                                            )
                                        })) : "Your Order is empty"}
                                </div>
                            </OrderList>
                            <div className={classes.priceDetails}>
                                <div className={classes.priceDetailsTilte}>Price Detail</div>
                                <div className={classes.amountTitle}><div>Product Prices : </div><div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {totalPrice}</div></div>
                                <div className={classes.amountTitle}><div>Package Cost : </div><div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {totalPackageCost}</div></div>
                                <div className={classes.amountTitle}><div>Shipping charges : </div><div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> NA</div></div>
                                <div className={classes.amountTitle}><div>Total Amount : </div><div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {totalPrice + (totalPackageCost)}</div></div>
                            </div>
                        </MyThankYou>
                        : <div className={classes.ordererror}>Your Order not succesfully done</div>
                )
            })}


        </>

    );
}
export default ThankYou_c;


