import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
export const useStylesAddForm = makeStyles((theme: Theme) => ({
    addTweetForm: {
        display: 'flex',
    },
    tweetHeaderForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginLeft: 20
    },
    textarea: {
        border: 'none',
        outline: 'none',
        width: '100%',
        resize: 'none',
        fontSize: 22,
        fontFamily: "Rubik",
        "&:placeholder": {
            fontSize: 22,
            fontWeight: 500,
        }
    },
    tweetHeaderFormActions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Progress: {
        position: 'relative',
        "& span:nth-child(1)": {
            position: 'absolute',
        }
    },
    ImagesList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 50%) !important',
        gridTemplateRows: 'repeat(2, 50%) !important',
        gridGap: '5px',
        maxHeight: 300
    },
    image: {
        width: '100%',
        height: '140px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
    },
    closeIcon: {
        position: 'absolute',
        top: 5,
        width: '30px',
        height: '30px',
        right: -5,
        background: 'rgb(143 143 143 / 81%) !important'
    }
}));