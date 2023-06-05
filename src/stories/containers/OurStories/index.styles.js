import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    storiestitle: {
        fontSize: '16px',
        fontWeight: '700',
        [theme.breakpoints.down("sm")]: {
            marginTop: '20px',
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: '40px',
        },
        [theme.breakpoints.up("lg")]: {
            marginTop: '50px'

        },
    },
    storiesdesc: {
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '35px',
        color: '#000000',
        marginTop: '27px',
    },
    numbercirclespacing: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    datatitle: {
        fontSize: '28px',
        fontWeight: '700',
        marginTop: '20px',
        textAlign: 'center',
        [theme.breakpoints.down("sm")]: {
            marginTop: '10px',
            fontSize: '16px',
            fontWeight: '700',
        },
    },

    storyflex: {
        [theme.breakpoints.up("lg")]: {
            display: 'flex',
            flexDirection: 'row',
            width: '85%',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '1280px'


        },

        [theme.breakpoints.up("xl")]: {
            display: 'flex',
            flexDirection: 'row',
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '1440px'


        },

    }
}));

export const MyStory = styled("div")((props) => ({

    [props.theme.breakpoints.down("sm")]: {
        paddingLeft: '12px',
        paddingRight: '12px',
    },
    [props.theme.breakpoints.up("sm")]: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    [props.theme.breakpoints.up("lg")]: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1280px',

    },
}));

export const MyStoryImage = styled("div")((props) => ({

    [props.theme.breakpoints.down("sm")]: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    [props.theme.breakpoints.up("sm")]: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    [props.theme.breakpoints.up("lg")]: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1280px',

    },
}));

export const MyStoryData = styled("div")((props) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'

}));
export const NumberCircle = styled("div")((props) => ({
    borderRadius: '50px',
    height: '60px',
    background: '#f5a9d2',
    width: '60px',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center'
}));
