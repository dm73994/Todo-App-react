import React, { useContext, useState } from 'react'
import Layout from '../../layout'
import { Button, Card, CardActions, CardContent, Grid, IconButton } from '@mui/material'
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import AssignmentLateRoundedIcon from '@mui/icons-material/AssignmentLateRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import TaskItem from './TaskItem';
import { useTask } from '../../Hooks/useTask';
import { UserContext } from '../../../auth/user/UserContext';
import AddTask from './AddTask';
import { Box } from '@mui/system';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Empty from '../../components/Empty';


const Tasks = ({ listId, listName }) => {

  const {
    handleDeleteTask,
    handleToggleTask,
    handleNewTask,
    pendingTasksByList,
    doneTasksByList,
    taskByList
  } = useTask({ listId });


  //control de formulario
  const [open, setOpen] = useState(false);

  //control de tabs
  const [value, setValue] = useState('0');
  const tabs = [
    {
      title: 'pending',
      icon: <AssignmentLateRoundedIcon />,
      value: '0',
      tasks: pendingTasksByList()
    },
    {
      title: 'done',
      icon: <TaskAltRoundedIcon />,
      value: '1',
      tasks: doneTasksByList()
    },
    {
      title: 'all',
      icon: <FormatAlignJustifyIcon />,
      value: '2',
      tasks: taskByList()
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout title={`my lists/ ${listName}`} >
      <Card>
        <CardContent>

          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

              <TabList onChange={handleChange} aria-label="lab API tabs example">
                {
                  tabs.map(tab => (
                    <Tab key={tab.value} icon={tab.icon} iconPosition="start" label={tab.title} value={tab.value} />
                  ))
                }
              </TabList>

            </Box>

            {
              tabs.map(tab => (
                <TabPanel value={tab.value} key={tab.value}>
                  <Grid container >
                    {
                      tab.tasks.length != 0 ?
                        tab.tasks.map(task => <TaskItem key={task.id} task={task}
                          handleDeleteTask={handleDeleteTask}
                          handleToggleTask={handleToggleTask}
                        />)
                        : <Empty />
                    }
                  </Grid>
                </TabPanel>
              ))
            }

          </TabContext>


        </CardContent>

        <CardActions >
          {/* ADD TASK FORM */}
          <AddTask open={open} setOpen={setOpen} handleNewTask={handleNewTask} listId={listId} />
          <IconButton onClick={() => { setOpen(true) }} >
            <PlaylistAddRoundedIcon fontSize='large' />
          </IconButton>
        </CardActions>
      </Card>
    </Layout>
  )
}

export default Tasks