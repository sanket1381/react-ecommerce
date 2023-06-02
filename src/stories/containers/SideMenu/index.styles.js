import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const MySideMenu = styled("div")((props) => ({
    textAlign: "left",
    padding: "30px 30px 30px 30px",
    margin: "0 0 0 5px ",
    width: "20%",
    height: "80vh",
    marginRight: '25px',

    [props.theme.breakpoints.up("sm")]: {
        borderRight: '1px solid #C4C1C1',

    },

    [props.theme.breakpoints.down("sm")]: {
        display: "none",

    },

}));

export const useStyles = makeStyles(theme => ({
    filterTitle: {
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '16px',
        color: '#000000'
    },
    attributeName: {
        fontSize: '22px',
        fontWeight: '500',
    },
    attributeValues: {
        marginLeft: '15px',
        marginTop: '10px',
        fontSize: '20px',
        fontWeight: '400'
    },
    singlefilter: {
        marginBottom: '10px'
    },
    childcategory: {
        fontSize: '20px',
        fontWeight: '400',
        textAlign: 'left',
        marginTop: '10px'
    },
    parentcategory: {
        fontSize: '22px',
        fontWeight: '500',
        textAlign: 'left'
    },
    sliderWidth: {
        [theme.breakpoints.down('sm')]: {
            width: '250px',

        },
        [theme.breakpoints.up('sm')]: {
            width: '170px',

        },
        [theme.breakpoints.up('lg')]: {
            width: '200px',

        },
    },
    priceTitle: {
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '16px',
        color: '#000000',
        marginTop: '12px',
        marginBottom: '12px',
    },
    categoryTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '16px',
        color: '#000000',
        marginTop: '12px',
        marginBottom: '12px',
    }

}));