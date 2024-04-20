import React from "react";
import ParticlesBg from "particles-bg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HeightBox from "../HeightBox";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavBar from "../NavBar";

export default function Header() {
  return (
    <header id="Home">
      <NavBar />
      <Box
        sx={{ paddingLeft: 10, paddingRight: 10, height: "100vh" }}
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <ParticlesBg type="cobweb" bg={true} />

        <HeightBox size={100} />
        <Box sx={{ color: "#212121" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
              We're Providing IT Solutions For Your Business
            </Typography>
          </Box>
          <HeightBox size={20} />
          <Grid
            paddingLeft={35}
            paddingRight={35}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={3}>
              <Typography variant="h6" gutterBottom align="center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Grid>
          </Grid>

          <hr />
          <HeightBox size={10} />
          <Box align="center">
            <Button variant="contained" sx={{ backgroundColor: "#00BDDA" }}>
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
    </header>
  );
}
