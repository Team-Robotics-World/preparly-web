import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <div>
      <Grid
        container
        style={{
          background: "#004A80",
        }}
      >
        <Grid item md={6} sm={6} xs={12}>
          <Box width={{ md: "280px", sm: "310px", xs: "310px" }}>
            <Typography
              textAlign={{
                md: "start",
                sm: "center",
                xs: "center",
              }}
              style={{
                fontSize: "35px",
                fontFamily: "Montserrat",
                fontWeight: "800",
                marginTop: "50px",
                background: "#004A80",
                color: "white",
                marginLeft: "60px",
                paddingLeft: "10px",
              }}
            >
              Prepearly
            </Typography>
            <Typography
              textAlign={{ md: "start", sm: "center", xs: "center" }}
              style={{
                fontFamily: "Segoe UI",

                fontWeight: 450,
                fontSize: "17px",
                // marginTop: "10px",
                display: "flex",
                marginLeft: "60px",
                color: "#FFFFFF",
                paddingLeft: "10px",
              }}
            >
              A New Way To Learn learn through video lessons, pdf documents,
              mock up exams and mcqs.
            </Typography>
          </Box>
        </Grid>

        <Grid item md={6} sm={6} xs={12}>
          <Box
            style={{
              textAlign: "center",
              marginTop: "15px",
              paddingBottom: "40px",
              padding: "30px",
            }}
          >
            <img src="../../../assets/banner.png" alt="khan" height="200vh" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroSection;
