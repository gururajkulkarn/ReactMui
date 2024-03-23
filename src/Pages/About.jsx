import React from 'react'
import Sidebar from '../Components/Sidebar'
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';
import BasicTable from '../Components/Table';
const About = () => {
  return (
    <>
      <Navbar/>
      <Box height={40}/>
      <Box sx={{ display: 'flex', justifyContent: 'left' }} style={{marginTop:"20px"}}>
        <Sidebar/>
        <div>
          <h1>About page</h1>
          <BasicTable/>
        </div>
      </Box>



    </>
  )
}

export default About