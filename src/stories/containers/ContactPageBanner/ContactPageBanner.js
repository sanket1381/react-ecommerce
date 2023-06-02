import React from 'react'
import { HomeBanner, HomeBannerParent, SloganBanner, useStyles } from "./index.styles";

const ContactPageBanner = (props) => {
    const classes = useStyles(props);
    return (
        <HomeBannerParent>
            <HomeBanner>
              
            </HomeBanner>
        </HomeBannerParent>
    )
}

export default ContactPageBanner
