import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
export const Reviewdesc = styled("div")((props) => ({
    padding: '10px 10px 10px 10px',
    lineHeight: '28px',
    [props.theme.breakpoints.down("sm")]: {
        fontSize: '20px',
        fontWeight: '500',
        color: 'black',
    },
    [props.theme.breakpoints.up("sm")]: {
        fontSize: '22px',
        fontWeight: '500',
        color: 'black',

    },
    [props.theme.breakpoints.up("lg")]: {
        fontSize: '24px',
        fontWeight: '500',
        color: 'black',

    },


}));

export const useStyles = makeStyles(theme => ({
    reviewerdata: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '20px'

    },
    reviewerName: {
        fontSize: '16px',
        lineHeight: '35px',
        fontWeight: '500',
        color: '#FF00AE',
        marginLeft: '20px'

    },
    reviewerCity: {
        fontSize: '16px',
        lineHeight: '35px',
        fontWeight: '500',
        color: '#939191',
        marginLeft: '20px'

    },
    sliderTitle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#000000',
        marginBottom: '22px',
        paddingRight: '12px',
        paddingLeft: '12px',

    },
    spaceSlider: {
        paddingLeft: '35px',
        paddingRight: '35px',

    },
    swiperwidth: {
        [theme.breakpoints.up('sm')]: {
            height: '425px',
            width: '450px',
        },
        [theme.breakpoints.up('lg')]: {
            height: '425px',
            width: '980px',
        },
    },
    maxWidth: {

        [theme.breakpoints.up('sm')]: {
            maxWidth: '1120px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth: '1420px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },

    }

}));