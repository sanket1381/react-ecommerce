import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const MyPayment = styled("div")((props) => ({
    textAlign: "center",


    [props.theme.breakpoints.down("sm")]: {
        padding: '13px',

    },
    [props.theme.breakpoints.up("sm")]: {
        padding: '32px',
        maxWidth: '1140px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    [props.theme.breakpoints.up("lg")]: {
        padding: '0px',

    },

    [props.theme.breakpoints.up("xl")]: {
        padding: '32px',
        maxWidth: '1420px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

}));
export const useStyles = makeStyles(theme => ({
    inputFields: {
        [theme.breakpoints.down("sm")]: {
            marginTop: '20px'
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: '29px'

        },
    },
    display: {
        [theme.breakpoints.up("lg")]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    },
    checkouthead: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    contactTitle: {
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '16px',
            color: '#000000'
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '20px',
            color: '#000000'
        },
    },
    payable: {
        fontSize: '26px',
        marginTop: '10px',
        textAlign: 'left',

    },
    payabletext: {
        fontSize: '15px',
    },
    netBtn: {
        [theme.breakpoints.down("sm")]: {
            marginTop: '10px'

        },
    },
    paymentLayout: {
        [theme.breakpoints.up("sm")]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    },
    cardData: {
        [theme.breakpoints.up("sm")]: {
            width: '47%',
        },
    },
    selectCard: {
        [theme.breakpoints.up("sm")]: {
            width: '47%',
            minHeight: '300px',
            background: '#F1F1F1'
        },
    },
    saveDetails: {
        textAlign: 'left',
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    shippingtitle: {
        textAlign: 'left',
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '16px',
            color: '#000000',
            marginTop: '30px',
            marginBottom: '27px',
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '20px',
            color: '#000000',
            marginTop: '55px',
            marginBottom: '29px',
        },
    },
    multipleInputsRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10px'
    },
    userdesc: {
        textAlign: 'left',
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '16px',
            color: '#000000',
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '20px',
            color: '#000000',
        },
    },
    cartList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '1px solid black',
        padding: '10px',
        [theme.breakpoints.down("sm")]: {
            marginTop: '41px'
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: '70px'
        },
        [theme.breakpoints.up("lg")]: {

            marginTop: '0px'

        },
    },
    cartParent: {
        [theme.breakpoints.up("lg")]: {
            width: '40%'
        },
    },
    cartDetails: {
        [theme.breakpoints.up("lg")]: {
            width: '100%'
        },
    },
    userDetails: {
        [theme.breakpoints.up("lg")]: {
            width: '55%'
        },

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
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '16px'
    },
    alignStar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '16px'
    },
    qtyperpiece: {
        fontSize: '12px',
        fontWeight: '700',
        lineHeight: '14px',
        marginTop: '6px',
        textAlign: 'right'
    },
    quantitydisplay: {
        display: 'flex',
        flexDirection: 'column',
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
        [theme.breakpoints.up("lg")]: {
            width: '51px',
            height: '63px'
        },
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
    spaceBottom: {
        paddingBottom: '20px'
    },
    amountTitle1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'left',
        paddingTop: '20px',
        borderTop: '1px solid #C4C1C1',

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
    payBtn: {
        textAlign: 'left',
        background: '#FF00AE',
        padding: '10px 30px 10px 30px',
        mt: '20px', fontSize: '18px',
        borderRadius: '50px',
        border: '0px',
        color: '#FFFFFF',
        marginTop: '20px',
        cursor: 'pointer'
    },
    middleCart: {
        textAlign: 'left',
        width: '65%'
    },
    priceperpiece: {
        fontSize: '12px',
        fontWeight: '600',
        lineHeight: '14px',
        marginTop: '6px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    TabView: {
        [theme.breakpoints.up("lg")]: {
            display: 'none'
        },
    },
    DesktopView: {
        [theme.breakpoints.down("lg")]: {
            display: 'none'
        },

        [theme.breakpoints.up("lg")]: {
            display: 'block',
            width: '50%',
            maxWidth: '1140px'
        },
    },
    mobileview: {
        display: 'block',
        [theme.breakpoints.up("lg")]: {
            display: 'none'
        },
    }
}))