import React, { useEffect, useState } from "react";
import { getProductsList } from "../../services/apis/products";
import Products_c from "../../stories/containers/Products/Products_c";

const Products = () => {
    const [data, setData] = useState([]);
    //API call to get Product list and set to state
    useEffect(() => {
        const fetchData = async () => {
            const Productdata = await getProductsList();
            setData(Productdata.data.result);
        };

        fetchData().catch(console.error);
    }, []);

    return (
        <>
            <Products_c Product_data={data} />
        </>
    );
};

export default Products;
