import Layout from '../Layout'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as NavLink } from 'react-router-dom'
import { RegisterSchema, defaultRegisterValues } from './RegisterSchema'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {handleSubmit, register, control, formState: { errors }} = useForm({
    defaultValues: defaultRegisterValues,
    resolver: yupResolver(RegisterSchema)
  })

  const onSubmit = (data)=> {
    console.log(data)
  }

  return (
    <Layout title={'Register'} >

      <form onSubmit={handleSubmit(onSubmit)} >
        <Grid container >

          <Grid item xs={12} mt={2}>
            <TextField 
              label={'Name or username'}
              placeholder={'Name or username'}
              type={'text'}
              fullWidth
              {...register("user")}
            />
            <p>{errors.user?.message}</p>
          </Grid>

          <Grid item xs={12} mt={2}>
            <TextField 
              label={'email'}
              placeholder={'correo@correo.com'}
              type={'email'}
              fullWidth
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </Grid>

          <Grid item xs={12} mt={2}>
            <TextField 
              label={'password'}
              title={'password'}
              placeholder={'password'}
              type={'password'}
              fullWidth
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </Grid>

          <Grid container display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} >
            <Grid item xs={12} sm={12} mt={2} >
              <Button variant={'contained'} type={'submit'} >Register</Button>
            </Grid>
            
            <Grid item xs={12} sm={12} mt={2}>
              <Link component={NavLink} to={'/auth/login'} > <Typography> ¿already have an account? Login </Typography> </Link>
            </Grid>
          </Grid>

        </Grid>
      </form>

    </Layout>
  )
}

export default Register