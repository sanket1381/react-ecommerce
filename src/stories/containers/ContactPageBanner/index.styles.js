import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import URL from "../../../img-url.config";

export const useStyles = makeStyles(theme => ({
    slogan: {
    },
    slogantitle: {
        fontSize: '28px',
        fontWeight: '700',
    },
    slogandesc: {
        fontSize: '20px',
        fontWeight: '500',
        color: '#f030a3',
        marginTop: '20px',
    },



}));
export const HomeBanner = styled("div")((props) => ({
    display: "flex",
    justifyContent: 'left',
    alignItems: 'center',
    [props.theme.breakpoints.down("sm")]: {
        height: '250px',
        padding: '20px',
    },
    [props.theme.breakpoints.up("sm")]: {
        height: '400px',
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

}));
export const HomeBannerParent = styled("div")((props) => ({
    background: `url(${URL.contact.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'

}));

