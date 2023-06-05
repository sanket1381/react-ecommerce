import styled from "../../../theme";

export const Image = styled("div")((props) => ({
    padding: '25px',
    [props.theme.breakpoints.down("sm")]: {
        display: 'block',
        width: "265px", height: "215px", marginLeft: 'auto',
        marginRight: 'auto',

    },
    [props.theme.breakpoints.up("sm")]: {
        display: 'none'
    },

}));

export const Image1 = styled("div")((props) => ({
    [props.theme.breakpoints.down("sm")]: {
        display: 'none',
    },
    [props.theme.breakpoints.up("sm")]: {
        display: 'block',
        width: "614px", height: "423px",
        marginLeft: 'auto',
        marginRight: 'auto',
    },

}));
