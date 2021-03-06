import Box from '@mui/material/Box'
import React, { ReactElement } from 'react'
import { useStylesMessages } from '../../theme'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import classNames from 'classnames';
import format from 'date-fns/format';

interface Message {
    own?: boolean,
    text?: string,
    date?: Date,
    fullname?: string,
    username?: string,
    createdAt: string
}

function Message({ own, text, createdAt }: Message): ReactElement {
    const classes = useStylesMessages();
    return (
        <>
            <Box className={classNames(classes.message, { [classes.messageOwn]: own })}>
                {text}
            </Box>
            <span className={classes.messageDate}>{createdAt && format(new Date(createdAt), 'HH:mm')} <CheckOutlinedIcon sx={{ fontSize: 14 }} /></span>
        </>
    );
}

export default React.memo(Message)  
