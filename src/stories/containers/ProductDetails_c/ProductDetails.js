import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Thumbs, Autoplay, Navigation } from "swiper";
import PropTypes from "prop-types";
import { MyMain, Item, Image, Image1 } from "./index.styles";
import StarRateIcon from '@mui/icons-material/StarRate';
import Button1 from "../../components/Button/Button";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './productdetails.css';
import {
    useStyles,
} from "./index.styles";
import { } from "./index.styles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import {  useLocation, useNavigate } from "react-router-dom";
import { getProductsView } from "../../../services/apis/products";
import SimilarProducts from "../SimilarProducts/SimilarProducts";
import { getUserCartData, getguestUserCartData } from "../../../services/apis/cart";
import { CartContext } from "../../../context/cart";
import { useTheme } from '@mui/material/styles';
import { Helmet } from "react-helmet";
import SEO from "../../../helemet-seo.config";
function ProductDetails_c(props) {
    const classes = useStyles(props);
    const [data, setData] = useState([]);
    const [productdata, setProductData] = useState([]);
    //get guestUserid and authToken from localStorage
    const userId = localStorage.getItem("authToken");
    const guestUserId = localStorage.getItem("guestUserId");
    const navigate = useNavigate();
    //create states
    const [id, setProductId] = useState("");
    const location = useLocation();
    const [selectedImage, setSelectedImage] = useState(null);
    const [masterCategory, setMasterCategory] = useState('');
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const newCategoryId = searchParams.get("productId");
        setProductId(newCategoryId);
    }, [location, id]);


    //get Product view API and set to state
    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const productdata = await getProductsView(id);
                setData(productdata.data?.result.productVariant);
                setProductData(productdata.data?.result);
                setSelectedImage(productdata.data?.result.images?.[0]);
                setMasterCategory(productdata.data?.result.masterCategoryId._id);
            }
        };
        fetchData().catch(console.error);
    }, [id]);

    function changeMainImage(image) {
        setSelectedImage(image);
    }

    //display multiple attribute
    const attributeGroups = {};
    data.forEach((ele) => {
        ele.attribute.forEach((attribute) => {
            if (attributeGroups[attribute.name]) {
                if (!attributeGroups[attribute.name].values.includes(attribute.values)) {
                    attributeGroups[attribute.name].values.push(attribute.values);
                }
            } else {
                attributeGroups[attribute.name] = {
                    id: Object.keys(attributeGroups).length + 1,
                    name: attribute.name,
                    values: [attribute.values],
                };
            }
        });
    });
    const attributeNames = Object.values(attributeGroups);

    const [selectedAttributes, setSelectedAttributes] = useState({});
    const [selectedVariant, setSelectedVariant] = useState(null);
    const handleAttributeChange = (attributeName, attributeValue) => {
        setSelectedAttributes({ ...selectedAttributes, [attributeName]: attributeValue, });
        setSelectedVariant(null);
    };
    const handleVariantClick = (variant) => {
        setSelectedVariant(variant);
    };

    const availableVariants = data.filter((variant) => {
        return Object.entries(selectedAttributes).every(([attribute, selectedValue]) => {
            if (!selectedValue) {
                return true; // if no option is selected, don't filter on this attribute
            }
            const attributeValues = variant.attribute.map((elem) => elem.values);
            return attributeValues.includes(selectedValue);
        });
    });

    const [quantity, setQuantity] = useState(1);
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const { cartState, cartDispatch } = useContext(CartContext);
    const handleAddToCart = (variant) => {
        cartDispatch.handleCart(id, variant, quantity);
        navigate(`/cart`);

    };
    //buy now go direclty to checkout page
    const handleBuyNow = async (variant) => {
        const productVariantId = cartState.cartData.map((ele) => ele.productVariantId._id)
        const cartItem = cartState.cartData.find((ele) => ele.productVariantId._id === variant);
        const cart_id = cartItem ? cartItem._id : '';
        if (productVariantId.includes(variant)) {
            cartDispatch.handleCart(id, variant, quantity,);
            navigate(`/checkout?cartId=${cart_id}`);
        } else {
            await cartDispatch.handleCart(id, variant, quantity,);
            if (userId) {
                const data = await getUserCartData(userId);
                if (data.status === 200) {
                    const cartProducts = data.data.result.map((ele) => ele);
                    const productVariantId = cartProducts.map((ele) => ele.productVariantId._id)
                    const cartItem = cartProducts.find((ele) => ele.productVariantId._id === variant);
                    const cart_id = cartItem ? cartItem._id : '';
                    navigate(`/checkout?cartId=${cart_id}`);
                }
            } else {
                const guestUserId = localStorage.getItem("guestUserId");
                const data = await getguestUserCartData(guestUserId);
                if (data) {
                    const cartProducts = data.data.result.map((ele) => ele);
                    const productVariantId = cartProducts.map((ele) => ele.productVariantId._id)
                    const cartItem = cartProducts.find((ele) => ele.productVariantId._id === variant);
                    const cart_id = cartItem ? cartItem._id : '';
                    navigate(`/checkout?cartId=${cart_id}`);
                }
            }

        }
    };

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [thumbIndex, setThumbIndex] = useState(0);
    const [thumbIndexFm, setThumbIndexFm] = useState(0);
    const theme = useTheme();

    const thumbHandle = (e) => {
        setThumbIndex(e)
    }

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    const swiperChangHandle = (e) => {
        setThumbIndex(e.activeIndex === 11 ? 0 : e.activeIndex - 1)
    }
    const swiperChangHandlefm = (e) => {
        setThumbIndexFm(e.activeIndex === 11 ? 0 : e.activeIndex - 1)
    }


    return (
        <MyMain {...props} onClick={props.onClick} >
            <Helmet>
                <title>{`${productdata.name}`}-{SEO.product.title}</title>
                <meta
                    name="description"
                    content={productdata.description}
                />
                <meta
                    name="keywords"
                    content={`${SEO.keywords}, ${productdata.name}`}
                />
                <link rel="canonical" href={`${SEO.product.canonical.api}/product/${productdata._id}`} />
                <meta property="og:title" content={productdata.name} />
                <meta property="og:description" content={SEO.product.description} />
                <meta property="og:image" content={SEO.product.image} />
                <meta property="og:url" content={`${SEO.product.canonical.api}/product/${productdata._id}`} />
            </Helmet>

            <section className={classes.detailspageht}>
                <div className={classes.productDeatils}>
                    <div className={classes.productDeatils1}>
                        <Image>
                            <img src={selectedImage ? selectedImage : '/defaultimage.png'} alt={'product'} className={classes.parentImage} />
                            <div className="desktop">
                                <div className={classes.productparent}>
                                    <Swiper
                                        style={{
                                            "--swiper-navigation-color": "#FF00AE",
                                            '--swiper-navigation-size': '20px',
                                            "--swiper-navigation-fontWeight": 700,

                                            height: '120px'
                                        }}
                                        slidesPerView={productdata.images && productdata.images.length < 4 ? productdata.images.length : 4}

                                        loop={true}
                                        spaceBetween={10}

                                        autoplay={{
                                            delay: 1000,
                                            disableOnInteraction: false,
                                        }}
                                        navigation={true}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                                    >
                                        {

                                            productdata.images && productdata.images.length > 0 && productdata.images.map((image, index) => {
                                                return (
                                                    <div style={{ width: '130px', height: '130px' }}>
                                                        <SwiperSlide key={'m_' + index}>
                                                            <img
                                                                key={index}
                                                                src={image}
                                                                width={"130px"}
                                                                height={"130px"}
                                                                alt={'product'}
                                                                style={{ cursor: 'pointer' }}
                                                                onClick={() => changeMainImage(image)}
                                                            />
                                                        </SwiperSlide>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Swiper>
                                </div>
                            </div>
                            <div className="mobile">
                                <div className={classes.productparent}>
                                    <Swiper
                                        style={{
                                            "--swiper-pagination-color": "#f030a3",
                                            "--swiper-pagination-bullet-inactive-color": "#000",
                                            "--swiper-pagination-bullet-size": '5px',
                                            "--swiper-pagination-bottom": "!-6px",
                                            height: '87px'
                                        }}
                                        slidesPerView={productdata.images && productdata.images.length < 4 ? productdata.images.length : 4}
                                        loop={true}
                                        spaceBetween={10}
                                        autoplay={{
                                            delay: 1000,
                                            disableOnInteraction: false,
                                        }}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[FreeMode, Pagination, Thumbs, Autoplay]}
                                        pagination={{
                                            clickable: true,
                                        }}
                                    >
                                        {

                                            productdata.images && productdata.images.length > 0 && productdata.images.map((image, index) => {
                                                return (
                                                    <div style={{ width: '60px', height: '60px' }} key={index}>
                                                        <SwiperSlide key={'m_' + index}>
                                                            <img
                                                                key={index}
                                                                src={image}
                                                                width={"60px"}
                                                                height={"60px"}
                                                                alt={'product'}
                                                                style={{ cursor: 'pointer' }}
                                                                onClick={() => changeMainImage(image)}
                                                            />
                                                        </SwiperSlide>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Swiper>

                                </div>
                            </div>
                        </Image>
                        <Image1>
                            <div>
                                <img src={selectedImage ? selectedImage : '/defaultimage.png'} alt={'product'} className={classes.parentImage} />
                            </div>
                            <div className={classes.productparent}>
                                <Swiper
                                    style={{
                                        "--swiper-navigation-color": "#FF00AE",
                                        '--swiper-navigation-size': '20px',
                                        "--swiper-navigation-fontWeight": 700,

                                        height: '120px'
                                    }}
                                    slidesPerView={productdata.images && productdata.images.length < 4 ? productdata.images.length : 4}
                                    loop={true}
                                    spaceBetween={10}

                                    autoplay={{
                                        delay: 1000,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                                >
                                    {
                                        productdata.images && productdata.images.length > 0 && productdata.images.map((image, index) => {
                                            return (
                                                <SwiperSlide key={'m_' + index}>
                                                    <div className={classes.desktopsliderwidth}>
                                                        <img
                                                            key={index}
                                                            src={image}
                                                            className={classes.desktopsliderwidth}
                                                            alt={'product'}
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => changeMainImage(image)}
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        </Image1>

                    </div>

                    <div className={classes.productDeatils2}>
                        <div>
                            <Item>
                                <div className={classes.namepricelayout}>
                                    <div className={classes.productTitle}>{productdata.name}</div>
                                    <div className={classes.currencyamount}><CurrencyRupeeIcon sx={{ fontSize: '22px' }} /> {productdata.price}</div>
                                </div>
                                <div className={classes.alignStars}><StarRateIcon sx={{ fontSize: '15px' }} /><StarRateIcon sx={{ fontSize: '15px' }} /><StarRateIcon sx={{ fontSize: '15px' }} /><StarRateIcon sx={{ fontSize: '15px' }} /><StarRateIcon sx={{ fontSize: '15px' }} /></div>
                                <div className={classes.desc}>
                                    <div>{productdata.description}</div>
                                </div>
                                <div className={classes.alignSizeQuantity}>

                                    <div className={classes.attributeparents}>
                                        {attributeNames.map((attribute) => (
                                            <div key={attribute.id} className={classes.attributeparent}>
                                                <div className={classes.attributename}>{attribute.name} : </div>
                                                <div>
                                                    <select value={selectedAttributes[attribute.name] || ''} onChange={(e) => handleAttributeChange(attribute.name, e.target.value)} style={{ minWidth: '120px', minHeight: '20px' }}>
                                                        <option value="">Select a {attribute.name}</option>
                                                        {attribute.values.map((value) => (
                                                            <option key={value} value={value}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className={classes.addquantity}>
                                            <div className={classes.Quantity}>
                                                <div className={classes.varablesTitle}>Quantity : </div>
                                                <div className={classes.quantitySelector}>
                                                    {" "}<button className={classes.quantityButton} onClick={handleDecrease}>-</button>
                                                    <span className={classes.quantityNumber}>{quantity}</span>
                                                    <button className={classes.quantityButton} onClick={handleIncrease}>+</button>
                                                </div>
                                            </div>
                                            <div className="desktop">
                                                {availableVariants?.map((variant, index) => {
                                                    if (index === 0) {
                                                        return (
                                                            <div className={classes.buttonSpacing} style={{ marginTop: '15px' }} key={index}>
                                                                <Button1
                                                                    size={"small"}
                                                                    variant="contained"
                                                                    label={"Add to Cart"}
                                                                    onClick={() => handleAddToCart(variant._id)}
                                                                />
                                                                {variant.inventoryQuantity < 1 ?
                                                                    <Button1
                                                                        size={"small"}
                                                                        variant="contained"
                                                                        label={"Buy Now"}
                                                                        sx={{ marginLeft: '15px' }}
                                                                        onClick={() => handleAddToCart(variant._id)}
                                                                    />
                                                                    : <Button1
                                                                        size={"small"}
                                                                        variant="contained"
                                                                        label={"Buy Now"}
                                                                        sx={{ marginLeft: '15px' }}
                                                                        onClick={() => handleBuyNow(variant._id)}
                                                                    />}
                                                            </div>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {availableVariants.length > 1 ?
                                    <div className={classes.allvariantstext}>
                                        All Varaints
                                    </div>
                                    : ''}
                                <div className={availableVariants.length > 1 ? classes.availablevariants : classes.availablevariant}>
                                    {availableVariants?.map((variant, index) => {
                                        return (

                                            <div className={classes.varborder} key={index}>
                                                <div className={classes.productVar}>
                                                    <div className={classes.variantlayout}>
                                                        <div>
                                                            <div className={classes.variantdisplay}><div className={classes.varianttitle}>Name : </div><div className={classes.variantname}>{variant.name}</div></div>
                                                            {variant.attribute.map((ele) => {
                                                                return (
                                                                    <div className={classes.variantdisplay} key={ele.name}><div className={classes.varianttitle}>{ele.name} : </div><div>{ele.values}</div></div>
                                                                )
                                                            })}
                                                            <div className={classes.variantdisplay}><div className={classes.varianttitles}><div style={{ display: 'flex', flexDirection: 'row', }}> <div>Description</div><div style={{ marginLeft: '4px' }}> : </div></div></div><div>{variant.description ? variant.description.longDescription : ""}</div></div>
                                                            <div className={classes.variantdisplay}><div className={classes.varianttitle}></div><div></div>{variant.description ? variant.description.shortDescription : ""}</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className={classes.variantprice}><CurrencyRupeeIcon sx={{ fontSize: '22px' }} /> {variant.price}</div>
                                                        <div className={classes.paddingdstock}>{variant.inventoryQuantity < 1 ?
                                                            <div className={classes.outofstock}>! Out of Stock</div>
                                                            : ''}
                                                        </div>
                                                        <div className={classes.buttonSpacing}>
                                                            <Button1
                                                                size={"small"}
                                                                variant="contained"
                                                                label={"Add to Cart"}
                                                                onClick={() => handleAddToCart(variant._id)}
                                                            />

                                                            {variant.inventoryQuantity < 1 ?
                                                                <Button1
                                                                    size={"small"}
                                                                    variant="contained"
                                                                    label={"Buy Now"}
                                                                    sx={{ marginLeft: '15px' }}
                                                                    onClick={() => handleAddToCart(variant._id)}
                                                                />
                                                                : <Button1
                                                                    size={"small"}
                                                                    variant="contained"
                                                                    label={"Buy Now"}
                                                                    sx={{ marginLeft: '15px' }}
                                                                    onClick={() => handleBuyNow(variant._id)}
                                                                />}
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        )
                                    })
                                    }
                                </div>
                            </Item>
                        </div>

                    </div>
                </div>

                <div className={classes.similardata}>
                    <div className={classes.description}>
                        <div className={classes.varintheaddings}>Description</div>
                        <div>{productdata.description}</div>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <SimilarProducts categoryid={masterCategory} />
                    </div>
                </div>

            </section>
        </MyMain >
    );
}

ProductDetails_c.propTypes = {
    bgcolor: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default ProductDetails_c;
