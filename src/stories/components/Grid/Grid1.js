import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { MyStyledGrid, StyledTitle } from "./index.styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useStyles, HomeTitle, SliderBreak, } from "./index.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import StarIcon from '@mui/icons-material/Star';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {  FreeMode, Thumbs, Autoplay } from "swiper";

function Grid1(props) {
    const classes = useStyles();
    const [thumbsSwiperMobile, setThumbsSwiperMobile] = useState(null);
    const [thumbIndex, setThumbIndex] = useState(0);
    const [thumbIndexFm, setThumbIndexFm] = useState(0);

    const swiperChangHandlefm = (e) => {
        setThumbIndexFm(e.activeIndex == 11 ? 0 : e.activeIndex - 1)
    }

    return (
        <>
            <MyStyledGrid {...props}>
                <Box sx={{ flexGrow: 1, }}  >
                    <StyledTitle>New Arrivals</StyledTitle>

                    <Grid
                        container={true}
                        columnSpacing={'75px'}
                        rowSpacing={'30px'}
                        columns={{ xs: 6, sm: 12, md: 12, lg: 3 }}
                    >
                        {props.data.map((ele, index) => (
                            <Grid item sx={{ mx: { sm: 'auto', lg: '0px' }, }} key={index} >
                                <Link to={{
                                    pathname: `/product`,
                                    search: `productId=${ele._id}`
                                }}>
                                    <div className={classes.sliderspace}>
                                        <img
                                            style={{ border: '7px solid #D9D9D9' }}
                                            width={"100%"}
                                            height={"191px"}
                                            src={ele.images && ele.images.length > 0 ? ele.images[0] : '/dben-sew210.jpg'}
                                        />

                                        <div>
                                            <div className={classes.sliderflexBox} >
                                               <div className={classes.productTitle}>{ele.name.substring(0, 18)}{ele.name.length > 18 ? '...' : ''}</div>
                                                <div className={classes.priceTitle}><CurrencyRupeeIcon sx={{ fontSize: '16px'}} /> {ele.price}</div>
                                            </div>
                                            <div className={classes.StarIcons}><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
                                        </div>
                                    </div>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>

                </Box>
            </MyStyledGrid>
            <SliderBreak className='mobile'>
                <HomeTitle>New Arrivals</HomeTitle>

                <Swiper
                    style={{
                        "--swiper-pagination-color": "#f030a3",
                        "--swiper-pagination-bullet-inactive-color": "#000",
                        "--swiper-pagination-bullet-size": '10px',
                        "--swiper-pagination-bottom": "!-6px",
                    }}
                    loop={true}
                    onSlideChange={(e) => swiperChangHandlefm(e)}
                    slidesPerView={1.5}
                    centeredSlides={false}
                    spaceBetween={1}
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
                        props.data.map((ele, index) => {
                            return (
                                <SwiperSlide key={'m_' + index} >
                                    <Link to={{
                                        pathname: `/product`,
                                        search: `productId=${ele._id}`
                                    }}>
                                        <img
                                            style={{ border: '6px solid #D9D9D9' }}
                                            width={"200px"}
                                            height={"155px"}
                                            src={ele.images && ele.images.length > 0 ? ele.images[0] : '/dben-sew210.jpg'}
                                        />
                                        <div className={classes.sliderspace}>
                                            <div className={classes.sliderflexBox} >
                                                <div className={classes.productTitle}>{ele.name.substring(0, 18)}{ele.name.length > 18 ? '...' : ''}</div>
                                                <div className={classes.priceTitle}><CurrencyRupeeIcon sx={{ fontSize: '16px'}} /> {ele.price}</div>
                                            </div>
                                            <div className={classes.StarIcons}><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
                                        </div>

                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </SliderBreak>
        </>
    );
}

Grid1.propTypes = {
    bgcolor: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Grid1;
