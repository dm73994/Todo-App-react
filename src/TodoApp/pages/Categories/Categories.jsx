import React from 'react'
import Layout from '../../layout'
import { Card, CardActions, CardContent, Grid, IconButton, Typography } from '@mui/material'
import CardHeader from '@mui/material/CardHeader';
import ListItemButton from '@mui/material/ListItemButton';
import DataSaverOnRoundedIcon from '@mui/icons-material/DataSaverOnRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const Categories = () => {

  const categories = ['homework', 'workout', 'job', 'homework', 'job']

  return (
    <Layout title={'Categories'} >
      <Card sx={{ padding: 4 }} >
        <Grid container xs={12} sx={{ width: '100vw' }} spacing={3} >

          {
            categories.map(category => {
              return (
                <Grid item xs={3} >
                  <Card  >
                    <ListItemButton sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                      <CardHeader title={category} />
                    </ListItemButton>

                  <CardActions>
                    <IconButton>
                      <DeleteForeverRoundedIcon color={'error'} />
                    </IconButton>
                  </CardActions>
                  </Card>

                </Grid>
              )
            })
          }


        </Grid>

        <CardActions sx={{ position:'relative' }} >
          <IconButton sx={{ position: 'absolute', bottom: 0, right: 0 }} >
            <DataSaverOnRoundedIcon fontSize='large'  />
          </IconButton>
        </CardActions>
      </Card>
    </Layout>
  )
}

export default Categories