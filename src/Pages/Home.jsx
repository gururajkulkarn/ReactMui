import React from 'react'
import Sidebar from '../Components/Sidebar'
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography'; 
import Stack from '@mui/material/Stack';

const Home = () => {
  return (
    <>
 <Navbar/>
 <Box height={60} />
        <Box sx={{ display: 'flex' }} >
        <Sidebar/>
        <Box component="main" sx={{ flexGrow: 1, p:3 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
         <Stack spacing={2} > 
  <Card sx={{ maxWidth: 345 }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
   
  </Card>

  <Card sx={{ maxWidth: 345 }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
   
  </Card> 
  </Stack> 
        </Grid>
        
 </Grid>
    </Box>



        </Box>
        </>
      
  )
}

export default Home