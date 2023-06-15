import { Typography, Grid, Box } from "@mui/material";
import React from "react";

const Heading = () => {
  return (
    <div>
      <Grid conatiner>
        <Grid item lg={12} md={12} sm={12}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "70px",
              textAlign: "center",
            }}
          >
            <Box width="360px">
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "22px",
                  fontWeight: "bolder",
                }}
              >
                Why Choose Preparely?
              </Typography>
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  color: "black",
                }}
              >
                Pakistan’s Most comprehensive Exam Preparation platform. On a
                mission to reshape the process of how students Professionals
                prepare for competitive exams. A flexible learning Environment.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Heading;
