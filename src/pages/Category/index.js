import React, { useEffect, useState } from "react";
import ProductCategory from "../../stories/containers/ProductCategory/ProductCategory";
import { MyMain } from "./index.styles";
import { useLocation } from "react-router-dom";

const Category = () => {
    const [data, setData] = useState([]);
    const [categoryId, setCategoryId] = useState("");

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

 
    return (
        <>
            <MyMain>
                <ProductCategory />
            </MyMain>
        </>
    );
};

export default Category;
