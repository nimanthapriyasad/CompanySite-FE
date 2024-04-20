import React from "react";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import HeightBox from "../HeightBox";
import ServiceCardButton from "../ServiceCardButton";
import ServiceOnePic from "../../assets/Service1.png";
import ServiceTwoPic from "../../assets/Service2.png";
import ServiceThreePic from "../../assets/Service3.png";
import ServiceFourPic from "../../assets/Service4.png";
import ServiceFivePic from "../../assets/Service5.png";
import ServiceSixPic from "../../assets/Service6.png";

export default function ServicesTab() {
  return (
    <section id="Services">
      <Box
        sx={{
          background: "#fff",
          color: "#000",
          paddingLeft: 25,
          paddingRight: 25,
          paddingBottom: 26,
          marginBottom: 26,
          height: "100vh",
        }}
      >
        <HeightBox size={100} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            HOW DO WE SERVE THE IT INDUSTRY?
          </Typography>
        </Box>
        <HeightBox size={10} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="body1"
            gutterBottom
            align="center"
            sx={{ fontWeight: 200, fontSize: 20 }}
          >
            We put a lot of emphasis on customer-centric business models that
            scale digital transformations and prepare businesses for the future.
          </Typography>
        </Box>
        <HeightBox size={50} />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={5} justifyContent="space-between">
            <Grid item xs={4}>
              <ServiceCardButton
                imagePic={ServiceOnePic}
                imageTitle="E-Learning Platforms"
              />
            </Grid>
            <Grid item xs={4}>
              <ServiceCardButton
                imagePic={ServiceTwoPic}
                imageTitle="E-Commerce Websites"
              />
            </Grid>
            <Grid item xs={4}>
              <ServiceCardButton
                imagePic={ServiceThreePic}
                imageTitle="Hospital management System"
              />
            </Grid>
            <Grid item xs={4}>
              <ServiceCardButton
                imagePic={ServiceFourPic}
                imageTitle="Promotion Websites"
              />
            </Grid>
            <Grid item xs={4}>
              <ServiceCardButton
                imagePic={ServiceFivePic}
                imageTitle="Creative Event Websites"
              />
            </Grid>
            <Grid item xs={4}>
              <ServiceCardButton
                imagePic={ServiceSixPic}
                imageTitle="Mobile Applications"
              />
            </Grid>
          </Grid>
        </Box>
        <HeightBox size={100} />
      </Box>
    </section>
  );
}
