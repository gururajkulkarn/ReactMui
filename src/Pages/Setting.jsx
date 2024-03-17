import React from 'react'
import Sidebar from '../Components/Sidebar'
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';
const Setting = () => {
  return (
    <>
    <Navbar/>
    <Box sx={{ display: 'flex' }} style={{marginTop:"50px"}}>
    <Sidebar/>
<h1>Settings</h1>

    </Box>
    </>
  )
}

export default Setting