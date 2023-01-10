import React, { useContext, useState } from 'react'
import Layout from '../../layout'
import { Button, Card, CardActions, CardContent, Grid, IconButton } from '@mui/material'
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import AssignmentLateRoundedIcon from '@mui/icons-material/AssignmentLateRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import { Box } from '@mui/system';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ListForm from './ListForm/ListForm';
import AddList from './AddList';
import { useList } from '../../Hooks/useList';
import ListItemElement from './ListItem';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import Empty from '../../components/Empty';

const Lists = () => {

    const {
        doneLists,
        handleDeleteList,
        handleNewList,
        handleToggleList,
        handlePrivacyList,
        lists,
        pendingLists,
    } = useList();


    //control de formulario
    const [open, setOpen] = useState(false);

    //control de tabs
    const [value, setValue] = useState('0');
    const tabs = [
        {
            title: 'pending',
            icon: <AssignmentLateRoundedIcon />,
            value: '0',
            lists: pendingLists()
        },
        {
            title: 'done',
            icon: <TaskAltRoundedIcon />,
            value: '1',
            lists: doneLists()
        },
        {
            title: 'all',
            icon: <FormatAlignJustifyIcon />,
            value: '2',
            lists: lists
        },
    ];
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Layout title={'my lists'} >
            <Card>

                <CardContent>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                            <TabList onChange={handleChange}>
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
                                            tab.lists.length != 0?
                                            tab.lists.map(list => <ListItemElement key={list.id}
                                                list={list}
                                                handleDeleteList={handleDeleteList}
                                                handleToggleList={handleToggleList}
                                                handlePrivacyList={handlePrivacyList}
                                            />)
                                            : <Empty />
                                            
                                        }
                                    </Grid>
                                </TabPanel>
                            ))
                        }

                    </TabContext>
                </CardContent>

                <CardActions>

                    {/* FORM */}
                    <AddList open={open} setOpen={setOpen} handleNewList={handleNewList} />
                    <IconButton onClick={() => { setOpen(true) }} >
                        <PlaylistAddRoundedIcon fontSize='large' />
                    </IconButton>
                </CardActions>
            </Card>
        </Layout>
    )
}

export default Lists