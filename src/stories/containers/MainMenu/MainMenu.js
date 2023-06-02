import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MyMainMenu } from "./index.styles";
import Grid1 from "../../components/Grid/Grid1";

function MainMenu(props) {

    return (
        <MyMainMenu {...props} onClick={props.onClick} >
            <Grid1 data={props.data}
            />
        </MyMainMenu>
    );
}

MainMenu.propTypes = {
    bgcolor: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default MainMenu;
