import { Link, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { red } from '@mui/material/colors';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

const SideBarOption = ({ option }) => {


    return (
        <NavLink
            to={option.to}
            sx={{ backgroundColor: '#000' }}
        >
            <ListItem disablePadding
                sx={{}}
            >
                <ListItemButton  >
                    <ListItemIcon>
                        {option.icon}
                    </ListItemIcon>
                    <Typography textTransform={'uppercase'} color={'black'} >
                        <ListItemText primary={option.title} />
                    </Typography>
                </ListItemButton>

            </ListItem>
        </NavLink>
    )
}

export default SideBarOption