import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/HomeOutlined';
import Grid3x3OutlinedIcon from '@mui/icons-material/Grid3x3Outlined';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MessageIcon from '@mui/icons-material/MailOutlineOutlined';
import ProfileIcon from '@mui/icons-material/PermIdentityOutlined';
import ListIcon from '@mui/icons-material/ListAltOutlined';
import BookmarkIcon from '@mui/icons-material/BookmarkBorder';
import TwitterIcon from '@mui/icons-material/Twitter';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import { ModalBlock } from '../Modal';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom'
import { AddTweetForm } from '../AddTweetForm';
import { useStylesSidebar } from './theme';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from '../../store/ducks/user/selectors'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Logout from '@mui/icons-material/Logout';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { signOut } from '../../store/ducks/user/actions'
export const Sidebar: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch()
    const classes = useStylesSidebar()
    const user = useSelector(selectData)

    const [visibleAddTweetModal, setVisibleAddTweetModal] = useState<boolean>(false)

    const handleClick = () => {
        setVisibleAddTweetModal(true)
    }
    const onClose = () => {
        setVisibleAddTweetModal(false)
    }


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClickProfile = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const signOutClick = () => {
        dispatch(signOut())
    }
    return (
        <div>
            <div className={classes.wrapper}>
                <ul className={classes.sidebarList}>
                    <li>
                        <Link to="/home">
                            <IconButton color="primary">
                                <TwitterIcon fontSize="large" className={classes.logo} color="primary" />
                            </IconButton>
                        </Link>
                    </li>
                    <li className={classes.sidebarItem}>
                        <Link to="/home">
                            <HomeIcon sx={{ fontSize: 27 }} />
                            <Hidden lgDown>
                                <Typography variant="h6">Главная</Typography>
                            </Hidden>
                        </Link>
                    </li>
                    <li className={classes.sidebarItem}>
                        <div>
                            <Grid3x3OutlinedIcon sx={{ fontSize: 27 }} />
                            <Hidden lgDown>
                                <Typography variant="h6">Обзор</Typography>
                            </Hidden>
                        </div>
                    </li>
                    <li className={classes.sidebarItem}>
                        <div>
                            <NotificationIcon sx={{ fontSize: 27 }} />
                            <Hidden lgDown>
                                <Typography variant="h6">Уведомления</Typography>
                            </Hidden>
                        </div>
                    </li>
                    <li className={classes.sidebarItem}>
                        <div>
                            <MessageIcon sx={{ fontSize: 27 }} />
                            <Hidden lgDown>
                                <Typography variant="h6">Сообщения</Typography>
                            </Hidden>
                        </div>
                    </li>
                    <li className={classes.sidebarItem}>
                        <div>
                            <BookmarkIcon sx={{ fontSize: 27 }} />
                            <Hidden lgDown>
                                <Typography variant="h6">Закладки</Typography>
                            </Hidden>
                        </div>
                    </li>
                    <li className={classes.sidebarItem}>
                        <div>
                            <ListIcon sx={{ fontSize: 27 }} />
                            <Hidden lgDown>
                                <Typography variant="h6">Списки</Typography>
                            </Hidden>
                        </div>
                    </li>
                    <li className={classes.sidebarItem}>
                        <Link to={`/home/profile/${user._id}`}>
                            <ProfileIcon sx={{ fontSize: 27 }} />
                            <Hidden lgDown>
                                <Typography variant="h6">Профиль</Typography>
                            </Hidden>
                        </Link>
                    </li>
                    <li className={classes.sidebarItem}>
                        <div>
                            <MessageIcon sx={{ fontSize: 27 }} />
                            <Hidden lgDown>
                                <Typography variant="h6">Еще</Typography>
                            </Hidden>
                        </div>
                    </li>
                    <li className={classes.sidebarItem}>
                        <Button onClick={handleClick} variant="contained" fullWidth>Твитнуть</Button>
                    </li>
                </ul>

                <IconButton className={classes.profile} onClick={handleClickProfile}>
                    <Box display="flex" >
                        <Avatar alt={user.fullname} src="/static/images/avatar/1.jpg" />
                        <div className={classes.profileInfo}>
                            <Typography variant="body1">{user.fullname}</Typography>
                            <Typography variant="body2" className={classes.tweetUserName}>@{user.username}</Typography>
                        </div>
                    </Box>

                    <MoreHorizIcon />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: -2,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                bottom: -14,
                                left: '50%',
                                width: 15,
                                height: 15,
                                bgcolor: 'background.paper',
                                transform: 'translate(-50%, -50%)rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                >
                    <MenuItem className={classes.menuItem}>
                        <Link to={`/home/profile/${user._id}`}>
                            <Avatar /> Profile
                        </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => signOutClick()}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                                 Logout
                        </MenuItem>
                </Menu>

            </div>
            <ModalBlock title="" visible={visibleAddTweetModal} onClose={onClose}>
                <div style={{ width: 540 }}>
                    <AddTweetForm maxRows={15} minRows={4} />

                </div>
            </ModalBlock>
        </div>
    )
}
