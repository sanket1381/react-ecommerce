import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

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
    background: 'url("https://thumbs.dreamstime.com/b/multicolored-cotton-threads-21049688.jpg")',
    display: "flex",
    justifyContent: 'left',
    alignItems: 'center',
    [props.theme.breakpoints.down("sm")]: {
        height: '250px',
        padding: '20px',
    },
    [props.theme.breakpoints.up("sm")]: {
        height: '500px',
    },

}));

export const SloganBanner = styled("div")((props) => ({
    background: 'white',
    display: "flex",
    justifyContent: 'center',
    borderRadius: '30px',
    opacity: '0.7',

    [props.theme.breakpoints.down("sm")]: {
        maxWidth: '300px',
        padding: '20px',
    },
    [props.theme.breakpoints.up("sm")]: {
        padding: '40px',
        marginLeft: '50px',
        maxWidth: '370px',
        width: '55%',

    },
    [props.theme.breakpoints.up("lg")]: {
        padding: '40px',
        marginLeft: '100px',
        width: '30%',
        maxWidth: '370px'

    },
}));