import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
export const useStylesSidebar = makeStyles((theme: Theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'start',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '98vh',
        position: 'fixed'
    },
    aside: {
        display: 'flex',
        flexDirection: 'column',
    },
    logo: {
        fontSize: 32
    },
    sidebarList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        position: 'relative',
        left: -10
    },
    sidebarItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
        cursor: 'pointer',
        "&:hover": {
            "& div": {
                background: "rgba(15, 20, 25, 0.1)"
            },
            "& h6": {
                color: theme.palette.primary.main
            },
            "& svg path": {
                fill: theme.palette.primary.main
            }
        },
        "& a": {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            padding: "0 15px 0 10px",
            borderRadius: 30,
            color: 'inherit',
            textDecoration: 'none',
            height: "50px",
            transition: "all .7s ease-out",
        },
        "& div": {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            padding: "0 15px 0 10px",
            borderRadius: 30,
            height: "50px",
            transition: "all .7s ease-out",
        },
        "& svg": {
            marginRight: '20px'
        }
    },

    profile: {
        display: 'flex',
        padding: '9px',
        width: '250px !important ',
        justifyContent: 'space-between !important',
        alignItems: 'center !important',
        margin: '0 5px',
        cursor: 'pointer',
        borderRadius: "40px !important",
        transition: 'all .2s',
        marginLeft: '-15px',
        "&:hover": {
            background: "rgba(15, 20, 25, 0.2) !important",
        },
    },

    profileInfo: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 10,
        alignItems: 'start'
    },
    tweetUserName: {
        color: '#536471',
    },
    menuItem: {
        "& a": {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            borderRadius: 30,
            color: 'inherit',
            textDecoration: 'none',
            transition: "all .7s ease-out",
        }
    },
    menuWrapper: {
        padding: '9px 9px !important',
        borderRadius: '20px !important'
    }


}));
