import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import InputBase from "@mui/material/InputBase";
export const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "right",
        alignItems: 'center',
        textAlign: "center",
        cursor: "pointer",
        [theme.breakpoints.down('sm')]: {
            padding: "0 5px",
        },
    },

    logo: {
        display: 'flex',
        flexDirection: 'column',
    },
    infinityLogo: {
        [theme.breakpoints.down('sm')]: {
            width: '58px',
            height: '19px',
            marginTop: '5px',
            textAlign: 'center',
            marginLeft: '10px'
        },
        [theme.breakpoints.up('sm')]: {
            width: '90px',
            height: '32px',
            marginTop: '5px',
            textAlign: 'center',
            marginLeft: '15px'
        },
        [theme.breakpoints.up('lg')]: {
            width: '126px',
            height: '33px',
            marginTop: '5px',
            textAlign: 'center',
            marginLeft: '20px'
        },

    },
    titleLogo: {
        [theme.breakpoints.down('sm')]: {
            width: '144px',
            height: '53px',
            marginTop: '-4px',
        },
        [theme.breakpoints.up('sm')]: {
            width: '206px',
            height: '83px',
            marginTop: '-4px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '298px',
            height: '104px',
            marginTop: '-4px',
        },
    },
    Search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "white",
        color: "blue",
        width: "100%",
        marginLeft: 0,
        display: "flex",
        borderRadius: "20px",
        border: '2px solid #000000',
        minHeight: '35px'
    },
    username: {
        color: '#2370f4',
        background: 'white',
        borderRadius: '50px',
        px: '10px',
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center',
        fontSize: '22px'
    },
    dropdisplay: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '10px'
    },

    responsivenav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        [theme.breakpoints.up('sm')]: {
            maxWidth: '1120px',
            marginLeft: '7px',
            marginRight: '7px',
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: '1120px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth: '1420px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    MyNavbarparent: {
        [theme.breakpoints.up("lg")]: {
            height: '145px',
            borderTop: '2px solid #FF00AE',

        },
    },
    desktopnav: {
        [theme.breakpoints.up("xl")]: {
            maxWidth: '1420px',
            marginLeft: 'auto',
            marginRight: 'auto'

        },
    },
    attributeValues: {
        display: 'flex',
        alignItems: 'center',
        '& input[type="checkbox"]': {
            marginRight: '8px',
        },
    },
    navBtn: {
        textAlign: 'right',
        background: '#FF00AE',
        padding: '10px 10px 10px 10px',
        fontSize: '14px',
        borderRadius: '50px',
        color: '#FFFFFF',
        border: '0px',
        cursor: 'pointer',
        fontWeight: '600'
    },
    loginBtn: {
        textAlign: 'right',
        background: '#6B6868',
        padding: '10px 10px 10px 10px',
        fontSize: '14px',
        borderRadius: '50px',
        color: '#FFFFFF',
        border: '0px',
        cursor: 'pointer',
        fontWeight: '600',
    },
    disclosure: {
        width: '100%',
        color: 'black',
        background: 'white',
        marginLeft: 'auto',
        paddingTop: '10px',
        paddingBottom: '27px',
        paddingLeft: 'auto',
    },
    disclosurebtn: {
        display: 'inline-flex',
        border: '0px',
        background: 'none',

    },
    disclosurebtncat: {
        display: 'inline-flex',
        border: '0px',
        background: 'none',
        marginLeft: '-6px'

    }

}));

export const MyNavbar = styled("div")((props) => ({
    backgroundColor: "#FFFFFF",
    color: "white",
    minWidth: "300px",
    borderTop: '2px solid #FF00AE',
    position: 'sticky',
    top: '0px',
    zIndex: '9999',
    boxShadow: '0 0px 5px rgba(0, 0, 0, 0.2)',


    [props.theme.breakpoints.down("sm")]: {
        height: '80px'
    },
    [props.theme.breakpoints.up("sm")]: {
        height: '119px',

    },
    [props.theme.breakpoints.up("lg")]: {
        height: '145px',

    },

}));
export const NumberCircle = styled("div")((props) => ({
    borderRadius: '50px',
    height: '24px',
    background: '#f5a9d2',
    width: '24px',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center'
}));

export const IconLink = styled("div")((props) => ({
    color: '#FFFFFF',
    height: '35px',
    width: '35px',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    background: '#6B6868',
    borderRadius: '50px'
}));



export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: "0 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "0 10px 10px 0",

    [theme.breakpoints.down("sm")]: {
        position: 'absolute',
        right: '0px',
        top: '25%',
    },
    [theme.breakpoints.up("sm")]: {
    },
}));

export const Search = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "white",
        color: "blue",
        width: "100%",
        marginLeft: 0,
        display: "flex",
        border: '1px solid #000000',
    },
    [theme.breakpoints.up("sm")]: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "white",
        color: "blue",
        width: "100%",
        marginLeft: 0,
        display: "flex",
        borderRadius: "20px",
        border: '1px solid #000000',
    },
}));

export const StyledInputBase = styled(InputBase)((props) => ({
    color: "#A7A7A7",

    "& .MuiInputBase-input": {
        padding: "10px 10px 10px 0",
        paddingLeft: `10px`,
        fontSize: '14px',

        [props.theme.breakpoints.down("lg")]: {
            width: "10ch",
        },
        [props.theme.breakpoints.up("lg")]: {
            width: "40ch",
        },
    },
}));




