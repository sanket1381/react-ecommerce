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
    // props.filterAttributes.forEach((attr) => {
    //     if (uniqueAttributes[attr.name]) {
    //         uniqueAttributes[attr.name].values = [...new Set([...uniqueAttributes[attr.name].values, ...attr.values])];
    //     } else {
    //         uniqueAttributes[attr.name] = attr;
    //     }
    // });
    return (
<></>
        // <MySideMenu {...props} onClick={props.onClick}>
        //     <div>
        //         {props.filtercategories.map((categories) => {
        //             return (
        //                 <>
        //                     <div className="categeorylinks">
        //                         <Link to={categories.url}>
        //                             <div className={classes.parentcategory}>
        //                                 {categories.name.split(' ')
        //                                     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        //                                     .join(' ')}
        //                             </div>
        //                         </Link>
        //                     </div>
        //                     {categories.child_cateegories.map((childcategories) => {
        //                         return (
        //                             <div className="categeorylinks">
        //                                 <Link to={childcategories.url}>
        //                                     <div className={classes.childcategory}>
        //                                         {childcategories.name.split(' ')
        //                                             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        //                                             .join(' ')}
        //                                     </div>
        //                                 </Link>
        //                             </div>
        //                         )
        //                     })}
        //                 </>

        //             )
        //         })}
        //     </div>

        //     <div>
        //         {props.filterAttributes.map((attr) => {
        //             const { name, values, data } = attr;
        //             return (
        //                 <div key={name} className={classes.singlefilter}>
        //                     <div className={classes.attributeName}>{name
        //                         .split(' ')
        //                         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        //                         .join(' ')}</div>
        //                     {values.map((value) => {
        //                         const isSelected = selectedValues.includes(value);
        //                         return (
        //                             <div className={classes.attributeValues}>
        //                                 <label key={value}>
        //                                     <input
        //                                         type="checkbox"
        //                                         checked={isSelected}
        //                                         onChange={() => {
        //                                             if (isSelected) {
        //                                                 setSelectedValues(selectedValues.filter(val => val !== value));
        //                                             } else {
        //                                                 setSelectedValues([...selectedValues, value]);
        //                                             }
        //                                         }}
        //                                     />
        //                                     {value}
        //                                 </label>
        //                             </div>
        //                         );
        //                     })}
        //                     {selectedValues.some(selected => values.includes(selected)) && <div>{data}</div>}
        //                 </div>
        //             );
        //         })}
        //     </div>




        //     {/* <div>
        //         <div className={classes.filterTitle}>
        //             FILTERS
        //         </div>
        //         <div className={classes.priceTitle}>
        //             Price
        //         </div>
        //         <Box className={classes.sliderWidth}>
        //             <Slider
        //                 getAriaLabel={() => 'Temperature range'}
        //                 value={value}
        //                 onChange={handleChange}
        //                 valueLabelDisplay="auto"
        //                 sx={{ color: '#000000' }}
        //             />
        //         </Box>
        //         <div className={classes.categoryTitle}>
        //             {props.label} <KeyboardArrowDownIcon />
        //         </div>
        //     </div> */}



        // </MySideMenu>
    );
}


export default SideMenu;
