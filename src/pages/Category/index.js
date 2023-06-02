import React, { useEffect, useState } from "react";
import ProductSubcategory from "../../stories/containers/ProductSubcategory/ProductSubcategory";
import { getSubCategoryData } from "../../services/apis/menu";
import { getCategorysList } from "../../services/apis/categorys";
import SideMenu from "../../stories/containers/SideMenu/SideMenu";
import ProductCategory from "../../stories/containers/ProductCategory/ProductCategory";
import { MyMain } from "./index.styles";
import { useParams } from "react-router-dom";
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
