import React, { useState } from 'react'
import { TaskSchema, defaultTaskValues } from './Schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Button, DialogActions, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const TaskForm = ({ handleClose, handleNewTask, listId }) => {
    const [age, setAge] = useState('');
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: defaultTaskValues,
        resolver: yupResolver(TaskSchema)
    });

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const onSubmit = (data) => {
        handleNewTask({
            ...data,
            date: new Date().toLocaleDateString(),
            status: false,
            id: Date.now(),
            listId: Number(listId)
        })
        handleClose();
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} method={'post'} action={'/tasks'} >
            <Grid container >

                <Grid item xs={12} mt={2}>
                    <TextField
                        label={'Task title'}
                        placeholder={'Task title'}
                        type={'text'}
                        fullWidth
                        {...register("title")}
                    />
                    <p>{errors.title?.message}</p>
                </Grid>

                <Grid item xs={12} mt={2}>
                    <TextField
                        label={'Description'}
                        placeholder={'Description'}
                        type={'text'}
                        fullWidth
                        minRows={5}
                        multiline
                        {...register("description")}
                    />
                    <p>{errors.description?.message}</p>
                </Grid>
            </Grid>

            <DialogActions>
                <Button type={'submit'} variant={'contained'} >
                    Add
                </Button>
                <Button onClick={handleClose} variant={'outlined'}>
                    Cancel
                </Button>
            </DialogActions>
        </form>
    )
}

export default TaskForm