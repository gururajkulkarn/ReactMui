import React from 'react'
import Sidebar from '../Sidebar'
import Box from '@mui/material/Box';
const Home = () => {
  return (
    <>
        <Box sx={{ display: 'flex' }} style={{marginTop:"50px"}}>
        <Sidebar/>
   <h1>Home</h1>

        </Box>
        </>
      
  )
}

export default Home