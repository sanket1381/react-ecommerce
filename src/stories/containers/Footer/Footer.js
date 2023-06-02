import React from "react";
import PropTypes from "prop-types";
import { FooterTitle, MyFooter, MyFooterAlign, MyFooterCopyright, MyFooterCopyrightMobile, MyFooterLeft, MyFooterParent, MyFooterRight } from "./index.styles";
import { Box } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { MaxWidth } from "../../../components/maxwidth/maxwidth";
import { useLocation } from "react-router-dom";
import './footer.css';
function Footer(props) {
    const currentYear = new Date().getFullYear();
    return (
        <MyFooterParent>
            <MyFooter {...props} onClick={props.onClick}>
                <MyFooterRight>

                    <FooterTitle sx={{ mb: '20px' }}>Contact Us</FooterTitle>
                    <Box sx={{ width: { sm: '60%', fontSize: '14px', fontWeight: '400' } }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, maiores!</Box>
                    <MyFooterAlign className="alignment">
                        {/* <a href="anantisaboo1980@gmail.com" target="_blank"> */}
                        <MarkunreadIcon sx={{ mr: '20px', borderRadius: '50px', background: '#2AC957', my: '20px', color: 'white', p: '4px', fontSize: '31px', cursor: 'pointer' }} />anantisaboo1980@gmail.com
                        {/* </a> */}
                    </MyFooterAlign>
                    <MyFooterAlign className="alignment">
                        <a href="https://api.whatsapp.com/send?phone=9890367761" target="_blank">
                            <WhatsAppIcon sx={{ mr: '20px', borderRadius: '50px', background: '#2AC957', color: 'white', p: '4px', fontSize: '31px' }} />+91 9890367761
                        </a>
                    </MyFooterAlign>
                </MyFooterRight>
                <Box>
                    <MyFooterLeft >
                        <FooterTitle>Follow Us</FooterTitle>
                        <div>
                            <span>
                                <a href="https://www.facebook.com/craftmegastore/" target="_blank">
                                    <FacebookIcon sx={{ ml: '30px', borderRadius: '50px', background: '#1877f2', color: 'white', p: '4px', fontSize: '31px' }} />
                                </a>
                            </span>
                            <span>
                                <a href="https://instagram.com/craftmegastore?igshid=ZDdkNTZiNTM=" target="_blank">
                                    <InstagramIcon sx={{ mx: '10px', borderRadius: '50px', background: '#C13584', color: '#ffffff', p: '4px', fontSize: '31px', boxShadow: '0px 0px 6px #2AC957' }} />
                                </a>
                            </span>
                            <span>
                                <a href="https://www.youtube.com/YOUR_CHANNEL_NAME" target="_blank">
                                    <YouTubeIcon sx={{ borderRadius: '50px', background: '#FF0000', color: '#ffffff', p: '4px', fontSize: '31px', boxShadow: '0px 0px 6px #FF0000' }} />
                                </a>
                            </span>

                        </div>
                    </MyFooterLeft>
                    <MyFooterCopyright><MyFooterAlign><div><CopyrightIcon /></div><div>{currentYear} All rights reserved</div></MyFooterAlign></MyFooterCopyright>
                </Box>

                <MyFooterCopyrightMobile><MyFooterAlign><div><CopyrightIcon /></div><div>{currentYear} All rights reserved</div></MyFooterAlign></MyFooterCopyrightMobile>
            </MyFooter>
        </MyFooterParent>

    );
}

Footer.propTypes = {
    bgcolor: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Footer;
