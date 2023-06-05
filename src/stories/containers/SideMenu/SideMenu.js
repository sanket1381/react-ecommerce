import React, { useState } from "react";
import { useStyles } from "./index.styles";
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
