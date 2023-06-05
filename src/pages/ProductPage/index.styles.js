import { styled } from "@mui/material/styles";
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    paginations: {
        border: '1px solid gray',
        borderRadius: '50px',
        padding: '10px 15px 10px 15px',
        marginLeft: '10px',
        backgroundColor: 'white',
        cursor: 'pointer',
        [theme.breakpoints.up('sm')]: {
            marginTop: '20px',
        },
    },
    selectedPage: {
        backgroundColor: '#edebeb'
    },
    paginationposition: {
        width: '99%',
        display: 'flex',
        justifyContent: 'center'
    },
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

    attributeslist: {
        marginTop: '20px'
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
    },
    alignStars: {
        display: "flex",
        justifyContent: "left",
        alignItems: 'center',
    },
    noproductsParent: {
        border: '1px solid #c4c2c2',
        backgroundColor: '',
        width: 'fit-content',
        height: 'fit-content',
        padding: '10px 10px 10px 10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '50px',
        fontWeight: 600,
        fontSize: '22px'
    },
    mySelect: {
        width: '200px',
        height: "30px"
    },
    quantitySelector: {
        display: "inline - flex",
        alignItems: "center",
        marginBottom: '20px',
        border: '1px solid gray'
    },
    quantityButton: {
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
        marginLeft: "100px"
    },
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    card: {
        maxWidth: 345,
        margin: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
        },
    },
    media: {
        height: 140,
    },
    productTitle: {
        textAlign: 'left',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '16px',
        color: '#000000',
        marginTop: '16px',
        height: '30px'
    },
    priceTitle: {
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '24px',
        color: '#000000',
        marginTop: '8px',
        display: 'flex',
        alignItems: 'center',
    },
    productDescription: {
        fontSize: '14px',
        fontWeight: '400px',
        lineHeight: '16px',
        color: '#000000',
        marginTop: '27px',
        textAlign: 'left'
    },
    sliderspace: {
        [theme.breakpoints.up("sm")]: {
            width: '160px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        [theme.breakpoints.up("lg")]: {
            width: '180px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        [theme.breakpoints.up("xl")]: {
            width: '239px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        [theme.breakpoints.down("sm")]: {
            padding: '15px 15px 15px 15px'
        },
    },
    sliderBackground: {
        background: '#FEF0FA'
    },
    sliderflexBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    StarIcons: {
        display: 'flex',
        justifyContent: 'left',
        marginTop: '10px',
        color: '#000000',
        [theme.breakpoints.up("sm")]: {
            display: 'none'
        },
    },
    productparent: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.up("sm")]: {
            gap: '15px',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.up("md")]: {
            gap: '25px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.up("lg")]: {
            gap: '20px',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.down("sm")]: {
            justifyContent: 'space-between',
        },
    },
    StarIconsdesktop: {
        display: 'flex',
        justifyContent: 'left',
        marginTop: '10px',
        color: '#000000',
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    gridPosition: {
        [theme.breakpoints.up("md")]: {
            width: '99%',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    },
    categoryList: {
        [theme.breakpoints.down("sm")]: {
            width: '165px',
            textAlign: 'center',
            paddingTop: '15px',
            height: '280px',
        },
        [theme.breakpoints.up("sm")]: {
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        [theme.breakpoints.up("lg")]: {
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    },
    categoryImage: {
        [theme.breakpoints.down("sm")]: {
            width: '135px',
            height: '140px',
            marginLeft: 'auto',
            marginRight: 'auto'

        },
        [theme.breakpoints.up("sm")]: {
            width: '160px',
            height: '160px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        [theme.breakpoints.up("lg")]: {
            width: '180px',
            height: '180px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        [theme.breakpoints.up("xl")]: {
            width: '239px',
            height: '200px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    },
    FilterButton: {
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '16px',
        background: '#FF00AE',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '10px 0px 10px 0px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    spaceBox: {
        flex: '0 0 calc(50% - 1rem)',
        maxWidth: 'fit-content',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '2rem',
        },
    },
    selectedcat: {
        fontSize: '22px',
        fontWeight: '700',
        color: '#FF00AE',
        marginBottom: '20px'
    },
    productpageheader: {
        display: 'flex',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.up("sm")]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
    },
    pricefilter: {
        display: 'flex',
        textAlign: 'left',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginTop: '20px',
        marginBottom: '20px',
        '& input': {
            margin: '0 10px',
        },
    },
    display: {
        display: 'block'
    },
    notdisplay: {
        display: 'none'
    }
}));

export const MyStyledGrid = styled(Grid)((props) => ({
    display: 'block',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: '700px',
    [props.theme.breakpoints.down("md")]: {
        padding: '10px'
    },
    [props.theme.breakpoints.up("xl")]: {
        maxWidth: '1420px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

export const MySideMenu = styled("div")((props) => ({
    textAlign: "left",
    margin: "0 0 0 5px ",
    width: "20%",
    minHeight: "100vh",
    height: 'fit-content',
    marginRight: '25px',
    [props.theme.breakpoints.up("sm")]: {
        borderRight: '1px solid #C4C1C1',
        padding: "0px 30px 30px 30px",
    },
    [props.theme.breakpoints.up("lg")]: {
        borderRight: '1px solid #C4C1C1',
        padding: "0px 30px 30px 0px",
    },

    [props.theme.breakpoints.down("sm")]: {
        display: "none",
    },

}));

export const SliderBreak = styled("div")((props) => ({
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '42px',
    [props.theme.breakpoints.down("sm")]: {
        width: '350px'
    },
}));

export const HomeTitle = styled("div")((props) => ({
    fontSize: '14px',
    fontWeight: '600',
    color: 'black',
    lineHeight: '16px',
    marginBottom: '21px',
    textAlign: 'left'
}));

export const StyledTitle = styled(Grid)((props) => ({
    textAlign: 'left',
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '30px',
    lineHeight: '21px'
}));

export const MyMain = styled("div")((props) => ({
    marginLeft: 'auto',
    marginRight: 'auto',
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    [props.theme.breakpoints.down("sm")]: {
        width: '100%',
    },
    [props.theme.breakpoints.up("sm")]: {
        maxWidth: '1120px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    [props.theme.breakpoints.up("xl")]: {
        maxWidth: '1420px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    [props.theme.breakpoints.up("xl")]: {
        maxWidth: '1420px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));
