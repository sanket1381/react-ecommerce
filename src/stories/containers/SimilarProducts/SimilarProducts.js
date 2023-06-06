import React, { useState, useRef, useEffect } from "react";
import { MyStyledGrid, StyledTitle } from "./index.styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link, useLocation } from "react-router-dom";
import { useStyles, HomeTitle, SliderBreak, } from "./index.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import StarIcon from '@mui/icons-material/Star';
import "swiper/css";
// import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {  FreeMode, Thumbs, Autoplay } from "swiper";
import { useTheme } from '@mui/material/styles';
import { getProductsList } from "../../../services/apis/products";
function SimilarProducts(props) {
    const [data, setData] = useState([]);
    const [sortOrder, setSortOrder] = useState();
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const classes = useStyles();
    const theme = useTheme();

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [thumbsSwiperMobile, setThumbsSwiperMobile] = useState(null);
    const [thumbIndex, setThumbIndex] = useState(0);
    const [thumbIndexFm, setThumbIndexFm] = useState(0);

    const thumbHandle = (e) => {
        setThumbIndex(e)
    }

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    const swiperChangHandle = (e) => {
        setThumbIndex(e.activeIndex == 11 ? 0 : e.activeIndex - 1)
    }
    const swiperChangHandlefm = (e) => {
        setThumbIndexFm(e.activeIndex == 11 ? 0 : e.activeIndex - 1)
    }

    const [productId, setProductId] = useState("");
    const [csmProductData, setCsmProductData] = useState("");
    const location = useLocation();
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const newproductId = searchParams.get("productId");
        setProductId(newproductId);
    }, [location, productId]);
    const [page, setPage] = useState(0);
    const categoryId = props.categoryid
    //call product list API
    useEffect(() => {
        const fetchData = async () => {
            if (categoryId) {
                const start = page * 10;
                const productdata = await getProductsList(csmProductData, categoryId, start, 10);
                const filteredProductlist = productdata.data.result.filter((product) => product._id !== productId).slice(0, 8)
                setData(filteredProductlist);
            }
        };
        fetchData().catch(console.error);
    }, [csmProductData, categoryId, productId, page]);

    return (
        <div className={classes.similarProduct}>
            <>
                <MyStyledGrid {...props}
                >
                    <Box sx={{ flexGrow: 1, }}  >
                        <StyledTitle>{data.length > 0 ? "Similar Products" : ""}</StyledTitle>
                        <Grid
                            container={true}
                            spacing={7}
                            columns={{ xs: 6, sm: 12, md: 12, lg: 3 }}
                        >
                            {data?.map((ele, index) => {
                                return (
                                    <Grid item sx={{ mx: { sm: 'auto', lg: '0px' }, xl: { maxWidth: '1280px' } }} key={index} >
                                        <Link to={{
                                            pathname: `/product`,
                                            search: `productId=${ele._id}`
                                        }}>
                                            <div>
                                                <img
                                                    style={{ border: '7px solid #D9D9D9' }}
                                                    width={"224px"}
                                                    height={"191px"}
                                                    src={ele.images && ele.images.length > 0 ? ele.images[0] : '/defaultimage.png'} alt={'product'}
                                                />

                                                <div className={classes.sliderspace}>
                                                    <div className={classes.sliderflexBox} >
                                                        <div className={classes.productTitle}>{ele.name.substring(0, 20)}{ele.name.length > 20 ? '...' : ''}</div>

                                                        <div className={classes.priceTitle}><CurrencyRupeeIcon sx={{ fontSize: '22px'}} /> {ele.price}</div>
                                                       
                                                    </div>
                                                    <div className={classes.productDescription}>{ele.masterCategoryId.name.substring(0, 20)}{ele.masterCategoryId.name.length > 20 ? '...' : ''}</div>
                                                    <div className={classes.StarIcons}><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </MyStyledGrid>

                <SliderBreak className='mobile' style={{}}>
                    <HomeTitle>{data.length > 0 ? "Similar Products" : ""}</HomeTitle>
                    <Swiper
                        style={{
                            // @ts-ignore
                            "--swiper-pagination-color": "#f030a3",
                            "--swiper-pagination-bullet-inactive-color": "#000",
                            "--swiper-pagination-bullet-size": '10px',
                            "--swiper-pagination-bottom": "!-6px",
                        }}
                        loop={true}
                        onSlideChange={(e) => swiperChangHandlefm(e)}
                        slidesPerView={1.2}
                        centeredSlides={false}
                        spaceBetween={15}
                        navigation={false}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        thumbs={{ swiper: thumbsSwiperMobile }}
                        modules={[FreeMode, Thumbs, Autoplay]}
                    >
                        {
                            data.map((ele, index) => {
                                return (
                                    <div key={'m_' + index} >
                                        <SwiperSlide key={'m_' + index} >
                                            <Link to={{
                                                pathname: `/product`,
                                                search: `productId=${ele._id}`
                                            }}>
                                                <img
                                                    style={{ border: '6px solid #D9D9D9' }}
                                                    width={"210px"}
                                                    height={"175px"}
                                                    src={ele.images && ele.images.length > 0 ? ele.images[0] : '/defaultimage.png'} alt={'product'}
                                                />
                                                <div className={classes.sliderspace}>
                                                    <div className={classes.sliderflexBox} >
                                                        <div className={classes.productTitle}>{ele.name.substring(0, 20)}{ele.name.length > 20 ? '...' : ''}</div>
                                                        <div className={classes.priceTitle}><CurrencyRupeeIcon sx={{ fontSize: '22px'}} /> {ele.price}</div>
                                                    </div>
                                                    <div className={classes.StarIcons}><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
                                                </div>

                                            </Link>
                                        </SwiperSlide>

                                    </div>
                                )
                            })
                        }
                    </Swiper>
                </SliderBreak>
            </>
        </div>
    );
}

export default SimilarProducts;
