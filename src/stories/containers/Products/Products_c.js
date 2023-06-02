import React from "react";
import PropTypes from "prop-types";
import { MyMain } from "./index.styles";
import SideMenu from "../SideMenu/SideMenu";
import ProductCategory from "../ProductCategory/ProductCategory";

function Products_c(props) {
  return (
    <MyMain {...props} onClick={props.onClick}>
      <SideMenu label={"side menu"} />
      <ProductCategory data={props.Product_data} />
    </MyMain>
  );
}

Products_c.propTypes = {
  bgcolor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Products_c;
