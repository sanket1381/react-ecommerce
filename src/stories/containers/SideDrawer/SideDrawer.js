import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Link, useNavigate } from "react-router-dom";
import './sidedrawer.css';
import { Button } from "@mui/material";
import { getParentList } from "../../../services/apis/categorys";
import { useStyles } from "../Navbar/index.styles";
import '../Navbar/navbar.css'
export default function SideDrawer(props) {
    const classes = useStyles(props);

    const [state, setState] = React.useState({
        right: false,
    });
    const [category, setCategoryData] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useNavigate();

    React.useEffect(() => {
        props.childFunc.current = toggleDrawer("right", true)
    }, [])

    React.useEffect(() => {
        setState({ ...state, right: false });
    }, [location]);

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };
    //call API to get categories
    useEffect(() => {
        const fetchData = async () => {
            const categorydata = await getParentList();
            setCategoryData(categorydata.data.result);
        };
        fetchData().catch(console.error);
    }, []);

    //open toggle
    function toggleMenu() {
        var menu = document.getElementById("menus");
        if (menu.style.display === "none") {
            menu.style.display = "block";
            setIsMenuOpen(prevState => !prevState);
            document.addEventListener('click', closeMenu);
        } else {
            menu.style.display = "none";
            setIsMenuOpen(prevState => !prevState);
            document.removeEventListener('click', closeMenu);
        }

        function closeMenu(event) {
            if (!menu.contains(event.target) && event.target.id !== "category-btn") {
                menu.style.display = "none";
                setIsMenuOpen(false);
                document.removeEventListener('click', closeMenu);
            } else if (event.target.value !== "") {
                menu.style.display = "none";
                setIsMenuOpen(false);
                document.removeEventListener('click', closeMenu);
            }
        }
    }

   
    const list = (anchor) => (
        <div className="sidedrawer">
            <Box
                sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250, paddingLeft: '20px' }}
                role="presentation"
            >
                <List className="list">
                    <Button sx={{ background: '#FF00AE', fontSize: '14px', color: '#FFFFFF', fontWeight: '600', borderRadius: '50px', px: '10px', width: '150px',marginTop:'15px' }} id="category-btn" onClick={toggleMenu}>CATEGORY</Button>
                    <div id="menus" className="borderstyle">
                        <ul className="categorycolumns">
                            {category.map((categories, index) => {
                                return (
                                    <div key={index} className="categoryhead">
                                        <Link to={{
                                            pathname: `/category`,
                                            search: `categoryId=${categories.parentCategory.id}`
                                        }}>
                                            <ul className={classes.parentCategory}>{categories.parentCategory.name}</ul>
                                        </Link>
                                        {categories.subCategories.map((subCategory) => {
                                            return (
                                                <div key={subCategory.id}>
                                                    <Link to={{
                                                        pathname: `/products`,
                                                        search: `categoryId=${subCategory.id}`
                                                    }}>
                                                        <li>
                                                            {subCategory.name}
                                                        </li>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                    <Link to="/aboutus">
                        <Button sx={{ background: '#FF00AE', fontSize: '14px', color: '#FFFFFF', fontWeight: '600', borderRadius: '50px', px: '10px', my: '20px', width: '150px' }}>ABOUT US</Button>
                    </Link>
                    <Link to="/contact">
                        <Button sx={{ background: '#FF00AE', fontSize: '14px', color: '#FFFFFF', fontWeight: '600', borderRadius: '50px', marginRight: '15px', px: '10px', width: '150px' }}>CONTACT</Button>
                    </Link>
                </List>
            </Box>
        </div>
    );

    return (
        <div className="sidedrawer">
            {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        PaperProps={{
                            style: {
                                top: "75px",
                                bottom: "200px",
                                width: '300px'
                            }
                        }}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
