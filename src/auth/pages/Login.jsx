import Layout from '../Layout'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as NavLink, useNavigate, useNavigation } from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate();

  const handleGuest = () => {
    navigate('/tasks');
  }

  const handleLogin = () => {
    navigate('/tasks');
  }

  return (
    <Layout title={'Login'} >

      <form>
        <Grid container >

          <Grid item xs={12} mt={2}>
            <TextField 
              label={'Name or username'}
              title={'Name or username'}
              placeholder={'Name or username'}
              type={'text'}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} mt={2}>
            <TextField 
              label={'password'}
              title={'password'}
              placeholder={'password'}
              type={'password'}
              fullWidth
            />
          </Grid>

          <Grid container display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} >
            <Grid item xs={12} sm={12} mt={2} >
              <Button variant={'contained'} onClick={handleLogin} > Login </Button>
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