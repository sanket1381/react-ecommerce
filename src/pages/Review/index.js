import React, { useEffect, useState } from 'react'
import { getBanner } from '../../services/apis/banner';
import MainBanner from '../../stories/containers/MainBanner/MainBanner';
import OurStories from '../../stories/containers/OurStories/OurStories';
import { useStyles } from '../Dashboard/index.styles'
import { Helmet } from 'react-helmet';
import SEO from '../../helemet-seo.config';

const Review = (props) => {
    const classes = useStyles(props);
    // create states 
    const [banner, setBannerData] = useState([]);
   
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //API call to get Banner and set to state
    useEffect(() => {
        const fetchData = async () => {
            const bannerdata = await getBanner();
            const filteredData = bannerdata.data.result.filter(banner => banner.device === 'Desktop');
            const mobileData = bannerdata.data.result.filter(banner => banner.device === 'Mobile');
            setBannerData(filteredData);
        };
        fetchData().catch(console.error);
    }, []);
    return (
        <div>

             <Helmet>
                <title>{SEO.about.title}</title>
                <meta
                    name="description"
                    content={SEO.about.description}
                />
                <meta
                    name="keywords"
                    content={SEO.keywords}
                />
                <link rel="canonical" href={`${SEO.about.canonical.api}/aboutus`} />
                <meta property="og:title" content={SEO.about.title} />
                <meta property="og:description" content={SEO.about.description} />
                <meta property="og:image" content={SEO.about.image} />
                <meta property="og:url" content={`${SEO.about.canonical.api}/aboutus`} />

            </Helmet>
            <MainBanner Bannerdata={banner} />
            <OurStories />
        </div>
    )
}

export default Review
