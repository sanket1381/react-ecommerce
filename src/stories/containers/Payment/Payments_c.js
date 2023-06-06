import React, { useState, useEffect, useContext } from "react";
import { MyPayment, useStyles } from "./index.styles";
import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link, useLocation, useNavigate } from "react-router-dom";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { getLoggedUserData, getUserAddressData } from "../../../services/apis/auth";
import { CartContext } from "../../../context/cart";
import ErrorIcon from '@mui/icons-material/Error';
import { getOrderDetails, orderFullFill, updateOrder } from "../../../services/apis/order";
import LoaderCartElement from "../../../components/loader/LoaderCartElement";
import { Helmet } from "react-helmet";
function Payments_c(props) {

    const classes = useStyles();
    const userId = localStorage.getItem("authToken");
    const guestUserId = localStorage.getItem("guestUserId");
    //create states
    const [method, setMethod] = useState({
        field: "method",
        data: "",
        isChanged: false,
    });

    const [emailId, setEmailId] = useState({
        field: "emailId",
        data: "",
        isChanged: false,
    });
    const [address1, setAddress1] = useState({
        field: "address1",
        data: "",
        isChanged: false,
    });
    const [phone, setPhone] = useState({
        field: "phone",
        data: "",
        isChanged: false,
    });
    const [loading, setLoading] = useState(true);

    const [orderItems, setOrderItems] = useState([])
    const [totalPrice, setTotalPrice] = useState();
    const [productPackageCost, setProductPackageCost] = useState('')
    const [uniqueOrderId, setUniqueOrderId] = useState('')
    const location = useLocation();
    const { cartDispatch } = useContext(CartContext);
    const [error, setError] = useState("")
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const uniqueOrderId = searchParams.get("uniqueOrderId");
        setUniqueOrderId(uniqueOrderId);
    }, [location, uniqueOrderId]);

    //get login User data
    useEffect(() => {
        const fetchData = async () => {
            if (userId) {
                const fielddata = await getLoggedUserData(userId);
                setEmailId({ ...emailId, data: fielddata.data.result?.email });
            }
        };
        fetchData().catch(console.error);
    }, []);

    //get userAddress API
    useEffect(() => {
        const fetchData = async () => {
            if (userId) {
                const fielddata = await getUserAddressData(userId);
                setAddress1({ ...address1, data: fielddata.data.result?.address1 });
                setPhone({ ...phone, data: fielddata.data.result?.phone });
            }
        };
        fetchData().catch(console.error);
    }, []);

    //Get Order detail
    useEffect(() => {
        const fetchData = async () => {
            if (uniqueOrderId) {
                const ordersDeatails = await getOrderDetails(uniqueOrderId);
                setOrderItems(ordersDeatails.data.result)
                setLoading(false);
                const productVariantTotalPrice = ordersDeatails.data.result.map((ele) => ele.totalPrice);
                const totalPrice = productVariantTotalPrice.reduce((accumulator, currentValue) => accumulator + currentValue);
                setTotalPrice(totalPrice);
                const totalWeight = ordersDeatails.data.result.map((products) => (products.productVariantDetails.productVariantId.packageWeightPrice) * (products.productVariantDetails.quantity));
                const totalWeightqty = totalWeight.reduce((acc, cur) => acc + cur, 0);
                setProductPackageCost(totalWeightqty);
            };
        }
        fetchData().catch(console.error);
    }, [uniqueOrderId]);

    const navigate = useNavigate();
    //send response to OrderFullfill 
    const handleOrderFullFill = async (e) => {
        e.preventDefault();
        if (uniqueOrderId) {
            const response = {
                uniqueOrderId: uniqueOrderId,
                payment: ''
            }
            const OrderresData = response;
            const Orderres = await orderFullFill(OrderresData);
            if (Orderres !== "Product stock not available") {
                cartDispatch.fetchData(userId);
                localStorage.removeItem('cartCount');
                localStorage.removeItem('cartList');
                navigate(`/thankyou?uniqueOrderId=${uniqueOrderId}`);
            } else if (Orderres == "Product stock not available") {
                setError("Product stock not available");
            }
        }
    };

    return (
        <>
            {error &&
                <Dialog open={true} onClose={() => setError("")}>
                    <DialogTitle><ErrorIcon sx={{ marginLeft: '45%', color: 'red', fontSize: '32px' }} /></DialogTitle>
                    <DialogContent sx={{ fontWeight: '700', fontSize: '22px' }}>{error}</DialogContent>
                </Dialog>
            }
            <Helmet>
                <title>Art & Craft : Payment</title>
                <meta
                    name="description"
                    content="Art & Craft attractive products"
                />
                <meta
                    name="keywords"
                    content="Art, Craft, Craftmegastore"
                />
            </Helmet>
            <MyPayment {...props} onClick={props.onClick}>
                <div className={classes.display}>
                    <div className={classes.userDetails}>
                        <div className={classes.checkouthead}>
                            <div className={classes.contactTitle}>Contact Information</div>
                        </div>
                        <div className={classes.inputFields}>
                            <TextField
                                label="Email Id"
                                name="Email Id"
                                autoFocus
                                sx={{ minWidth: '100%' }}
                                value={emailId.data}
                                type="text"
                                onChange={(e) =>
                                    setEmailId({
                                        ...emailId,
                                        data: e.target.value,
                                        isChanged: true,
                                    })
                                }
                            />
                        </div>
                        <div className={classes.inputFields}>
                            <TextField
                                required
                                label="Phone No"
                                name="Phone No"
                                autoFocus
                                sx={{ minWidth: '100%' }}
                                value={phone.data}
                                type="number"
                                onChange={(e) =>
                                    setPhone({
                                        ...phone,
                                        data: e.target.value,
                                        isChanged: true,
                                    })
                                }
                            />
                        </div>
                        <div className={classes.inputFields}>
                            <TextField
                                required
                                label="Ship To"
                                name="Ship To"
                                autoFocus
                                sx={{ minWidth: '100%' }}
                                value={address1.data}
                                type="text"
                                onChange={(e) =>
                                    setAddress1({
                                        ...address1,
                                        data: e.target.value,
                                        isChanged: true,
                                    })
                                }
                            />
                        </div>
                        <div className={classes.shippingtitle}>Shipping Service</div>

                        <div className={classes.inputFields}>
                            <TextField
                                required
                                label="Estimated Time"
                                name="Estimated Time"
                                autoFocus
                                sx={{ minWidth: '100%' }}
                            />
                        </div>
                    </div>

                    <div className={classes.cartParent}>
                        {loading ? (
                            <div><LoaderCartElement /></div>
                        ) : orderItems?.length > 0 ? (
                            orderItems.map((data) => {
                                return (
                                    <div className={classes.cartDetails} key={data.productVariantDetails.productVariantName}>
                                        <div className={classes.cartList}>
                                            <div>
                                                <img
                                                    className={classes.cartImg}
                                                    src={data.productId.images && data.productId.images.length > 0 ? data.productId.images[0] : '/defaultimage.png'}
                                                />
                                            </div>
                                            <div className={classes.middleCart}>
                                                <div>
                                                    <div className={classes.cartTitle}>{data.productName} ({data.productVariantDetails.productVariantName})</div>
                                                    <div className={classes.priceperpiece}>Net Weight : {(data.productVariantDetails.productVariantId.weight.netWeight * data.productVariantDetails.quantity)}</div>
                                                    <div className={classes.priceperpiece}>Package Weight : {(data.productVariantDetails.productVariantId.weight.packageWeight * data.productVariantDetails.quantity)}</div>
                                                </div>
                                            </div>


                                            <div className={classes.quantitydisplay}>
                                                <div className={classes.alignStar}><CurrencyRupeeIcon sx={{ fontSize: '14px' }} /> {data.totalPrice}</div>
                                                <div className={classes.qtyperpiece}>Qty : {data.productVariantDetails.quantity}</div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })) : "Order is empty"}
                        <div className={classes.priceDetails}>
                            <div className={classes.priceDetailsTilte}>Price Detail</div>

                            <div className={classes.amountTitle}><div>Product Prices : </div><div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {totalPrice}</div></div>
                            <div className={classes.amountTitle}><div>Package Cost : </div><div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {productPackageCost}</div></div>
                            <div className={classes.amountTitle}><div>Shipping charges : </div><div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> NA</div></div>
                            <div className={classes.amountTitle}><div>Total Amount : </div><div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {totalPrice + (productPackageCost)}</div></div>
                        </div>
                        <div className={classes.continueBtn}>
                            <Link to={"/payment"}>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={classes.DesktopView}>
                    <div className={classes.shippingtitle}>Payment Details</div>
                    <div className={classes.paymentLayout}>
                        <div className={classes.selectCard}>
                            <div className={classes.inputFields}>
                                <select
                                    style={{ minWidth: '100%', minHeight: '45px' }}
                                >
                                    <option value="creditcart">Credit Card</option>
                                </select>
                                <div className="desktop">
                                    <div className={classes.netBtn}>
                                        <select
                                            style={{ minWidth: '100%', minHeight: '50px', background: '#F1F1F1' }}
                                        >
                                            <option value="debitcart">Debit Card</option>

                                        </select>

                                        <select
                                            style={{ minWidth: '100%', minHeight: '50px', background: '#F1F1F1' }}
                                            onChange={(e) => setMethod({ ...method, data: e.target.value })}
                                        >
                                            <option value="Netbanking">Netbanking</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.cardData}>
                            <div className={classes.inputFields}>
                                <TextField
                                    required
                                    label="Card Number"
                                    name="Card Number"
                                    autoFocus
                                    sx={{ minWidth: '100%' }}
                                />
                            </div>
                            <div className={classes.multipleInputsRow}>
                                <TextField placeholder="Expiry Year"></TextField>
                                <TextField placeholder="Expiry Month"></TextField>
                            </div>
                            <div className={classes.inputFields}>
                                <TextField
                                    required
                                    label="CVV"
                                    name="CVV"
                                    autoFocus
                                    sx={{ minWidth: '100%' }}
                                />
                            </div>
                            <div className={classes.saveDetails}>
                                <CheckBoxIcon />Save card details
                            </div>
                            <div className={classes.payable}><span className={classes.payable}><CurrencyRupeeIcon sx={{ fontSize: '22px' }} /> {totalPrice} </span><span className={classes.payabletext}>(Total payable amount)</span></div>
                            <div className="desktop">
                                <div>
                                    <button className={classes.payBtn} onClick={handleOrderFullFill}>Pay Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.mobileview}>
                    <div className={classes.shippingtitle}>Payment Details</div>
                    <div className={classes.paymentLayout}>
                        <div className={classes.selectCard}>
                            <div className={classes.inputFields}>
                                <select
                                    style={{ minWidth: '100%', minHeight: '45px' }}
                                >

                                    <option value="creditCard">Credit Card</option>
                                    <option value="DebitCard">Debit Card</option>
                                    <option value="Netbanking">Netbanking</option>

                                </select>
                                <div className="desktop">
                                    <div className={classes.netBtn}>
                                        <select
                                            style={{ minWidth: '100%', minHeight: '50px', background: '#F1F1F1' }}
                                        >
                                            <option value="DebitCard">Debit Card</option>
                                        </select>

                                        <select
                                            style={{ minWidth: '100%', minHeight: '50px', background: '#F1F1F1' }}
                                            onChange={(e) => setMethod({ ...method, data: e.target.value })}
                                        >
                                            <option value="Netbanking">Netbanking</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.cardData}>
                            <div className={classes.inputFields}>
                                <TextField
                                    required
                                    label="Card Number"
                                    name="Card Number"
                                    autoFocus
                                    sx={{ minWidth: '100%' }}
                                />
                            </div>
                            <div className={classes.multipleInputsRow}>
                                <TextField placeholder="Expiry Year"></TextField>
                                <TextField placeholder="Expiry Month"></TextField>
                            </div>
                            <div className={classes.inputFields}>
                                <TextField
                                    required
                                    label="CVV"
                                    name="CVV"
                                    autoFocus
                                    sx={{ minWidth: '100%' }}
                                />
                            </div>
                            <div className={classes.saveDetails}>
                                <CheckBoxIcon />Save card details
                            </div>
                            <div className={classes.payable}><span className={classes.payable}><CurrencyRupeeIcon sx={{ fontSize: '22px' }} /> {totalPrice} </span><span className={classes.payabletext}>(Total payable amount)</span></div>
                            <div>
                                <div>
                                    <button className={classes.payBtn} onClick={handleOrderFullFill}>Pay Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </MyPayment>

        </>

    );
}
export default Payments_c;
