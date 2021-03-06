import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStylesMessages } from '../../theme';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { instance } from '../../../../core/axios';
import { UserType } from '../../../../store/ducks/user/contracts/state';
import AvatarComponent from '../../../../components/avatar';
import BackButton from '../../../../components/BackButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch } from 'react-redux';
import { setConversationCurrent } from '../../../../store/ducks/Messages/actions';

interface MessageTopProps {
    receiverId?: string
}

const MessageTop: React.FC<MessageTopProps> = ({ receiverId }: MessageTopProps): ReactElement => {
    const classes = useStylesMessages()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, setUser] = React.useState<UserType>(null)
    const md = useMediaQuery('(max-width:900px)');
    const toUserInfo = () => {
        navigate(`/profile/${user?._id}`)
    }

    React.useEffect(() => {
        if (receiverId !== undefined) {
            const getUser = async () => {
                try {
                    const res = await instance.get(`users/withoutDetails/${receiverId}`)
                    setUser(res.data.data)
                } catch (e) {
                    console.log(e)
                }
            }
            getUser()
        }
    }, [receiverId])

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" style={{ padding: '10px 10px' }}>
            <Box display="flex" alignItems="center">
           {md && <div onClick={() => dispatch(setConversationCurrent(undefined))}><BackButton /></div> }
             {user && <AvatarComponent user={user} />}
                <Box display="flex" flexDirection="column" style={{ marginLeft: 10 }}>
                    <Typography variant="body1" color="text.secondary" className={classes.fullname}>{user?.fullname}</Typography>
                    <Typography variant="body2" className={classes.username}>@{user?.username}</Typography>
                </Box>
            </Box>
            <IconButton onClick={toUserInfo}>
                <InfoOutlinedIcon />
            </IconButton>
        </Box>
    )
}

export default MessageTop
