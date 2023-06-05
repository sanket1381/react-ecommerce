import { styled } from "@mui/material/styles";

export const MyFooter = styled("div")((props) => ({
    backgroundColor: "#D9D9D9",
    marginTop: "10px",
    [props.theme.breakpoints.down("sm")]: {
        padding: "40px 20px 40px 20px",
        display: 'flex',
        flexDirection: 'column',
        textAlign: "left",
    },

    [props.theme.breakpoints.up("sm")]: {
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: "80px 100px 80px 100px",
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        maxWidth: '1120px',
        marginLeft: "auto",
        marginRight: "auto",
    },
    [props.theme.breakpoints.up("lg")]: {
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: "80px 120px 80px 120px",
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        maxWidth: '1420px',
        marginLeft: "auto",
        marginRight: "auto",
    },
}));
export const MyFooterParent = styled("div")((props) => ({
    backgroundColor: "#D9D9D9",marginTop:'30px'

}));

export const FooterTitle = styled("div")((props) => ({
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '24px'
}));

export const MyFooterLeft = styled("div")((props) => ({
    display: 'flex',
    flexDirection: 'row',
    [props.theme.breakpoints.down("sm")]: {

        marginTop: '20px'
    },
    [props.theme.breakpoints.up("sm")]: {
    },
}));
export const MyFooterCopyright = styled("div")((props) => ({
    marginTop: '20px',
    [props.theme.breakpoints.down("sm")]: {
        display: 'none'
    },
}));
export const MyFooterCopyrightMobile = styled("div")((props) => ({
    marginTop: '20px',
    [props.theme.breakpoints.up("sm")]: {
        display: 'none'

    },
}));
export const MyFooterAlign = styled("div")((props) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
}));
export const MyFooterRight = styled("div")((props) => ({
    display: 'flex',
    flexDirection: 'column',
    textAlign: "left",
    [props.theme.breakpoints.down("sm")]: {
        width: '100%'
    },
    [props.theme.breakpoints.up("sm")]: {
        width: '40%'
    },
}));