import { Grid, Typography } from '@mui/material'
import React from 'react'

const Layout = ({ title, children }) => {
    console.log(title)
  return (
    <Grid container 
        sx={{
            backgroundColor: 'primary.main',
            height: '100vh',
            padding: 4
        }} 
        display='flex'
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
    >
        <Grid item 
            sx={{
                backgroundColor: 'secondary.main', 
                padding: 4, 
                borderRadius: 2
            }} 
            className={'box-shadow'} 
            xs={6}
        >
            <Typography > {title} </Typography>
            {children}
        </Grid>
    </Grid>
  )
}

export default Layout