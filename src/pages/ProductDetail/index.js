import React, { useEffect, useState, useContext } from "react";
import ProductDetails_c from "../../stories/containers/ProductDetails_c/ProductDetails";

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
