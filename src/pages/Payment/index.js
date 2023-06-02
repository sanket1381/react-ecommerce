import React, { useEffect } from "react";
import Payments_c from "../../stories/containers/Payment/Payments_c";

const Payment = () => {
 useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Payments_c label="checkout" />
    </>
  );
};

export default Payment;
