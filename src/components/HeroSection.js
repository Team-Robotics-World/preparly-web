import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import {
  Heading,
  Heading2,
  PictureBox,
  MainContainer,
} from "../styles/HeroSectionStyle";
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
          <MainContainer>
            <Heading>Prepearly</Heading>
            <Heading2>
              A New Way To Learn learn through video lessons, pdf documents,
              mock up exams and mcqs.
            </Heading2>
          </MainContainer>
        </Grid>

        <Grid item md={6} sm={6} xs={12}>
          <PictureBox>
            <img src="../../../assets/banner.png" alt="khan" height="200vh" />
          </PictureBox>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroSection;
