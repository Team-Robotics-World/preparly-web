import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import { MainBox, InnerBox, Head, Paragraph } from "../styles/HeadingStyle";

const Heading = () => {
  return (
    <div>
      <Grid conatiner>
        <Grid item lg={12} md={12} sm={12}>
          <MainBox>
            <InnerBox>
              <Head>Why Choose Preparely?</Head>
              <Paragraph>
                Pakistan’s Most comprehensive Exam Preparation platform. On a
                mission to reshape the process of how students Professionals
                prepare for competitive exams. A flexible learning Environment.
              </Paragraph>
            </InnerBox>
          </MainBox>
        </Grid>
      </Grid>
    </div>
  );
};

export default Heading;
