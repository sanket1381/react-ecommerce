import React, { useEffect, useContext, useState } from "react";
import Cart_c from "../../stories/containers/Cart/Cart_c";
import { UserContext } from "../../context/user";
import { CartContext } from "../../context/cart";
import { AppContext } from "../../context/app";
import { useStyles } from "./index.styles";
import { Helmet } from "react-helmet";
import SEO from "../../helemet-seo.config";

const Cart = () => {

    const { userState } = useContext(UserContext);
    const { appState } = useContext(AppContext);
    const { cartState, cartDispatch } = useContext(CartContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const classes = useStyles()


    return (
        <div className={classes.desktopwidth}>
            <Helmet>
                <title>{SEO.cart.title}</title>
                <meta
                    name="description"
                    content={SEO.cart.description}
                />
                <meta
                    name="keywords"
                    content={SEO.keywords}
                />
                <link rel="canonical" href={`${SEO.cart.canonical.api}/cart`} />
                <meta property="og:title" content={SEO.cart.title} />
                <meta property="og:description" content={SEO.cart.description} />
                <meta property="og:image" content={SEO.cart.image} />
                <meta property="og:url" content={`${SEO.cart.canonical.api}/cart`} />
            </Helmet>
            <Cart_c />
        </div>
    );
};

export default Cart;
