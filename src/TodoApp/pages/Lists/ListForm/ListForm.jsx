import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Button, DialogActions, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ListSchema, defaultListValues } from './Schema';

const ListForm = ({ handleClose, handleNewList }) => {
    const [age, setAge] = useState('');
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: defaultListValues,
        resolver: yupResolver(ListSchema)
    });

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const onSubmit = (data) => {
        handleNewList({
            ...data,
            date: new Date().toLocaleDateString(),
            status: false,
            id: Date.now(),
            tasks: []
        })
        handleClose();
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} method={'post'} action={'/lists'}  >
            <Grid container spacing={2} >

                <Grid item xs={12} sm={6} mt={2}>

                    <Controller
                        control={control}
                        name={'title'}
                        render={() => {
                            return (
                                <FormControl fullWidth >
                                    <TextField
                                        label={'List name'}
                                        title={'List name'}
                                        placeholder={'List name'}
                                        type={'text'}
                                        fullWidth
                                        {...register("title")}
                                    />
                                    <p>{errors.listName?.message}</p>
                                </FormControl>
                            )
                        }}
                    />

                </Grid>

                <Grid item xs={12} sm={6} mt={2}>
                    <FormControl fullWidth  >
                        <InputLabel id="demo-simple-select-label"> Category </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={10}
                            label="Category"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>


                <Grid item xs={12} mt={2}>
                    <TextField
                        label={'Description'}
                        title={'Description'}
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

export default ListForm