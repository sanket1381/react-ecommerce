import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import { Pagination, FreeMode, Thumbs, Autoplay } from "swiper";
import { Paper } from '@mui/material';
import { HomeTitle } from '../HomeSlider/index.styles';
import { Reviewdesc, useStyles } from './index.styles';

const ReviewSlider = (props) => {
    const classes = useStyles();
    //create states
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

    return (
        <div className={classes.maxWidth}>
            <div className='desktop' >
                <HomeTitle>Feedback from clients</HomeTitle>

                <Swiper
                    style={{
                        // @ts-ignore
                        "--swiper-pagination-color": "#f030a3",
                        "--swiper-pagination-bullet-inactive-color": "#000",
                        "--swiper-pagination-bullet-size": '10px',

                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,

                        },
                        1280: {
                            slidesPerView: 2,

                        },
                    }}
                    className={classes.swiperwidth}
                    loop={true}
                    onSlideChange={(e) => swiperChangHandle(e)}
                    spaceBetween={65}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Pagination, Thumbs, Autoplay]}
                >
                    {
                        props.Categorydata.map((_img, index) => {
                            return (

                                <SwiperSlide key={'m_' + index} sx={{ mx: 'auto', }}>
                                    <Paper sx={{ padding: '45px 45px 45px 45px', boxShadow: "0px 3px 3px 3px #dcdee0", }}>
                                        <Reviewdesc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta pariatur quae corporis, beatae facilis aliquam. Perferendis itaque rerum nostrum obcaecati?</Reviewdesc>
                                        <div className={classes.reviewerdata}>
                                            <div className=""><img src="./dben-sew210.jpg" alt="" width='60px' height='60px' style={{ borderRadius: '50px' }} /></div>
                                            <div>
                                                <div className={classes.reviewerName}>Reviewer Name</div>
                                                <div className={classes.reviewerCity}>City</div>
                                            </div>
                                        </div>
                                    </Paper>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

            <div className='mobile' style={{ marginLeft: 'auto', marginRight: 'auto', }}>
                <div className={classes.sliderTitle}>Feedback from clients</div>
                <div className={classes.spaceSlider}>
                    <Swiper
                        style={{
                            "--swiper-pagination-color": "#f030a3",
                            "--swiper-pagination-bullet-inactive-color": "#000",
                            "--swiper-pagination-bullet-size": '10px',
                            height: 380

                        }}
                        loop={true}
                        onSlideChange={(e) => swiperChangHandlefm(e)}
                        slidesPerView={1}
                        centeredSlides={true}
                        slidesPerGroup={1}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        thumbs={{ swiper: thumbsSwiperMobile }}
                        modules={[FreeMode, Pagination, Thumbs, Autoplay]}
                    >
                        {
                            props.Categorydata.map((_img, index) => {
                                return (
                                    <SwiperSlide key={'m_' + index} sx={{ mx: 'auto' }}>
                                        <Paper sx={{ padding: '20px 20px 20px' }}>
                                            <SwiperSlide key={'m_' + index} sx={{ mx: 'auto', boxShadow: "3px 3px 3px 3px #dcdee0" }}>
                                                <Reviewdesc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta pariatur quae corporis, beatae facilis aliquam. Perferendis itaque rerum nostrum obcaecati?</Reviewdesc>
                                                <div className={classes.reviewerdata}>
                                                    <div className=""><img src="./dben-sew210.jpg" alt="" width='60px' height='60px' style={{ borderRadius: '50px' }} /></div>
                                                    <div>
                                                        <div className={classes.reviewerName}>Reviewer Name</div>
                                                        <div className={classes.reviewerCity}>City</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Paper>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ReviewSlider