import React, { useEffect } from "react";
import Checkout_c from "../../stories/containers/Checkout/Checkout_c";
import Footer from "../../stories/containers/Footer/Footer";
import Navbar from "../../stories/containers/Navbar/Navbar";
import SaleBanner from "../../stories/containers/SaleBanner/SaleBanner";
import { Helmet } from "react-helmet";
import SEO from "../../helemet-seo.config";

const Checkout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>{SEO.checkout.title}</title>
                <meta
                    name="description"
                    content={SEO.checkout.description}
                />
                <meta
                    name="keywords"
                    content={SEO.keywords}
                />
                <link rel="canonical" href={`${SEO.checkout.canonical.api}/checkout`} />
                <meta property="og:title" content={SEO.checkout.title} />
                <meta property="og:description" content={SEO.checkout.description} />
                <meta property="og:image" content={SEO.checkout.image} />
                <meta property="og:url" content={`${SEO.checkout.canonical.api}/checkout`} />
                <meta name="twitter:card" content={SEO.twitter.cardType} />
                <meta name="twitter:site" content={SEO.twitter.site} />
                <meta name="twitter:title" content={SEO.twitter.title} />
                <meta name="twitter:handle" content={SEO.twitter.handle} />
            </Helmet>
            <Checkout_c label="checkout" />

        </>
    );
};

export default Checkout;
