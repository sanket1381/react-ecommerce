import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MysaleBanner } from "./index.styles";

function SaleBanner(props) {
  return (
    <MysaleBanner {...props} onClick={props.onClick}>
      <div className="mobile">mobile sale banner</div>
      <div className="desktop">desktop sale banner</div>
    </MysaleBanner>
  );
}

SaleBanner.propTypes = {
  bgcolor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default SaleBanner;
