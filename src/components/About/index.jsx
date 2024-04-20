import React from "react";
import aboutPic from "../../assets/aboutPic.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import HeightBox from "../HeightBox";
import Button from "@mui/material/Button";
import "./index.css";

export default function About() {
  return (
    <section id="About">
      <Box
        sx={{
          background: "#12464E",
          // color: "#636363",
          color: "#fff",
          paddingLeft: 25,
          paddingRight: 25,
          paddingBottom: 5,
          height: "100vh",
        }}
      >
        <HeightBox size={100} />
        <Grid
          container
          spacing={2}
          sx={{ textAlign: "left" }}
          justifyContent="space-between"
        >
          <Grid item xs={6}>
            <Box>
              {" "}
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                WHAT ARE WE ALL ABOUT?
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: 500, fontSize: 20 }}
                color="#0FD36C"
              >
                By utilizing cutting-edge technologies, we force organizations
                to adopt a practical strategy and enjoy exceptional digital
                growth.
              </Typography>
              <HeightBox size={25} />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box mt={12}>
              {" "}
              <img src={aboutPic} alt="About" style={{ width: 450 }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
