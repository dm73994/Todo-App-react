import Layout from '../Layout'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <Layout title={'Register'} >

      <form>
        <Grid container >

          <Grid item xs={12} mt={2}>
            <TextField 
              label={'Name'}
              title={'Name'}
              placeholder={'Name'}
              type={'Name'}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} mt={2}>
            <TextField 
              label={'username'}
              title={'username'}
              placeholder={'usuario123'}
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
              <Button variant={'contained'} >Register</Button>
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