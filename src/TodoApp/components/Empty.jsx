import React from 'react'
import { Box } from '@mui/system';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import Typography from '@mui/material/Typography';

const Empty = () => {
    return (
        <Box display={'flex'}
            width={'100vw'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <AutoDeleteIcon />
            <Typography> EMPTY </Typography>
        </Box>
    )
}

export default Empty