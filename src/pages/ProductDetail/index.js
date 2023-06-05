import React, { useEffect, useState, useContext } from "react";
import ProductDetails_c from "../../stories/containers/ProductDetails_c/ProductDetails";
import { useParams } from 'react-router-dom';

import { CartContext } from "../../context/cart";
import * as actions from "../../actionTypes";
import { addCartData } from "../../services/apis/cart";

const ProductDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <ProductDetails_c />
        </>
    );
};

export default ProductDetails;
