import React, { useState, useRef, useEffect } from "react";
import { MyMain, MySideMenu, MyStyledGrid, useStyles } from "./index.styles";
import Box from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom";
import { Drawer, Grid, Paper, Slider } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { getFiltersList, getProductsList } from "../../services/apis/products";
import MenuIcon from "@mui/icons-material/Menu";
import './productpage.css'
import LoaderElement from "../../components/loader/LoaderElement";
import { Helmet } from "react-helmet";
import SEO from "../../helemet-seo.config";
function ProductPage() {
    const classes = useStyles();
    // create states 
    const [data, setData] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [csmProductData, setProductData] = useState('');
    const [page, setPage] = useState(0);
    const [selectedPage, setSelectedPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [id, setCategoriesId] = useState("");
    const location = useLocation();
    const childFunc = useRef(null);
    const [filterAttributes, setFilterAttributes] = useState([]);
    const [filtercategories, setFiltercategories] = useState([]);
    const [value, setValue] = useState([]);
    const [selectedValues, setSelectedValues] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState();
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    //handle pagination
    const handlePageClick = (pageNum) => {
        setSelectedPage(pageNum);
        setPage(pageNum - 1);
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const newCategoryId = searchParams.get("categoryId");
        setCategoriesId(newCategoryId);
    }, [location]);

    //API call to get Filter list and set to state
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

    //Filter with Price
    const handlePriceRangeChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    //API call to get Product list and set to state with pagination
    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const start = page * 10;
                const productdata = await getProductsList(csmProductData, id, start, 12, selectedValues, priceRange, sortOrder);
                setData(productdata.data.result);
                setLoading(false);
                const totalOrders = productdata.data.total;
                const totalPages = Math.ceil(totalOrders / 10);
                setTotalPages(totalPages);
            }
        };
        fetchData().catch(console.error);
    }, [csmProductData, id, page, selectedValues, priceRange, sortOrder]);

    const showArrows = totalPages > 1;
    let pageNumbers = [];
    if (showArrows) {
        const startPage = Math.max(selectedPage - 2, 1);
        const endPage = Math.min(startPage + 4, totalPages);
        pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    } else {
        pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    }


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
                                    <div className={`categeorylinks ${categories.id === id ? "selected" : ""}`} key={categories.id}>
                                        <Link to={categories.url}>
                                            <div className={`parentcategory ${categories.id === id ? "selectedtext" : ""}`}>
                                                {categories.name.split(' ')
                                                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                                    .join(' ')}
                                            </div>
                                        </Link>
                                    </div>
                                    {categories.child_cateegories.map((childcategories) => {
                                        return (
                                            <div className={`categeorylinks ${childcategories.id === id ? "selected" : ""}`} key={childcategories.id}>
                                                <Link to={childcategories.url}>
                                                    <div className={`childcategory ${childcategories.id === id ? "selectedtext" : ""}`}>
                                                        {childcategories.name.split(' ')
                                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                                            .join(' ')}
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </>

                            )
                        })}
                        {data.length > 1 ? <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                            <select value={sortOrder} onChange={handleSortChange} style={{ minHeight: '35px', minWidth: '200px', color: '#FF00AE', padding: '5px', }}>
                                <option value="">Sort by</option>
                                <option value="mintomax">Price : Low to High</option>
                                <option value="maxtomin">Price : High to Low</option>
                            </select>

                        </div>
                            : ''}
                    </div>
                    {data.length > 1 || priceRange[0] !== 0 || priceRange[1] !== 1000 ? <div className={classes.pricefilter} style={{ paddingRight: '20px' }}>
                        <div className={classes.attributeName}>Price in <CurrencyRupeeIcon sx={{ fontSize: '22px', marginBottom: '-5px' }} /> :</div>
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
                    <div>

                        {filterAttributes.map((attr, index) => {
                            const { name, values, data } = attr;
                            return (
                                <div key={index} className={classes.singlefilter}>
                                    <div className={classes.attributeName}>{name
                                        .split(' ')
                                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                        .join(' ')}</div>
                                    {values.map((value) => {
                                        const isSelected = selectedValues.includes(value);
                                        return (
                                            <div className={classes.attributeValues} key={value}>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={isSelected}
                                                        onChange={() => {
                                                            if (isSelected) {
                                                                setSelectedValues(selectedValues.filter(val => val !== value));
                                                            } else {
                                                                setSelectedValues([...selectedValues, value]);
                                                            }
                                                        }}
                                                    />
                                                    {value}
                                                </label>
                                            </div>
                                        );
                                    })}
                                    {selectedValues.some(selected => values.includes(selected)) && <div>{data}</div>}
                                </div>
                            );
                        })}
                    </div>
                </div>

            </Box>
        </div>
    );
    const [allSelected, setAllSelected] = useState(filterAttributes.map(() => false));
    const [selectedChildCategory, setSelectedChildCategory] = useState(null);
    return (
        <>
            {filtercategories.map((categories, index) => {
                return (
                    <>
                        <Helmet>
                            <title>{`${selectedChildCategory ? selectedChildCategory : categories.name}`}-{SEO.category.title}</title>
                            <meta
                                name="description"
                                content={SEO.category.description}
                            />
                            <meta
                                name="keywords"
                                content={`${SEO.keywords}, ${selectedChildCategory ? selectedChildCategory : categories.name}`}
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
                                    <div className={`categeorylinks ${categories.id === id ? "selected" : ""}`} key={categories.id}>
                                        <Link to={categories.url}>
                                            <div className={`parentcategory ${categories.id === id ? "selectedtext" : ""}`} onClick={() => setSelectedChildCategory(categories.name)}>
                                                {categories.name.split(' ')
                                                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                                    .join(' ')}
                                            </div>
                                        </Link>
                                    </div>
                                    {categories.child_cateegories.map((childcategories) => {
                                        return (

                                            <div className={`categeorylinks ${childcategories.id === id ? "selected" : ""}`} key={childcategories.id}>
                                                <Link to={childcategories.url}>
                                                    <div className={`childcategory ${childcategories.id === id ? "selectedtext" : ""}`} onClick={() => setSelectedChildCategory(childcategories.name)}>
                                                        {childcategories.name.split(' ')
                                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                                            .join(' ')}
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </>

                            )
                        })}
                    </div>
                    {data.length > 1 || priceRange[0] !== 0 || priceRange[1] !== 1000 ? <div className={classes.pricefilter}>
                        <div className={classes.attributeName}>Price in <CurrencyRupeeIcon sx={{ fontSize: '22px', marginBottom: '-5px' }} /> :</div>
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

                    <div className={classes.attributeslist}>
                        {filterAttributes.map((attr, index) => {
                            const { name, values, data } = attr;
                            const isSelectedAll = allSelected[index];
                            const isSelectedSome = selectedValues.some(selected => values.includes(selected));

                            return (
                                <div key={index} className={classes.singlefilter}>
                                    <div className={classes.attributeName}>{name
                                        .split(' ')
                                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                        .join(' ')}</div>
                                    {values.length >= 2 ?
                                        <div className={classes.attributeValues} key={values}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={isSelectedAll}
                                                    onChange={(e) => {
                                                        const isChecked = e.target.checked;
                                                        setAllSelected(prev => prev.map((selected, i) => i === index ? isChecked : selected));
                                                        if (isChecked) {
                                                            setSelectedValues(prev => [...prev, ...values]);
                                                        } else {
                                                            setSelectedValues(prev => prev.filter(val => !values.includes(val)));
                                                        }
                                                    }}
                                                    className="custom-checkbox"
                                                />
                                                Select All
                                            </label>
                                        </div> : ''
                                    }
                                    {values.map((value) => {
                                        const isSelected = selectedValues.includes(value);
                                        return (
                                            <div className={classes.attributeValues} key={value}>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={isSelected}
                                                        onChange={() => {
                                                            if (isSelected) {
                                                                setSelectedValues(selectedValues.filter(val => val !== value));
                                                            } else {
                                                                setSelectedValues([...selectedValues, value]);
                                                            }
                                                        }}
                                                        className="custom-checkbox"
                                                    />
                                                    {value}
                                                </label>
                                            </div>
                                        );
                                    })}
                                    {selectedValues.some(selected => values.includes(selected)) && <div>{data}</div>}
                                </div>
                            );
                        })}
                    </div>
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
                        <div className={classes.productpageheader}>
                            <div>
                                {filtercategories.map((categories, index) => {
                                    return (
                                        <>
                                            <div className={classes.selectedcat} key={categories.id}>
                                                {categories.id === id ? categories.name.split(' ')
                                                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                                    .join(' ') : ''}
                                            </div>
                                            {categories.child_cateegories.map((childcategories) => {
                                                return (
                                                    <div className={classes.selectedcat} key={childcategories.id}>

                                                        {childcategories.id === id ? childcategories.name.split(' ')
                                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                                            .join(' ') : ''}
                                                    </div>
                                                )
                                            })}
                                        </>

                                    )
                                })}
                            </div>
                            {data.length > 1 ? <div className="desktop">
                                <select value={sortOrder} onChange={handleSortChange} style={{ minHeight: '35px', minWidth: '200px', color: '#FF00AE', padding: '5px' }}>
                                    <option value="">Sort by</option>
                                    <option value="mintomax">Price : Low to High</option>
                                    <option value="maxtomin">Price : High to Low</option>
                                </select>
                            </div>
                                : ''}
                        </div>
                        {loading ? (
                            <div><LoaderElement /></div>
                        ) : data.length > 0 ?
                            <div className={classes.productparent}>
                                {data.map((ele, index) => {
                                    return (
                                        <div key={index} className={classes.spaceBox}>
                                            <Link to={{
                                                pathname: `/product`,
                                                search: `productId=${ele._id}`
                                            }}
                                            >
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
                                    Currently we dont have product for this category
                                </div>
                                <div>
                                    please check later.
                                </div>
                            </div>
                        }
                        <div className={classes.paginationposition}>
                            {totalPages > 1 && showArrows && selectedPage > 1 &&
                                <button className={classes.paginations} onClick={() => handlePageClick(selectedPage - 1)}>
                                    &lt;
                                </button>
                            }
                            {totalPages > 2 &&
                                pageNumbers.map((pageNum) => (
                                    <button key={pageNum} className={`${classes.paginations} ${selectedPage === pageNum ? classes.selectedPage : ""}`} onClick={() => handlePageClick(pageNum)}>
                                        {pageNum}
                                    </button>
                                ))
                            }
                            {totalPages > 1 && showArrows && selectedPage < totalPages &&
                                <button className={classes.paginations} onClick={() => handlePageClick(selectedPage + 1)}>
                                    &gt;
                                </button>
                            }
                        </div>

                    </Box>
                </MyStyledGrid>

            </MyMain >

        </>
    );
}
export default ProductPage;
