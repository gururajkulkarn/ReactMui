import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Box from "@mui/material/Box";
import BasicTable from '../Components/Table';
import axios from 'axios';

const Crud = () => {

  const[data,setData] = useState([])


  useEffect(()=>{

    axios.get("https://restapi-4q6e.onrender.com/api/members")
    .then((response)=>{
      console.log(response.data.members)
      setData(response.data.members )
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])


  return (
    <>
 <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>Data</h1>
          {data.map((item)=>(
            <>
            <h1>{item.address.city}</h1>
            <h1>{item.address.country}</h1>
            <h1>{item.address.postalCode}</h1>
            <h1>{item.address.street}</h1>
            <h4>{item.age}</h4>

<ul>
  <li>{item.contact.email}</li>
  <li>{item.contact.phone}</li>

</ul>

<h2>{item.contact.social.linkedin}</h2>
<h2>{item.contact.social.twitter}</h2>
<li>{}</li>
<ul>
<li>{item.hobbies.join(', ')}</li>
</ul>

            </>
          ))}
            <BasicTable/>
            </Box>
        </Box>



    </>
  )
}

export default Crud