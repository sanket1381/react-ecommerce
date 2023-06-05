import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(theme => ({
    desktopwidth: {

        [theme.breakpoints.up("sm")]: {
            paddingLeft: '25px',
            paddingRight: '25px',
            maxWidth: '1120px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.up("lg")]: {
            paddingLeft: '0px',
            paddingRight: '0px',
        
        },
        [theme.breakpoints.up("xl")]: {
            paddingLeft: '0px',
            paddingRight: '0px',
            maxWidth: '1420px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    }
}))
