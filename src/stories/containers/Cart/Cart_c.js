import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { MyCart, MyMobileCart, Item, MyCartParent, useStyles } from "./index.styles";
import { Button, Grid, Paper, Dialog, DialogContent, DialogTitle } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import Button1 from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteIcon from '@mui/icons-material/Delete';
import { addCartData, deleteProductVariant, getUserCartData, UpdateCartData } from "../../../services/apis/cart";
import { CartContext } from "../../../context/cart";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { styled } from '@mui/material/styles';
import LoaderCartElement from "../../../components/loader/LoaderCartElement";
import { Helmet } from "react-helmet";
import MenuIcon from '@mui/icons-material/Menu';

function Cart_c(props) {
    const classes = useStyles()
    const childFunc = useRef();
    const userId = localStorage.getItem("authToken");
    const [cartData, setCartData] = useState([]);
    const [totalPrice, setTotalPrice] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { cartState, cartDispatch } = useContext(CartContext);
    const UpdateAddCart = (productId, productVariantId, qty) => {
        cartDispatch.UpdateAddCart(productId, productVariantId, qty);
    };
    const UpdateremoveCart = (productId, productVariantId, qty) => {
        cartDispatch.UpdateremoveCart(productId, productVariantId, qty);
    };
    const handleDeleteCart = (productId) => {
        cartDispatch.handleDeleteCart(productId);
    };

    const handlecheckout = () => {
        const cartData = cartState.cartData;
        for (let i = 0; i < cartData.length; i++) {
            if (cartData[i].inventoryQuantity < 1) {
                setError("Product in your cart is out of stock");
                return;
            }
        }
        navigate('/checkout');
    }
    console.log(cartState.loading);
    return (
        <>

            {error &&
                <Dialog open={true} onClose={() => setError("")}>
                    <DialogTitle><ErrorIcon sx={{ marginLeft: '45%', color: 'red', fontSize: '32px' }} /></DialogTitle>
                    <DialogContent sx={{ fontWeight: '700', fontSize: '22px' }}>{error}</DialogContent>
                </Dialog>
            }
            <div className="mobile" >

                <Grid className="mobile" sx={{ width: '100%', position: 'fixed', bottom: '0px', padding: '0px' }}>
                    {cartState.cartData?.length > 0 ? (
                        <button className={classes.checkoutBtn} onClick={handlecheckout}><MenuIcon /> Checkout</button>

                    ) :
                        ''
                    }
                </Grid>

            </div>
            <MyCartParent>
                {cartState.cartData?.length > 0 ? (

                    <div className="mobile">
                        <Item><div>Sub Total :</div><div className={classes.currancy}><CurrencyRupeeIcon sx={{ fontSize: '18px' }} /> {cartState.totalPrice}</div></Item>
                    </div>
                ) : ''}
                <div className="desktop">
                    {cartState.cartData?.length > 0 ? (
                        <div className={classes.cartHeader}>
                            <Item sx={{ mt: '30px' }}><div>Sub Total:</div><div className={classes.currancy}><CurrencyRupeeIcon sx={{ fontSize: '18px' }} /> {cartState.totalPrice}</div></Item>
                            <div className="desktop">

                                <button className={classes.checkoutBtn} onClick={handlecheckout}>Checkout</button>

                            </div>
                        </div>
                    ) :
                        ''
                    }
                </div>

                <div elevation={5} {...props} onClick={props.onClick}>
                    {cartState.cartData?.length > 0 ?
                        <div className={classes.tabledisplay}>
                            <div className={classes.cartListheadings}>
                                <div className={classes.cartImageparent}>Image</div>
                                <div className={classes.cartdescparent}>Product Description</div>
                                <div className={classes.cartdeletes}>Date</div>
                                <div className={classes.cartquantparent}>Product</div>
                                <div className={classes.cartdelete}>Subtotal</div>
                            </div>
                        </div>
                        : ''}
                    {cartState.cartData?.length > 0 ?
                        (
                            cartState.cartData.map((data) => {
                                const date = new Date(data.createdAt);
                                const month = date.toLocaleString('default', { month: 'long' });
                                const day = date.getDate();
                                const year = date.getFullYear();
                                const formattedDate = `${month} ${day}, ${year}`;

                                return (
                                    <div className={classes.cartListborder} key={data.productVariantId.name}>
                                        <div className={classes.cartList}>
                                            <div className={classes.cartImageparent}>
                                                <img
                                                    className={classes.cartImg}
                                                    src={data.productId.images && data.productId.images.length > 0 ? data.productId.images[0] : '/defaultimage.png'}
                                                />
                                            </div>
                                            <div className={classes.cartdescparent}>
                                                {data.productId.description}
                                            </div>
                                            <div className={classes.cartdeletes}>
                                                {formattedDate}
                                            </div>
                                            <div className={classes.cartquantparent}>
                                                <div className={classes.cartTitle}>{data.productId.name} ({data.productVariantId.name})</div>
                                                <div className={classes.priceperpiece}>Price : <CurrencyRupeeIcon sx={{ fontSize: '12px' }} /> {data.productVariantId.price}</div>


                                                <div className={classes.productVariants}>
                                                    <div className={classes.middleCart}>
                                                        <div className={classes.alignSizeQuantity}>
                                                            {data.productVariantId.attribute?.slice(0, 2).map((attribute, index, arr) => {
                                                                return (
                                                                    <div className={classes.cartattribute} key={attribute.name}>
                                                                        <div className={classes.varablesTitle}>{attribute.name} : </div>
                                                                        <div>{attribute.values}<span style={{ marginRight: '5px' }}>{index < arr.length - 1 && arr.length > 1 ? ',' : ''}</span></div>
                                                                    </div>
                                                                )
                                                            })}

                                                        </div>
                                                        <div className={classes.priceperpiece}>Net Weight : {(data.productVariantId.weight.netWeight * data.qty)}</div>
                                                        <div className={classes.priceperpiece}>Package Weight : {(data.productVariantId.weight.packageWeight * data.qty)}</div>
                                                        <div className={classes.Quantity}>
                                                            <div className={classes.varablesTitle}>Quantity : </div>
                                                            <div className={classes.quantitySelector}>
                                                                {data.qty <= 1 ? " "
                                                                    :
                                                                    <button className={classes.quantityButton1} onClick={() => UpdateremoveCart(data._id, data.productVariantId._id, data.qty)}>-</button>
                                                                }
                                                                <span className={classes.quantityNumber}>{data.qty}</span>
                                                                <button className={classes.quantityButton2} onClick={() => UpdateAddCart(data._id, data.productVariantId._id, data.qty)}>+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className={classes.cartdelete}>
                                                <div className="mobile">
                                                    <div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {data.productVariantId.price * data.qty}</div>
                                                </div>
                                                <div className="desktop">
                                                    <div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '22px' }} /> {data.productVariantId.price * data.qty}</div>
                                                </div>
                                                
                                                <div className={classes.alignStars} style={{ cursor: 'pointer' }}>
                                                    <DeleteIcon onClick={() => handleDeleteCart(data._id)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div>{data.inventoryQuantity < 1 ?
                                            <div className={classes.outofstock}>! Out of Stock</div>
                                            : ''}
                                        </div>
                                    </div>
                                )
                            })
                        ) : cartState.loading ? (
                            <div><LoaderCartElement /></div>
                        ) : (
                            <div className={classes.emptycart}>Cart is empty</div>
                        )
                    }

                </div>
                <div className="mobile">
                    {cartState.cartData?.length > 0 ?

                        <Item><div>Sub Total  : </div><div className={classes.currancy}><CurrencyRupeeIcon sx={{ fontSize: '18px' }} /> {cartState.totalPrice}</div></Item>
                        : ''}

                </div>
                <div className="desktop">
                    <div className={classes.cartHeader}>
                        {cartState.cartData?.length > 0 ?
                            <Item><div>Sub Total  : </div><div className={classes.currancy}><CurrencyRupeeIcon sx={{ fontSize: '18px' }} /> {cartState.totalPrice}</div></Item>
                            : ''}
                        <div className="desktop">
                            {cartState.cartData?.length > 0 ? (
                                <button className={classes.checkoutBtn} onClick={handlecheckout}>Checkout</button>

                            ) :
                                ''
                            }
                        </div>
                    </div>
                </div>
            </MyCartParent>
        </>
    );
}

Cart_c.propTypes = {
    bgcolor: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Cart_c;
