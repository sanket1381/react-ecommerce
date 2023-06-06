import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { MyMain, MyStyledGrid, MySideMenu } from "./index.styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link, useLocation } from "react-router-dom";
import { Drawer, Paper, Slider } from "@mui/material";
import { useStyles } from "./index.styles";
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FilterDrawer from "../filterDrawer/FilterDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import './productcategory.css'
import { getFiltersList } from "../../../services/apis/products";
import { } from "../SideMenu/index.styles";
import { getCategorysList } from "../../../services/apis/categorys";
import LoaderElement from "../../../components/loader/LoaderElement";
import { Helmet } from "react-helmet";
import SEO from "../../../helemet-seo.config";
function ProductCategory(props) {
    const classes = useStyles();
    //create states
    const [data, setData] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [page, setPage] = useState(0);
    const [selectedPage, setSelectedPage] = useState(1);
    const [id, setCategoriesId] = useState("");
    const location = useLocation();
    const childFunc = useRef(null);
    const [filterAttributes, setFilterAttributes] = useState([]);
    const [filtercategories, setFiltercategories] = useState([]);
    const [value, setValue] = useState([]);
    const [sortOrder, setSortOrder] = useState();
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [csmCategoryData, setCategoryData] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const newCategoryId = searchParams.get("categoryId");
        setCategoryId(newCategoryId);
    }, [location]);

    //get category List 
    useEffect(() => {
        const fetchData = async () => {
            if (categoryId) {
                const data = await getCategorysList(csmCategoryData, categoryId, priceRange, sortOrder);
                setData(data.data.result);
                setLoading(false);
            }
        };
        fetchData().catch(console.error);
    }, [csmCategoryData, categoryId, priceRange, sortOrder]);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handlePageClick = (pageNum) => {
        setSelectedPage(pageNum);
        setPage(pageNum - 1);
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const newCategoryId = searchParams.get("categoryId");
        setCategoriesId(newCategoryId);
    }, [location]);

    //Filter Attribute
    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const filterData = await getFiltersList(id);
                setFilterAttributes(filterData.data.result.attributes);
                setFiltercategories(filterData.data.result.categories);
            }
        };
        fetchData().catch(console.error);
    }, [id]);
    
    const [state, setState] = React.useState({
        top: false,
    });

    React.useEffect(() => {
        childFunc.current = toggleDrawer("top", true)
    }, [])

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const toggleDrawer = (anchor, open) => (event) => {

        setState({ ...state, [anchor]: open });
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handlePriceRangeChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const list = (anchor) => (
        <div className="sidedrawer">

            <Box
                sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300, paddingLeft: '20px' }}
                role="presentation"
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <div>
                    <div>
                        {filtercategories.map((categories) => {
                            return (
                                <>
                                    <div className={`categeorylinks ${categories.id === id ? "selected" : ""}`} key={categories.name}>
                                        <Link to={categories.url}>
                                            <div className={`parentcategory ${categories.id === id ? "selectedtext" : ""}`}>
                                                {categories.name.split(' ')
                                                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                                    .join(' ')}
                                            </div>
                                        </Link>
                                    </div>
                                    
                                    <div style={{ marginTop: '20px' }}>
                                        {data.length > 1 ? <div className="mobile">
                                            <select value={sortOrder} onChange={handleSortChange} style={{ minHeight: '35px', minWidth: '200px', color: '#FF00AE', padding: '5px' }}>
                                                <option value="">Sort by</option>
                                                <option value="mintomax">Price : Low to High</option>
                                                <option value="maxtomin">Price : High to Low</option>
                                            </select>
                                        </div>
                                            : ''}
                                    </div>
                                    {data.length > 1 || priceRange[0] !== 0 || priceRange[1] !== 1000 ?
                                        <div className={classes.pricefilter} style={{ paddingRight: '20px' }}>
                                            <div className={classes.attributeName}>Price in  <CurrencyRupeeIcon sx={{ fontSize: '22px', marginBottom: '-5px' }} /> :
                                            </div>
                                            <Slider
                                                value={priceRange}
                                                onChange={handlePriceRangeChange}
                                                min={0}
                                                max={1000}
                                                valueLabelDisplay="auto"
                                            />
                                            <div>{`Min Price : ${priceRange[0]}`}</div>
                                            <div>{`Max Price : ${priceRange[1]}`}</div>
                                        </div>
                                        : ''}
                                </>

                            )
                        })}
                    </div>
                </div>


            </Box>
        </div>
    );
    const [selectedChildCategory, setSelectedChildCategory] = useState('');

    return (
        <>
            {filtercategories.map((categories, index) => {
                return (
                    <>
                        <Helmet>
                            <title>{`${categories.name}`}-{SEO.category.title}</title>
                            <meta
                                name="description"
                                content={SEO.category.description}
                            />
                            <meta
                                name="keywords"
                                content={`${SEO.keywords}, ${categories.name}`}
                            />
                            <link rel="canonical" href={`${SEO.category.canonical.api}/category/${categories.id}`} />
                            <meta property="og:title" content={categories.name} />
                            <meta property="og:description" content={SEO.category.description} />
                            <meta property="og:image" content={SEO.category.image} />
                            <meta property="og:url" content={`${SEO.category.canonical.api}/category/${categories.id}`} />
                        </Helmet>

                    </>
                )
            })}
            <MyMain>
                <MySideMenu>
                    <div>
                        {filtercategories.map((categories, index) => {
                            return (
                                <>
                                    <div className={`categeorylinks ${categories.id === id ? "selected" : ""}`} key={categories.name}>

                                        <Link to={categories.url}>
                                            <div className={`parentcategory ${categories.id === id ? "selectedtext" : ""}`}>
                                                {categories.name.split(' ')
                                                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                                    .join(' ')}
                                            </div>
                                        </Link>
                                    </div>
                                </>

                            )
                        })}
                    </div>
                    {data.length > 1 || priceRange[0] !== 0 || priceRange[1] !== 1000 ? <div className={classes.pricefilter}>
                        <div className={classes.attributeName}>
                            Price in  <CurrencyRupeeIcon sx={{ fontSize: '22px', marginBottom: '-5px' }} /> :
                        </div>
                        <Slider
                            value={priceRange}
                            onChange={handlePriceRangeChange}
                            min={0}
                            max={1000}
                            valueLabelDisplay="auto"
                        />
                        <div>{`Min Price : ${priceRange[0]}`}</div>
                        <div>{`Max Price : ${priceRange[1]}`}</div>
                    </div> : ''}
                </MySideMenu>

                <div className="filterdisplay">
                    <Grid className="mobile" sx={{ width: '100%', position: 'fixed', bottom: '0px', padding: '0px' }}>
                        <div onClick={() => childFunc.current()} className={classes.FilterButton}>
                            <MenuIcon />  Filter
                        </div>
                    </Grid>
                </div>
                <div className="sidedrawer">
                    <div className="sidedrawer">
                        {["top"].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    PaperProps={{
                                        style: {
                                            top: "76px",
                                            bottom: "52px"
                                        }
                                    }}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <MyStyledGrid>
                    <Box sx={{ flexGrow: 1 }}>
                        <div>
                            <div className={classes.productpageheader}>
                                <div>
                                    {filtercategories.map((categories, index) => {
                                        return (
                                            <>
                                                <div className={classes.selectedcat}>
                                                    {categories.id === id ? categories.name.split(' ')
                                                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                                        .join(' ') : ''}
                                                </div>
                                            </>

                                        )
                                    })}
                                </div>
                                <div>
                                    {data.length > 1 ? <div className="desktop">
                                        <select value={sortOrder} onChange={handleSortChange} style={{ minHeight: '35px', minWidth: '200px', color: '#FF00AE', padding: '5px' }}>
                                            <option value="">Sort by</option>
                                            <option value="mintomax">Price: Low to High</option>
                                            <option value="maxtomin">Price: High to Low</option>
                                        </select>
                                    </div>
                                        : ''}
                                </div>
                            </div>
                        </div>
                        {loading ? (
                            <div><LoaderElement /></div>
                        ) : data.length > 0 ?
                            <div className={classes.productparent}>
                                {data.map((ele, index) => {
                                    return (
                                        <div key={index} className={classes.spaceBox}>
                                            <Link to={{
                                                pathname: `/products`,
                                                search: `categoryId=${ele._id}`
                                            }}>
                                                <Paper sx={{ padding: { sm: '15px' } }}>
                                                    <div className={classes.categoryList}>
                                                        <img className={classes.categoryImage} src={ele.images && ele.images.length > 0 ? ele.images[0] : '/defaultimage.png'} alt={'product'} />
                                                        <div className={classes.sliderspace}>
                                                            <div className={classes.sliderflexBox}>
                                                                <div className={classes.productTitle}>{ele.name.substring(0, 20)}{ele.name.length > 20 ? '...' : ''}</div>
                                                                <div className={classes.StarIconsdesktop}><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /></div>
                                                            </div>
                                                            <div className={classes.StarIcons}><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /></div>
                                                            <div className={classes.priceTitle}><CurrencyRupeeIcon sx={{ fontSize: '14px' }} />{ele.price}</div>
                                                        </div>
                                                    </div>
                                                </Paper>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                            :
                            <div className={classes.noproductsParent}>
                                <div>
                                    Currently we dont have child categories for this parent category
                                </div>
                                <div>
                                    please check later.
                                </div>
                            </div>
                        }
                    </Box>
                </MyStyledGrid>

            </MyMain>

            <div className="sidedrawer">
                <FilterDrawer childFunc={childFunc} />
            </div>


        </>
    );
}

ProductCategory.propTypes = {
    bgcolor: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default ProductCategory;
