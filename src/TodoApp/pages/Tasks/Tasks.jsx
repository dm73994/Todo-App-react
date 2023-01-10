import React from 'react'
import Layout from '../../layout'
import { Button, Card, CardActions, CardContent, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';

import TaskItem from './TaskItem';

const Tasks = () => {

  const tareas = [
    {
      state: false, // falso = pensiente, true = finalizada
      title: 'tarea 1',
      description: 'esta es la tarea',
      date: Date.now().toString(),
      category: undefined
    },
    {
      state: true, // falso = pensiente, true = finalizada
      title: 'tarea 2',
      description: 'esta es la tarea',
      date: Date.now().toString(),
      category: undefined
    },
    {
      state: true, // falso = pensiente, true = finalizada
      title: 'tarea 3',
      description: 'esta es la tarea',
      date: Date.now().toString(),
      category: undefined
    },
    {
      state: false, // falso = pensiente, true = finalizada
      title: 'tarea 4',
      description: 'esta es la tarea',
      date: Date.now().toString(),
      category: undefined
    },
    {
      state: false, // falso = pensiente, true = finalizada
      title: 'tarea 4',
      description: 'esta es la tarea',
      date: Date.now().toString(),
      category: undefined
    },
    {
      state: false, // falso = pensiente, true = finalizada
      title: 'tarea 4',
      description: 'esta es la tarea',
      date: Date.now().toString(),
      category: undefined
    },
    {
      state: false, // falso = pensiente, true = finalizada
      title: 'tarea 4',
      description: 'esta es la tarea',
      date: Date.now().toString(),
      category: undefined
    },
    {
      state: false, // falso = pensiente, true = finalizada
      title: 'tarea 4',
      description: 'esta es la tarea',
      date: Date.now().toString(),
      category: undefined
    },
  ]

  return (
    <Layout title={'Tasks'} >
      <Card>
        <CardContent>

          <Grid container>
            {
              tareas.map( task => <TaskItem task={task} />)
            }
          </Grid>


        </CardContent>

        <CardActions>
          <IconButton>
            <PlaylistAddRoundedIcon fontSize='large' />
          </IconButton>
        </CardActions>

      </Card>
    </Layout>
  )
}

export default Tasks