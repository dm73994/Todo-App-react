import { Box, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import AssignmentLateRoundedIcon from '@mui/icons-material/AssignmentLateRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';

const TaskItem = ({ task, handleDeleteTask, handleToggleTask }) => {
    return (
        <ListItem disablePadding sx={{ borderBottom: '1px solid black', width: '100vw' }} >
            <ListItemButton  >

                <Grid container >

                    <Grid item xs={8} display={'flex'} alignItems={'center'} >
                        <AssignmentRoundedIcon />
                        <Typography textTransform={'capitalize'} color={'black'} >
                            <ListItemText primary={task.title} />
                        </Typography>
                    </Grid>

                </Grid>


            </ListItemButton>

            <Grid item xs={4} display={'flex'} justifyContent={'center'} alignItems={'center'} >

                <Typography color={'black'} variant={'caption'} >
                    {task.date}
                </Typography>

                <IconButton onClick={() => handleDeleteTask(task.id)} >
                    <DeleteForeverRoundedIcon color={'error'} />
                </IconButton>

                <IconButton onClick={() => handleToggleTask(task.id)}>
                    {
                        task.status == false
                            ? <AssignmentLateRoundedIcon color={'error'} />
                            : <TaskAltRoundedIcon color={'success'} />
                    }
                </IconButton>
            </Grid>

        </ListItem>
    )
}

export default TaskItem