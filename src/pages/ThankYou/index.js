import React, { useEffect } from "react";
import ThankYou_c from "../../stories/containers/Thankyou/ThankYou_c";

const ThankYou = () => {
 useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <ThankYou_c label="checkout" />
    </>
  );
};

export default ThankYou;
