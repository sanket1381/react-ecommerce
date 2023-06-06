import React, { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import {
    MyNavbar,
    SearchIconWrapper,
    useStyles,
    Search,
    IconLink,
} from "./index.styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { useUserStatus } from "../../../hooks/useUserStatus";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import './navbar.css'
import { autoSuggestion, getParentList } from "../../../services/apis/categorys";
import { CartContext } from "../../../context/cart";
import Autosuggest from "react-autosuggest";
import { getLoggedUserData } from "../../../services/apis/auth";
import { commonData } from "./CommonDataContext";
import { Disclosure } from '@headlessui/react';
import CloseIcon from '@mui/icons-material/Close';
function Navbar(props) {
    const childFunc = useRef();
    const classes = useStyles(props);
    //define states
    const { cartState } = useContext(CartContext);
    const [category, setCategoryData] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [params, setParams] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [firstName, setFirstName] = useState({
        firstName: "company",
        data: "",
        isChanged: false,
    });
    const userSttus = useUserStatus();
    const navigate = useNavigate();
    const userId = localStorage.getItem("authToken")
    const cartCount = localStorage.getItem("cartCount")
    const location = useLocation();
    const [userStatus, setUserStatus] = useState({ isLogged: false, userName: '' });
    const [anchorEl, setAnchorEl] = useState(null);
    const [commonData1, setCommonData1] = React.useContext(commonData);

    const handleClick = () => {
        if (userSttus.isLogged) {
            localStorage.clear();
            navigate("/");
        } else {
            navigate("/login");

        }
    };
    //get loggedIn user Data
    useEffect(() => {
        const fetchData = async () => {
            if (userId) {
                const fielddata = await getLoggedUserData(userId);
                setFirstName({ ...firstName, data: fielddata.data.result?.firstName });
            };
        }
        fetchData().catch(console.error);
    }, [userId]);

    //get categories data
    useEffect(() => {
        const fetchData = async () => {
            const categorydata = await getParentList();
            setCategoryData(categorydata.data.result);
        };
        fetchData().catch(console.error);
    }, []);

    useEffect(() => {
        toggleMenu()
    }, [])

    //Autosuggestion API call
    useEffect(() => {
        const fetchData = async () => {
            const productdata = await autoSuggestion({ name: params });
            const data = productdata.data.result.map((suggestion) => ({
                name: suggestion.name,
                url: suggestion.url,
            }));
            setSuggestions(data);
        };

        fetchData().catch(console.error);
    }, [params]);

    function toggleMenu() {
        var menu = document.getElementById("menu");
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

    const renderSuggestionsContainer = ({ containerProps, children, query }) => {
        return (
            <div
                {...containerProps}
                className="suggestions-container"
            >
                {children}
            </div>
        );
    };
    const [autosuggestOpen, setAutosuggestOpen] = useState(false);

    const wrapperRef = useRef(null);
    const searchWrapperRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setAutosuggestOpen(false);
                setIsInputOpen(false);
            }
        };
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);

        };
    }, [wrapperRef]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
                setIsInputOpen(false);
            }
        };
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchWrapperRef]);

    useEffect(() => {
        setIsInputOpen(false);
        setAnchorEl(null);
    }, [location]);

    const [isInputOpen, setIsInputOpen] = useState(false);

    const handleSearchClick = () => {
        setIsInputOpen(!isInputOpen);
    }

    const navigation = [
        { name: 'CONTACT', href: '/contact', },
        { name: 'ABOUT US', href: '/aboutus', },
    ]
    let timeout
    const [openState, setOpenState] = useState(false)
    const buttonRef = useRef(null)
    const toggleMenus = (open) => {
        setOpenState((openState) => !openState)
        buttonRef?.current?.click()
    }

    const onHover = (open, action) => {
        if (
            (!open && !openState && action === "onMouseEnter") ||
            (open && openState && action === "onMouseLeave")
        ) {
            clearTimeout(timeout)
        }
    }

    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            event.stopPropagation()
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, []);

    const showHeader = (openHandle) => {
        setCommonData1({ open: openHandle })
    }

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggle = (event) => {
        setIsOpen(prevIsOpen => !prevIsOpen || !dropdownRef.current.contains(event.target));
    };

    const handleClickOutsides = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsides);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsides);
        };
    }, []);

    return (
        <MyNavbar>
            <div className={classes.desktopnav}>
                <div className={classes.navwidth}>
                    <Box container="true" className={classes.responsivenav} sx={{}}>
                        <Box className="desktop">
                            <Link to={"/"}>
                                <div className={classes.logo}>
                                    <img src="/title-logo.png" alt="" className={classes.titleLogo} />
                                    <img src="/infinity-logo.png" alt="" className={classes.infinityLogo} />
                                </div>
                            </Link>
                        </Box>
                        <Box className="mobile">
                            <Link to={"/"}>
                                <div className={classes.logo}>
                                    <img src="/title-logo.png" alt="" className={classes.titleLogo} />
                                    <img src="/infinity-logo.png" alt="" className={classes.infinityLogo} />
                                </div>
                            </Link>
                        </Box>
                        <Box>
                            <Grid className="desktop" sx={{ textAlign: 'right', mb: '10px' }}>
                                <div className={classes.root}>
                                    <Link to="/cart">
                                        <IconLink sx={{ mx: '22px' }}>
                                            <Badge badgeContent={cartCount >= 1 ? cartCount : ''} color={cartCount >= 1 ? "secondary" : "default"} invisible={cartCount < 1}>
                                                <ShoppingCartIcon />
                                            </Badge>
                                        </IconLink>
                                    </Link>

                                    <div className={classes.root}>
                                        <div className="desktop" style={{ zIndex: 10000 }}>
                                            {userSttus.isLogged ?
                                                <div className="dropdown" >
                                                    <div className="dropbtn">
                                                        <div onClick={handleToggle}>
                                                            {firstName.data.split(' ')
                                                                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                                                .join(' ')}
                                                        </div>

                                                    </div>
                                                    <div className="dropdown-content">
                                                        <Link to={'/orderlist'}>
                                                            Order List
                                                        </Link>
                                                        <div onClick={handleClick} >
                                                            Logout
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <button className={classes.loginBtn} onClick={handleClick}>Login</button>

                                            }

                                        </div>
                                    </div>

                                </div>
                            </Grid>
                            <Grid>
                                <Grid
                                    display={"flex"}
                                    justifyContent={"space-around"}
                                    alignItems={"center"}
                                >
                                    <Grid className="mobile">
                                        <div ref={searchWrapperRef}>
                                            <SearchIcon sx={{ color: '#FF00AE', mx: '10px' }} onClick={handleSearchClick} />
                                            {isInputOpen && (
                                                <div style={{ position: 'absolute', top: '78px', width: '100%', left: '0px', zIndex: '999', backgroundColor: 'white' }}>
                                                    <Search>
                                                        <Autosuggest
                                                            suggestions={suggestions}
                                                            onSuggestionsFetchRequested={() => { }}
                                                            onSuggestionsClearRequested={() => { }}
                                                            getSuggestionValue={(suggestion) => {
                                                                return suggestion.name;
                                                            }} renderSuggestion={(suggestion) => {
                                                                const capitalizedSuggestion = suggestion.name.charAt(0).toUpperCase() + suggestion.name.slice(1);
                                                                const url = suggestion.url;
                                                                return (
                                                                    <Link to={url}>
                                                                        <div>{capitalizedSuggestion}</div>
                                                                    </Link>
                                                                );
                                                            }}
                                                            inputProps={{
                                                                value: params,
                                                                placeholder: "Search for Products",
                                                                onChange: (event, { newValue }) => {
                                                                    setParams(newValue);
                                                                },
                                                                onFocus: (event) => setAutosuggestOpen(true),
                                                                onBlur: ((event) => (setAutosuggestOpen(false), setParams(""))),
                                                                style: {
                                                                    minWidth: "300px",
                                                                    minHeight: "35px",
                                                                    border: "0px",
                                                                    width: "100%",
                                                                    outline: "none",
                                                                    paddingLeft: '10px',
                                                                },
                                                            }}
                                                            renderSuggestionsContainer={renderSuggestionsContainer}
                                                            onSuggestionSelected={(event, { suggestionValue }) => {
                                                                setParams("");
                                                                setSuggestions([]);
                                                                setAutosuggestOpen(false);
                                                            }}
                                                            resetInputOnSelect={true}
                                                            open={autosuggestOpen}

                                                        />
                                                        <SearchIconWrapper>
                                                            <SearchIcon sx={{ color: "#FF00AE", mt: '-2px' }} />
                                                        </SearchIconWrapper>
                                                    </Search>
                                                </div>

                                            )}
                                        </div>
                                    </Grid>
                                    <Grid className="mobile" >


                                        {userSttus.isLogged ?
                                            <div ref={dropdownRef} className="dropdown">
                                                <div className="dropbtn" onClick={handleToggle}>
                                                    <div>
                                                        <IconLink>
                                                            <PersonIcon />
                                                        </IconLink>
                                                    </div>
                                                </div>
                                                {isOpen && <div className="dropdown-content">
                                                    <Link to={'/orderlist'}>
                                                        Order List
                                                    </Link>
                                                    <div onClick={handleClick}>
                                                        Logout
                                                    </div>
                                                </div>
                                                }
                                            </div>
                                            : <IconLink onClick={handleClick}>
                                                <PersonIcon />
                                            </IconLink>
                                        }
                                    </Grid>
                                    <Grid className="mobile">
                                    </Grid>
                                    <Grid className="mobile" style={{ marginLeft: '10px' }}>
                                        <IconLink>
                                            <Link to="/cart">
                                                <Badge badgeContent={cartCount >= 1 ? cartCount : ''} color={cartCount >= 1 ? "secondary" : "default"} invisible={cartCount < 1}>
                                                    <ShoppingCartIcon />
                                                </Badge>
                                            </Link>
                                        </IconLink>
                                    </Grid>


                                    <div id="menu" className="borderstyle">
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
                                    <Grid className="desktop">
                                        <Button sx={{ background: '#FF00AE', fontSize: '14px', color: '#FFFFFF', fontWeight: '600', borderRadius: '50px', px: '10px' }} id="category-btn" onClick={toggleMenu}>CATEGORY</Button>
                                    </Grid>
                                    <Grid className="desktop">
                                        <Link to="/aboutus">
                                            <button className={classes.navBtn} style={{ marginLeft: '15px', marginRight: '15px' }}>ABOUT US</button>
                                        </Link>
                                    </Grid>
                                    <Grid className="desktop">
                                        <Link to="/contact">
                                            <button className={classes.navBtn} style={{ marginRight: '15px' }}>CONTACT</button>
                                        </Link>
                                    </Grid>
                                    <Grid className="desktop">
                                        <Search>
                                            <Autosuggest
                                                suggestions={suggestions}
                                                onSuggestionsFetchRequested={() => { }}
                                                onSuggestionsClearRequested={() => { }}
                                                getSuggestionValue={(suggestion) => {
                                                    return suggestion.name;
                                                }} renderSuggestion={(suggestion) => {
                                                    const capitalizedSuggestion = suggestion.name.charAt(0).toUpperCase() + suggestion.name.slice(1);
                                                    const url = suggestion.url;
                                                    return (
                                                        <Link to={url}>
                                                            <div>{capitalizedSuggestion}</div>
                                                        </Link>
                                                    );
                                                }}
                                                inputProps={{
                                                    value: params,
                                                    placeholder: "Search for Products",
                                                    onChange: (event, { newValue }) => {
                                                        setParams(newValue);
                                                    },
                                                    onFocus: (event) => setAutosuggestOpen(true),
                                                    onBlur: ((event) => (setAutosuggestOpen(false), setParams(""))),
                                                    style: {
                                                        minWidth: "187px",
                                                        minHeight: "35px",
                                                        border: "0px",
                                                        borderRadius: "20px",
                                                        width: "100%",
                                                        outline: "none",
                                                        paddingLeft: '10px',
                                                    },
                                                }}
                                                renderSuggestionsContainer={renderSuggestionsContainer}

                                                onSuggestionSelected={(event, { suggestionValue }) => {
                                                    setParams("");
                                                    setSuggestions([]);
                                                    setAutosuggestOpen(false);
                                                }}
                                                resetInputOnSelect={true}
                                                open={autosuggestOpen}

                                            />
                                            <SearchIconWrapper>
                                                <SearchIcon sx={{ color: "#FF00AE" }} />
                                            </SearchIconWrapper>
                                        </Search>
                                    </Grid>
                                    <Grid className="mobile" sx={{ mx: '7px' }}>
                                        {(commonData1.open) && <Disclosure>
                                            {({ open }) => (
                                                <div>
                                                    <Disclosure.Button className={classes.disclosurebtn}>
                                                        {open ? (
                                                            <IconLink>
                                                                <CloseIcon />
                                                            </IconLink>
                                                        ) : (
                                                            <IconLink>
                                                                <MenuIcon />
                                                            </IconLink>
                                                        )}
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel style={{ position: 'absolute', top: '78px', width: '100%', left: '0px', borderTop: '1px solid #FF00AE', borderBottom: '1px solid #FF00AE' }} >
                                                        <div className={classes.disclosure}>
                                                            <div className="list">
                                                                <Disclosure.Button className={classes.disclosurebtncat}>
                                                                    <Button sx={{ background: '#FF00AE', fontSize: '14px', color: '#FFFFFF', fontWeight: '600', borderRadius: '50px', px: '10px', width: '150px', marginTop: '15px' }} id="category-btn" onClick={toggleMenu}>CATEGORY</Button>
                                                                </Disclosure.Button>
                                                                {navigation.map((item, index) => (
                                                                    <Disclosure.Button
                                                                        key={item.name}
                                                                        as={Link}
                                                                        to={item.href}
                                                                    >
                                                                        <Button sx={{ background: '#FF00AE', fontSize: '14px', color: '#FFFFFF', fontWeight: '600', borderRadius: '50px', px: '10px', mt: '15px', width: '150px' }}> {item.name}</Button>

                                                                    </Disclosure.Button>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </div>
                                            )}
                                        </Disclosure>}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </div>
            </div>

        </MyNavbar >
    );
}

Navbar.propTypes = {
    bgcolor: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Navbar;
