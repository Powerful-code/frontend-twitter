import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchTweets, setAddFormLoadingState } from '../../../../store/ducks/tweets/actionCreators';
import { useStylesHome } from './theme'
import { TweetComponent } from '../../../../components/Tweet';
import { AddTweetForm } from '../../../../components/AddTweetForm';
import { AddFormState, Tweet} from '../../../../store/ducks/tweets/contracts/state';
import { useDispatch, useSelector } from 'react-redux';
import { selectTweetsItems, selectIsTweetLoading, selectIsTweetDeleted } from '../../../../store/ducks/tweets/selectors';

const Index = () => {
    const dispatch = useDispatch()
    const classes = useStylesHome()
    const tweets = useSelector(selectTweetsItems)
    const loading = useSelector(selectIsTweetLoading)
    const isDeleted = useSelector(selectIsTweetDeleted)


    const [snackbarState, setSnackbarState] = useState<{ text: string, type: 'error' | 'success' | 'info' }>()

    React.useEffect(() => {
        dispatch(fetchTweets())
        // eslint-disable-next-line
    }, [])

    React.useEffect(() => {
        if (isDeleted) {
            setSnackbarState({ text: 'Ваш твит удален', type: 'info' })
        }
    }, [isDeleted])

    const handleClose = () => {
        dispatch(setAddFormLoadingState(AddFormState.NEVER))
    }

    return (
        <section className={classes.wrapper}>

            <Snackbar open={isDeleted} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity={snackbarState?.type} sx={{ width: '100%' }}>
                    {snackbarState?.text}
                </Alert>
            </Snackbar>

            <Box className={classes.tweets} >
                    <div className={classes.tweetsHeader}>
                        <Typography variant="h6" style={{ fontWeight: 700, fontSize: 20 }}>Главная</Typography>
                        <IconButton>
                            <AutoAwesomeIcon />
                        </IconButton>
                    </div>
                    <div style={{ padding: 15 }}>
                        <AddTweetForm />
                    </div>
                    {
                        loading ? <div style={{ textAlign: 'center', marginTop: 50 }}><CircularProgress disableShrink /></div> : Array.isArray(tweets) && tweets.map((tweet: Tweet) => {
                            return <TweetComponent
                                key={tweet._id}
                                user={tweet.user}
                                _id={tweet._id}
                                text={tweet.text}
                                createdAt={tweet.createdAt}
                                images={tweet.images}
                                likes={tweet.likes}
                                comment={tweet.comment}
                                bookmarks={tweet.bookmarks}
                            />
                        })
                    }
            </Box>
        </section>
    )
}

export default Index