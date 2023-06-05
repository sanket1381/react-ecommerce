import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

// import required modules
import { Lazy, Pagination, Navigation, FreeMode, Thumbs, Autoplay } from "swiper";

const ArtCraftSlider = ({ isSmartCribProduct = false, sliderImgList, sliderLen = 9, sliderImgThumbList }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [thumbsSwiperMobile, setThumbsSwiperMobile] = useState(null);
    const [thumbIndex, setThumbIndex] = useState(0);
    const [thumbIndexFm, setThumbIndexFm] = useState(0);

    const thumbHandle =(e)=>{
        setThumbIndex(e)
    }

    const thumbHandleFm =(e)=>{
        setThumbIndexFm(e)
    }

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

const swiperChangHandle = (e) => {
    setThumbIndex(e.realIndex)
}
const swiperChangHandlefm = (e) => {
    setThumbIndexFm(e.realIndex)
}

    return (
        <div id="product-images" className="w-full lg:w-[730px] xl:w-[790px] relative pb-2 sm:pb-8 productPageImage mt-1">
            {/* slider for Desktop */}
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    "--swiper-pagination-bullet-inactive-color": "#000",
                    '--swiper-navigation-size': '20px',
                    "--swiper-pagination-bullet-padding": '2px',
                    height: 570
                }}
                loop={true}
                onSlideChange={(e) => swiperChangHandle(e)}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                navigation= {{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="hidden sm:block mainSlider w-full sm:!mr-0"
            >
                {
                    sliderImgList.map((_img, index) => {
                        return (
                            <SwiperSlide key={'m_' + index}>
                                {(index == 2) ? <video
                                    className='h-[100%] object-cover object-bottom !pb-0 !w-[800px] lg:!w-[790px] mx-auto lg:mx-0'
                                    src={_img}
                                    loop={true}
                                    autoPlay={true}
                                    muted={true}
                                    playsInline={true}
                                    controlsList="nodownload"
                                /> :
                                    <div className='carousel-image !bg-cover !w-[800px] lg:!w-[790px] mx-auto' style={{
                                        backgroundImage: `url(${_img})`
                                    }}></div>}
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            {/*slider for Mobiles  */}
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    "--swiper-pagination-bullet-inactive-color": "#000",
                    '--swiper-navigation-size': '20px',
                    "--swiper-pagination-bullet-padding": '2px',
                    height: 340
                }}
                loop={true}
                onSlideChange={(e) => swiperChangHandlefm(e)}
                slidesPerView={1}
                centeredSlides={true}
                slidesPerGroup={1}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                thumbs={{ swiper: thumbsSwiperMobile }}
                modules={[FreeMode, Navigation, Pagination, Thumbs, Autoplay]}
                className="block sm:hidden mainSlider w-full sm:w-11/12 sm:!mr-0 !pb-0"
            >
                {
                    sliderImgList.map((_img, index) => {
                        return (
                            <SwiperSlide key={'m_' + index} onAnimationEnd={()=>setThumbIndex(index)}>
                               {( index == 2 ? <video
                                    className='h-[100%] object-cover object-bottom !pb-0 !w-[790px]'
                                    src={_img}
                                    loop={true}
                                    autoPlay={true}
                                    muted={true}
                                    playsInline={true}
                                    controlsList="nodownload"
                                /> :
                                    <div className='carousel-mobile-image !pb-0' style={{
                                        backgroundImage: `url(${_img})`, backgroundSize: "cover"
                                    }}></div>)}
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <div className="!hidden swiper-button-prev -ml-[60px] !text-[#3C3C3B] !font-extrabold " ref={navigationPrevRef} style={{"--swiper-navigation-size": "30px"}}></div>
            <div className="!hidden lg:!flex absolute top-[15.3rem] right-0 z-10 cursor-pointer product-arrow justify-center" ref={navigationNextRef} style={{"--swiper-navigation-size": "30px"}}><img src="https://assets.cradlewise.com/images/icons/slider-arrow.svg" alt='arrow' className="inline-block ml-2" /></div>            
           
            {/* for Desktop thumbNails */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={12}
                slidesPerView={10}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mainSwiper mt-[20px] lg:!w-[80%] sm:mx-auto sm:!w-[68%] sm:pl-2 lg:!mr-0 hidden sm:block"
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    "--swiper-pagination-bullet-inactive-color": "#000",
                    height: 100,
                }}
            >
                {
                    sliderImgThumbList.map((_img, index) => {
                        return (
                            <SwiperSlide key={'s_' + index} onClick={(e)=>thumbHandle(index)}>
                                {(index == 2) ? <div className={`carousel-image !h-[50px] max-w-[60px] cursor-pointer`} style={{ border:thumbIndex === index && "1px solid #1e1e1e", boxShadow:thumbIndex === index && '3px 3px 7px 0px rgb(0 0 0 / 25%)',
                                    backgroundImage:!(thumbIndex === index) ? `linear-gradient(45deg, rgba(13, 19, 33, 0.28), rgba(13, 19, 33, 0.28)), url("https://assets.cradlewise.com/images/index/Video-Thumbnail-cng.jpg")`:`url("https://assets.cradlewise.com/images/index/Video-Thumbnail-cng.jpg")`
                                }}></div> :
                                    <div className={`carousel-image max-w-[60px] !h-[50px] cursor-pointer ${index==0 && 'ml-[1px]'}`} style={{ border:thumbIndex === index && "1px solid #1e1e1e", backgroundSize: "cover", boxShadow:thumbIndex === index && '3px 3px 7px 0px rgb(0 0 0 / 25%)',
                                        backgroundImage:!(thumbIndex === index) ? `linear-gradient(45deg, rgba(13, 19, 33, 0.28), rgba(13, 19, 33, 0.28)), url(${_img})`:`url(${_img})`
                                    }}></div>}
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            {/* for Mobile thumbNails */}
            <Swiper
                onSwiper={setThumbsSwiperMobile}
                loop={true}
                spaceBetween={20}
                slidesPerView={5.7}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mainSwiper mt-[10px] w-full sm:w-[70%] sm:!mr-0 sm:hidden !pl-[10px]" 
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    "--swiper-pagination-bullet-inactive-color": "#000",
                    height: 100,
                }}>
                {
                    sliderImgThumbList.map((_img, index) => {
                        return (
                            <SwiperSlide key={'s_' + index} onClick={(e)=> thumbHandleFm(index)}>
                                {(index == 2) ? <div className={`carousel-image !h-[50px] max-w-[60px]`} style={{ border:thumbIndexFm === index && "1px solid #1e1e1e", boxShadow:thumbIndexFm === index && '3px 3px 7px 0px rgb(0 0 0 / 25%)',
                                    backgroundImage:!(thumbIndexFm === index) ? `linear-gradient(45deg, rgba(13, 19, 33, 0.28), rgba(13, 19, 33, 0.28)), url("https://assets.cradlewise.com/images/index/Video-Thumbnail-cng.jpg")`:`url("https://assets.cradlewise.com/images/index/Video-Thumbnail-cng.jpg")`
                                }}></div> :
                                    <div className={`carousel-image max-w-[60px] !h-[50px]`} style={{ border:thumbIndexFm === index && "1px solid #1e1e1e",boxShadow:thumbIndexFm === index && '3px 3px 7px 0px rgb(0 0 0 / 25%)', backgroundSize: "cover",
                                        backgroundImage:!(thumbIndexFm === index) ? `linear-gradient(45deg, rgba(13, 19, 33, 0.28), rgba(13, 19, 33, 0.28)), url(${_img})`:`url(${_img})`

                                    }}></div>}
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    )
}

export default ArtCraftSlider;