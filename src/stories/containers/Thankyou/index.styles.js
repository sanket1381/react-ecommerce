import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const MyThankYou = styled("div")((props) => ({
    textAlign: "center",


    [props.theme.breakpoints.down("sm")]: {
        padding: '13px',

    },
    [props.theme.breakpoints.up("sm")]: {
        padding: '32px',
        maxWidth: '1120px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    [props.theme.breakpoints.up("lg")]: {
        padding: '0px',

    },
    [props.theme.breakpoints.up("xl")]: {
        maxWidth: '1420px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },


}));
export const useStyles = makeStyles(theme => ({
    inputFields: {
        [theme.breakpoints.down("sm")]: {
            marginTop: '10px'
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: '29px'

        },
    },
    orderlistadd: {

    },
    thankText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '24px',
        color: '#2AC957',
        marginTop: '10px',
        marginBottom: '10px',
        [theme.breakpoints.up("sm")]: {
            marginTop: '25px',
            marginBottom: '0px',

        }
    },
    amountTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'left',
        paddingTop: '20px',
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '16px',
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '21px',
        },
    },
    priceperpiece: {
        fontSize: '12px',
        fontWeight: '600',
        lineHeight: '14px',
        marginTop: '6px',
        display: 'flex',
        alignItems: 'center',

    },
    quantitypiece: {
        fontSize: '12px',
        fontWeight: '700',
        lineHeight: '14px',
        marginTop: '6px',
        display: 'flex',
        textAlign: 'right'
    },
    currancy: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkoutButton: {
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '16px',
        background: '#FF00AE',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '13px 0px 13px 0px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mySelect: {
        width: '200px',
        height: "30px"
    },
    quantitySelector: {
        display: "inline - flex",
        alignItems: "center",
        marginBottom: '20px',
        border: '1px solid gray',
        borderRadius: '50px'
    },
    varablesTitle: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '14px',
        color: '#000000',
        marginTop: '6px',
        marginBottom: '6px'
    },
    quantityButton1: {
        display: 'inline-block',
        padding: "0.3rem 0.5rem",
        fontSize: "1rem",
        fontWeight: "bold",
        textAlign: "center",
        color: "black",
        backgroundColor: "#d2d4d2",
        border: "none",
        cursor: "pointer",
        transition: "all 0.2s",
        borderTopLeftRadius: '50px',
        borderBottomLeftRadius: '50px'
    },
    quantityButton2: {
        display: 'inline-block',
        padding: "0.3rem 0.5rem",
        fontSize: "1rem",
        fontWeight: "bold",
        textAlign: "center",
        color: "black",
        backgroundColor: "#d2d4d2",
        border: "none",
        cursor: "pointer",
        transition: "all 0.2s",
        borderTopRightRadius: '50px',
        borderBottomRightRadius: '50px'
    },
    middleCart: {
        marginLeft: '20px',
        marginRight: '20px',
        [theme.breakpoints.up("sm")]: {
            width: '46%'
        },
        [theme.breakpoints.up("sm")]: {
            width: '40%'
        },
    },
    size: {
        marginLeft: '40px'
    },
    quantityNumber: {
        display: "inline-block",
        margin: "0 0.5rem",
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
    alignSizeQuantity: {
        display: 'flex',

    },
    Quantity: {
        [theme.breakpoints.down("sm")]: {
            width: 'fit-content',
        },
        [theme.breakpoints.up("sm")]: {
        },
    },
    cartdeletes: {
        display: 'flex',
        textAlign: 'left',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontWeight: '400',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            display: 'none'
        },
        [theme.breakpoints.up("sm")]: {
            width: '30%',
        },

    },
    quantitydisplay: {
        display: 'flex',
        flexDirection: 'column',
    },

    qtyperpiece: {
        fontSize: '12px',
        fontWeight: '700',
        lineHeight: '14px',
        marginTop: '6px',
        textAlign: 'right'
    },
    cartList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '1px solid black',
        padding: '10px',
        marginTop: '15px'
    },
    cartTitle: {
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '16px'
    },
    cartDesc: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '14px',
        marginTop: '6px',
    },
    alignStars: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '16px',
        alignItems: 'center',
        textAlign: 'right'
    },
    alignStar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '16px',
        alignItems: 'center',
        textAlign: 'right'
    },
    aligncurrency: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '16px',
        alignItems: 'center'
    },
    priceDetails: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        border: '1px solid #C4C1C1',
        [theme.breakpoints.down("sm")]: {
            marginTop: '20px'
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: '45px'
        },
    },
    priceDetailsTilte: {
        borderBottom: '1px solid #C4C1C1',
        textAlign: 'left',
        paddingBottom: '10px',
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '16px',
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '21px',
        },
    },
    cartHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cartImg: {
        [theme.breakpoints.down("sm")]: {
            width: '38px',
            height: '41px'
        },
        [theme.breakpoints.up("sm")]: {
            width: '105px',
            height: '136px'
        },

    },
    imageparent: {
        [theme.breakpoints.up("sm")]: {
            width: '20%',
        },
    },
    estimatedTltle: {
        fontWeight: '400',
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            lineHeight: '17px'
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '20px',
            lineHeight: '24px'
        },
    },
    estimatedTltle1: {
        fontWeight: '400',
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            lineHeight: '17px',
            marginLeft: '20px'

        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '20px',
            lineHeight: '24px',
            marginLeft: '40px'

        },
    },
    orderListhead: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderListhead1: {
        display: 'flex',
        flexDirection: 'row'
    },
    ordererror: {
        color: 'red',
        fontWeight: '700',
        textAlign: 'center',

        [theme.breakpoints.down("sm")]: {
            marginTop: '70px',
            marginBottom: '70px',
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: '100px',
            marginBottom: '100px',
        },
    }
}))
export const OrderList = styled(Paper)((props) => ({
    padding: '20px',
    border: '1px solid #939191',
    textAlign: 'left',
    [props.theme.breakpoints.down("sm")]: {
        marginTop: '29px'
    },
    [props.theme.breakpoints.up("sm")]: {
        marginTop: '54px'
    },
}));