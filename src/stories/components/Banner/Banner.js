import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Image, Image1 } from "./index.styles";

function Banner(props) {
    return (
        < >

            {
                props.imagepath.map((ele, index) => {
                    return (
                        <>
                            <Image>
                                <img width={"265px"} height={"215px"} src={ele[0]} alt={'product'} />
                            </Image>
                            <Image1>
                                <img width={"614px"} height={"423px"} src={props.imagepath} />
                            </Image1>
                        </>
                    )
                })


            }
        </>
    );
}

Banner.propTypes = {
    bgcolor: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Banner;
