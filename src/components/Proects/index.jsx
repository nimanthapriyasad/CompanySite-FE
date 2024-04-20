import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeightBox from "../HeightBox";

export default function Projects() {
  return (
    <section id="Projects">
      <Box
        sx={{
          background: "#000524",
          color: "#fff",
          paddingLeft: 25,
          paddingRight: 25,
          height: "100vh",
        }}
      >
        <HeightBox size={100} />
        <Box sx={{ display: "flex" }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            PROJECTS
          </Typography>
        </Box>
        <HeightBox size={10} />
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="body2"
            gutterBottom
            // align="center"
            sx={{ fontWeight: 200, fontSize: 20 }}
            color="#636363"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Typography>
        </Box>
        <HeightBox size={50} />

        <HeightBox size={100} />
      </Box>
    </section>
  );
}
