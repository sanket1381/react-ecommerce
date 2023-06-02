import { styled } from "@mui/material/styles";

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
    [props.theme.breakpoints.up("lg")]: {
        padding: '0px'
    },
    [props.theme.breakpoints.up("md")]: {
        marginTop: "30px",
    },

    [props.theme.breakpoints.up("xl")]: {
        maxWidth: '1420px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

}));
