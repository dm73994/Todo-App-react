import { Box, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import AssignmentLateRoundedIcon from '@mui/icons-material/AssignmentLateRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const TaskItem = ({ task }) => {
  return (
    <ListItem disablePadding sx={{ borderBottom: '1px solid black' }} >
        <ListItemButton  >

            <Grid container xs={12} >

                <Grid item xs={1} sm={1} display={'flex'} alignItems={'center'} >
                    <ListItemIcon>
                    { 
                        task.state == false 
                        ? <AssignmentLateRoundedIcon color={'error'} /> 
                        : <TaskAltRoundedIcon color={'success'} /> 
                    }
                    </ListItemIcon>

                </Grid>

                <Grid item xs={8} display={'flex'} alignItems={'center'} >
                    <Typography textTransform={'capitalize'} color={'black'} >
                        <ListItemText primary={task.title} />
                    </Typography>
                </Grid>
                
                <Grid item xs={2} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                    <Typography color={'black'} variant={'caption'} >
                        {task.date} 
                    </Typography>
                    <IconButton>
                      <DeleteForeverRoundedIcon color={'error'} />
                    </IconButton>
                </Grid>

            </Grid>

        </ListItemButton>

    </ListItem>
  )
}

export default TaskItem