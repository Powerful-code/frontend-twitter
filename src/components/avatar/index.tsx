import React, { ReactElement } from 'react'
import Avatar from '@mui/material/Avatar';
import { UserType } from '../../store/ducks/user/contracts/state';
import { useMediaQuery } from '@mui/material';

interface AvatarProps {
    user?: {
        username: string;
        fullname: string;
        avatar?: string;
        _id: string;
    } | UserType,
    fullname?: string,
    size?: number,
    avatar?: string,
}


const AvatarComponent: React.FC<AvatarProps> = ({ user, fullname, size, avatar  }: AvatarProps): ReactElement => {
    const sm = useMediaQuery('(max-width:600px)');
    function stringToColor(string: string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string?.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
        return color;
    }
    function stringAvatar(name: string) {
        return {
            sx: {
                bgcolor: stringToColor(name),
                width: !!size ? size : sm ? 44: 48,
                height: !!size ? size : sm ? 44: 48,
               
            },
            children: `${name?.split(' ')[0][0]}${name?.split(' ')?.length >= 2 ? name.split(' ')[1][0] : ''}`,
        };
    }
    return (
        <Avatar {...stringAvatar(user?.fullname ? user?.fullname : fullname)} src={user?.avatar ? user?.avatar : avatar } />
    )
}

export default AvatarComponent
