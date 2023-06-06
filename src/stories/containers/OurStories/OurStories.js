import { Toolbar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getCategoryData } from '../../../services/apis/menu';
import HomeSlider from '../HomeSlider/HomeSlider';
import ReviewSlider from '../ReviewSlider/ReviewSlider';
import { MyStory, MyStoryData, MyStoryImage, NumberCircle, useStyles } from "./index.styles";
import URL from '../../../img-url.config';

const OurStories = (props) => {
    const classes = useStyles(props);
 const [data, setData] = useState([]);

    //get category Data
    useEffect(() => {
        const fetchData = async () => {
            const data = await getCategoryData();
            setData(data);
        };
        fetchData().catch(console.error);
    }, []);
    return (
        <>
            <div className={classes.storyflex}>
                <MyStory>
                    <div className={classes.storiestitle}>Our Story</div>
                    <div className={classes.storiesdesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, fugit in fuga odio fugiat, autem ratione dolorum atque, vel odit eveniet commodi. Aspernatur quaerat voluptas esse temporibus possimus ratione quod accusamus harum dicta nesciunt minima maxime sapiente corrupti tempore vero, quae non similique a. Culpa inventore nesciunt impedit doloremque veritatis!</div>
                    <MyStoryData sx={{ mt: '30px' }}>
                        <div>
                            <NumberCircle>10K</NumberCircle>
                            <div className={classes.datatitle}>Products</div>
                        </div>
                        <div className={classes.numbercirclespacing}>
                            <NumberCircle>1002</NumberCircle>
                            <div className={classes.datatitle}>Happy Clients</div>
                        </div>
                        <div>
                            <NumberCircle>102</NumberCircle>
                            <div className={classes.datatitle}>Years</div>
                        </div>
                    </MyStoryData>
                </MyStory>
                <MyStoryImage>
                    <img src={URL.about.image} alt="about" />
                </MyStoryImage>
            </div>
            <ReviewSlider Categorydata={data} />
        </>
    )
}

export default OurStories
