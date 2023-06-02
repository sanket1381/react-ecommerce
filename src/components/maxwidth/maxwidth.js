import { styled } from "@mui/material/styles";

export const MaxWidth = styled("div")((props) => ({
    [props.theme.breakpoints.down("sm")]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '700px'
    },
    [props.theme.breakpoints.up("sm")]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1090px'
    },
    [props.theme.breakpoints.up("xl")]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1280px'
    },
}))