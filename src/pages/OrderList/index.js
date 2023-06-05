import React, { useEffect } from "react";
import OrderList_c from "../../stories/containers/OrderList/OrderList_c";

const OrderList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <OrderList_c label="checkout" />
        </>
    );
};

export default OrderList;
