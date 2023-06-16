import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import {
  HeadingConatiner,
  Heading,
  FirstParagraph,
  ImageBox,
  CarouselContainer,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
} from "../styles/CarouselStyle";

const Carousel = () => {
  return (
    <>
      <Grid conatiner>
        <Grid item>
          <HeadingConatiner>
            <Heading>Choose Your Exam</Heading>
            <FirstParagraph>
              Improve your knowledge by using our examination’s systematic
              learning technique. Select a field of study.
            </FirstParagraph>
            <br></br>
            <FirstParagraph>
              Improve your knowledge by using our examination’s systematic
              learning technique. Select a field of study.
            </FirstParagraph>
          </HeadingConatiner>
        </Grid>
      </Grid>

      <CarouselContainer container>
        <Grid item xl={2} lg={4} md={4} sm={4} xs={12}>
          <ImageBox>
            <Image1 src="../../../assets/public.png" alt="khan" />
          </ImageBox>
        </Grid>

        <Grid item xl={2} lg={4} md={4} sm={4} xs={12}>
          <ImageBox>
            <Image2 src="../../../assets/duolingo.png" alt="khan" />
          </ImageBox>
        </Grid>

        <Grid item xl={2} lg={4} md={4} sm={4} xs={12}>
          <ImageBox>
            <Image3 src="../../../assets/entry.png" alt="khan" />
          </ImageBox>
        </Grid>

        <Grid item xl={2} lg={4} md={4} sm={4} xs={12}>
          <ImageBox>
            <Image4 src="../../../assets/nts.png" alt="khan" />
          </ImageBox>
        </Grid>

        <Grid item xl={2} lg={4} md={4} sm={4} xs={12}>
          <ImageBox>
            <Image5 src="../../../assets/Group 9072.png" alt="khan" />
          </ImageBox>
        </Grid>
        <Grid item xl={2} lg={4} md={4} sm={4} xs={12}>
          <ImageBox>
            <Image6 src="../../../assets/forces.png" alt="khan" />
          </ImageBox>
        </Grid>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
