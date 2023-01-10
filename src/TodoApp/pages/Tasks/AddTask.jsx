import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Card, CardActions, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import TaskForm from './TaskForm/TaskForm';



const AddTask = ({ open, setOpen, handleNewTask, listId }) => {


    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    const handleClose = () => {
        setOpen(false);
    };




    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >

            <DialogTitle id="responsive-dialog-title"  >
                {"NEW TASK"}
            </DialogTitle>

            <DialogContent>                
                <TaskForm  handleClose={handleClose} handleNewTask={handleNewTask} listId={listId} />
            </DialogContent>


        </Dialog>
    );
}

export default AddTask