import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyMainMenu = styled("div")((props) => ({

    [props.theme.breakpoints.down("sm")]: {
        // margin: "10px",
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
        // marginLeft: 'auto',
        paddingLeft: '0px',
        paddingRight: '0px',
        textAlign: "center",
        // marginRight: 'auto',
    },
 [props.theme.breakpoints.up("xl")]: {
        display: "flex",
        justifyContent: "center",
        maxWidth: '1420px',
        // marginLeft: 'auto',
        paddingLeft: '0px',
        paddingRight: '0px',
        textAlign: "center",
        // marginRight: 'auto',
    },
}));
