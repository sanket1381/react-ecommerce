import React, { useEffect, useState, useContext } from "react";
import Main from "../../stories/containers/Main/Main";
import { AppContext } from "../../context/app";
import HomeSlider from "../../stories/containers/HomeSlider/HomeSlider";
import MainBanner from "../../stories/containers/MainBanner/MainBanner";
import { getCategorysList, getCsm } from "../../services/apis/categorys";
import { getProductsList, getProductCsm } from "../../services/apis/products";
import { getBanner } from "../../services/apis/banner";
import { Helmet } from "react-helmet";
import SEO from "../../helemet-seo.config";
const Dashboard = (props) => {
    const [data, setData] = useState([]);
    // create states 
    const { appState } = useContext(AppContext);
    const [productData, setProductData] = useState([]);
    const [csmCategoryData, setCsmCategoryData] = useState([]);
    const [csmProductData, setCsmProductData] = useState([]);
    const [banner, setBannerData] = useState([]);
   //API call to get category and set to state
    useEffect(() => {
        const fetchData = async () => {
            const csmdata = await getCsm();
            const filteredData = csmdata.data.result.data.filter(item => {
                // check if any of the fields is empty
                return Object.values(item).every(val => val !== "");
            });
            setCsmCategoryData(filteredData);
        };
        fetchData().catch(console.error);
    }, []);

    //API call to get product and set to state
    useEffect(() => {
        const fetchData = async () => {
            const csmdata = await getProductCsm();
            setCsmProductData(csmdata.data.result.data);
        };
        fetchData().catch(console.error);
    }, []);

    //API call to get category list and set to state
    useEffect(() => {
        const fetchData = async () => {
            const categorydata = await getCategorysList(csmCategoryData);
            setData(categorydata.data?.result);
        };
        fetchData().catch(console.error);
    }, [csmCategoryData]);
    const [page, setPage] = useState(0);
    const [id, setCategoriesId] = useState("");

    //API call to get product list and set to state
    useEffect(() => {
        const fetchData = async () => {
            const start = page * 10;
            const productdata = await getProductsList(csmProductData, id, start, 10);
            setProductData(productdata.data.result);
        };
        fetchData().catch(console.error);
    }, [csmProductData]);
    
    //API call to get banner and set to state
    useEffect(() => {
        const fetchData = async () => {
            const bannerdata = await getBanner();
            const filteredData = bannerdata.data.result.filter(banner => banner.device === 'Desktop');
            const mobileData = bannerdata.data.result.filter(banner => banner.device === 'Mobile');
            setBannerData(filteredData);
        };
        fetchData().catch(console.error);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>{SEO.home.title}</title>
                <meta
                    name="description"
                    content={SEO.home.description}
                />
                <meta
                    name="keywords"
                    content={SEO.keywords}
                />
                <link rel="canonical" href={SEO.home.canonical.api} />
                <meta property="og:title" content={SEO.home.title} />
                <meta property="og:description" content={SEO.home.description} />
                <meta property="og:image" content={SEO.home.image} />
                <meta property="og:url" content={SEO.home.canonical.api} />
                <meta name="twitter:card" content={SEO.twitter.cardType} />
                <meta name="twitter:site" content={SEO.twitter.site} />
                <meta name="twitter:title" content={SEO.twitter.title} />
                <meta name="twitter:handle" content={SEO.twitter.handle} />
            </Helmet>


            <MainBanner Bannerdata={banner} />
            <HomeSlider Categorydata={data} />
            <Main AppName={appState.appName ? appState.appName : "AppName"} Productdata={productData} />
        </>
    );
};

export default Dashboard;
