import { Box, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import AssignmentLateRoundedIcon from '@mui/icons-material/AssignmentLateRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import LockPersonRoundedIcon from '@mui/icons-material/LockPersonRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { redirect, useNavigate } from 'react-router-dom';
import { useList } from '../../Hooks/useList';
import { useEffect } from 'react';



const ListItemElement = ({ list, handleDeleteList, handleToggleList, handlePrivacyList, }) => {

    // const {
    //     handleDeleteList,
    //     handleToggleList,
    //     handlePrivacyList,
    // } = useList();


    const navigate = useNavigate();

    return (
        <ListItem disablePadding sx={{ borderBottom: '1px solid black', width: '100vw' }} >
            <ListItemButton
                onClick={() => {
                    navigate(`/list/?id=${list.id}`, { replace: true });
                }}
            >

                <Grid container >

                    <Grid item xs={8} display={'flex'} alignItems={'center'} >
                        <Typography textTransform={'capitalize'} color={'black'} >
                            <ListItemText primary={list.title} />
                        </Typography>

                        <Typography variant='caption' justifySelf={'center'} >
                            {
                                list.category ?
                                    <ListItemText primay={list.category} />
                                    : '.uncategorized'
                            }
                        </Typography>
                    </Grid>


                </Grid>


            </ListItemButton>

            <Grid item xs={4} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                <Typography color={'black'} variant={'caption'} >
                    {list.date}
                </Typography>

                <IconButton onClick={() => handleDeleteList(list.id)} >
                    <DeleteForeverRoundedIcon color={'error'} />
                </IconButton>

                <IconButton onClick={() => handlePrivacyList(list.id)} >
                    {
                        list.privacy == false
                            ? <LockPersonRoundedIcon color={'disabled'} />
                            : <VisibilityRoundedIcon color={'success'} />
                    }

                </IconButton>

                <IconButton onClick={() => handleToggleList(list.id)}>
                    {
                        list.status == false
                            ? <AssignmentLateRoundedIcon color={'error'} />
                            : <TaskAltRoundedIcon color={'success'} />
                    }
                </IconButton>
            </Grid>

        </ListItem>
    )
}

export default ListItemElement