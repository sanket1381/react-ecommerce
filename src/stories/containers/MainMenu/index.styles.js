import { styled } from "@mui/material/styles";

export const MyMainMenu = styled("div")((props) => ({

    [props.theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
        paddingLeft: '11px',
        marginRight: 'auto',
    },
    [props.theme.breakpoints.up("sm")]: {
        display: "flex",
        justifyContent: "center",
        paddingLeft: '70px',
        paddingRight: '70px',
        marginLeft: 'auto',
        textAlign: "center",
        marginRight: 'auto',
    },
    [props.theme.breakpoints.up("lg")]: {
        display: "flex",
        justifyContent: "center",
        maxWidth: '1140px',
        paddingLeft: '0px',
        paddingRight: '0px',
        textAlign: "center",
    },
 [props.theme.breakpoints.up("xl")]: {
        display: "flex",
        justifyContent: "center",
        maxWidth: '1420px',
        paddingLeft: '0px',
        paddingRight: '0px',
        textAlign: "center",
    },
}));
