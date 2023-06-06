import React, { useContext, useEffect, useState } from "react";
import { MyThankYou, OrderList, useStyles } from "./index.styles";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { CartContext } from "../../../context/cart";
import { getOrderList } from "../../../services/apis/order";
import LoaderCartElement from "../../../components/loader/LoaderCartElement";
import { Helmet } from "react-helmet";
function OrderList_c(props) {

    const classes = useStyles()
    //create states
    const { cartState } = useContext(CartContext);
    const [orderItems, setOrderItems] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    const userId = localStorage.getItem("authToken");
    const [page, setPage] = useState(0);
    const [selectedPage, setSelectedPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    const handlePageClick = (pageNum) => {
        setSelectedPage(pageNum);
        setPage(pageNum - 1);
    }

    //get order list API
    useEffect(() => {
        const fetchData = async () => {
            const start = page * 10;
            const ordersDetails = await getOrderList(userId, start, 10);
            setOrderItems(ordersDetails.data.result);
            setLoading(false);
            const productVariantTotalPrice = ordersDetails.data.result.map((ele) => ele.totalPrice);
            const totalPrice = productVariantTotalPrice.reduce((accumulator, currentValue) => accumulator + currentValue);
            setTotalPrice(totalPrice);

            const totalOrders = ordersDetails.data.total;
            const totalPages = Math.ceil(totalOrders / 10);
            setTotalPages(totalPages);

        };
        fetchData().catch(console.error);
    }, [page]);



    const showArrows = totalPages > 1;
    let pageNumbers = [];
    //Pagination
    if (showArrows) {
        const startPage = Math.max(selectedPage - 2, 1);
        const endPage = Math.min(startPage + 4, totalPages);
        pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    } else {
        pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    return (
        <>
            <Helmet>
                <title>Art & Craft : Order List</title>
                <meta
                    name="description"
                    content="Art & Craft attractive products"
                />
                <meta
                    name="keywords"
                    content="Art, Craft, Craftmegastore"
                />
            </Helmet>
            <MyThankYou {...props} onClick={props.onClick}>
                <OrderList elevation={5} {...props} onClick={props.onClick}>
                    <div className={classes.orderListhead}>
                        <div className={classes.orderListhead1}>
                        </div>
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
                                            <div className={classes.priceperpiece}>Price : <CurrencyRupeeIcon sx={{ fontSize: '14px' }} /> {data.productVariantDetails.price}</div>


                                            <div className="">
                                                <div className={classes.amount}>Address : {data.userAddressId.address1},{data.userAddressId.city},{data.userAddressId.countryName}</div>
                                                <div className={classes.alignStars}>Status : {data.status == 1 ? "In Progress" : data.status == 2 ? "Confirm" : "Completed"}</div>

                                            </div>
                                        </div>

                                        <div className={classes.quantitydisplay}>
                                            <div className={classes.alignStar}><CurrencyRupeeIcon sx={{ fontSize: '14px' }} /> {data.totalPrice}</div>
                                            <div className={classes.qtyperpiece}>Qty : {data.productVariantDetails.quantity}</div>
                                        </div>


                                    </div>
                                )
                            }))
                            : "Your Order is empty"}
                    </div>
                </OrderList>
                <div>
                    {showArrows && selectedPage > 1 &&
                        <button className={classes.pagination} onClick={() => handlePageClick(selectedPage - 1)}>
                            &lt;
                        </button>
                    }
                    {totalPages > 2 &&
                        pageNumbers.map((pageNum) => (
                            <button key={pageNum} className={`${classes.pagination} ${selectedPage === pageNum ? classes.selectedPage : ""}`} onClick={() => handlePageClick(pageNum)}>
                                {pageNum}
                            </button>
                        ))
                    }

                    {showArrows && selectedPage < totalPages &&
                        <button className={classes.pagination} onClick={() => handlePageClick(selectedPage + 1)}>
                            &gt;
                        </button>
                    }
                </div>
            </MyThankYou>
        </>

    );
}
export default OrderList_c;
