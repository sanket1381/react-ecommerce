import React, { useState } from "react";
import PropTypes from "prop-types";
import { MySideMenu, useStyles } from "./index.styles";
import { Box, Slider } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import './sidemenu.css'
function SideMenu(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 20]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [selectedValues, setSelectedValues] = useState([]);
    const uniqueAttributes = {};
    return (
<></>
    );
}


export default SideMenu;
