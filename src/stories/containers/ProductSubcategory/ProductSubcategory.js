import React from "react";
import PropTypes from "prop-types";
import { MyBanner } from "./index.styles";
import Grid1 from "../../components/Grid/Grid1";

function ProductSubcategory(props) {
  return (
    <MyBanner>
      <Grid1 data={props.data} />
    </MyBanner>
  );
}

ProductSubcategory.propTypes = {
  bgcolor: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default ProductSubcategory;
