import Layout from '../Layout'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form';
import { Link as NavLink, useNavigate, useNavigation } from 'react-router-dom'
import { LoginSchema, defaultLoginValues } from './LoginSchema';
import { yupResolver } from '@hookform/resolvers/yup';


const Login = () => {

  const navigate = useNavigate();

  const handleGuest = () => {
    navigate('/lists');
  }

  const handleLogin = () => {

  }

  const {handleSubmit, register, control, formState: { errors }} = useForm({
    defaultValues: defaultLoginValues,
    resolver: yupResolver(LoginSchema)
  })

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <Layout title={'Login'} >

      <form onSubmit={handleSubmit(onSubmit)} >
        <Grid container >

          <Grid item xs={12} mt={2}>
            <TextField 
              label={'Name or username'}
              placeholder={'Name or username'}
              type={'text'}
              {...register("user")}
              fullWidth
            />
            <p>{errors.user?.message}</p>
          </Grid>

          <Grid item xs={12} mt={2}>
            <TextField 
              label={'password'}
              placeholder={'password'}
              type={'password'}
              {...register("password")}
              fullWidth
            />
            <p>{errors.password?.message}</p>
          </Grid>

          <Grid container display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} >
            <Grid item xs={12} sm={12} mt={2} >
              <Button variant={'contained'} type={'submit'} > Login </Button>
            </Grid>
  
            <Grid item xs={12} sm={12} mt={2} >
              <Button variant={'outlined'} onClick={handleGuest} > Continue as a guest </Button>
            </Grid>
            
            <Grid item xs={12} sm={12} mt={2}>
              <Link component={NavLink} to={'/auth/register'} > <Typography> ¿Does not have an account? Register. </Typography> </Link>
            </Grid>
          </Grid>

        </Grid>
      </form>

    </Layout>
  )
}

export default Login