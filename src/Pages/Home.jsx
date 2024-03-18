import React from "react";
import Sidebar from "../Components/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../Components/Navbar";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AccordionComponent from "../Components/Accordian";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ maxWidth: "100%" }} style={{backgroundColor:"#fc8803"}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: "100%" }} style={{backgroundColor:"#d8f500"}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: "100%" }} style={{backgroundColor:"#d8f500"}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: "100%" }} >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>

          <Box height={10} />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Card sx={{ height: "60vh" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ height: "60vh" }}>
                <CardContent>
                  <AccordionComponent />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
