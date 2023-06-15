import { Typography, Grid, Box } from "@mui/material";
import React from "react";

const Carousel = () => {
  return (
    <>
      <Grid conatiner>
        <Grid item>
          <Box width="380px" style={{ margin: "80px", padding: "20px" }}>
            <Typography
              style={{
                fontWeight: "700",
                fontSize: "28px",
                textAlign: "justify",
                color: "#004A80",
              }}
            >
              Choose Your Exam
            </Typography>
            <Typography
              style={{
                fontWeight: "500",
                fontSize: "16px",
                textAlign: "justify",
              }}
            >
              Improve your knowledge by using our examination’s systematic
              learning technique. Select a field of study.
            </Typography>
            <br></br>
            <Typography
              style={{
                fontWeight: "500",
                fontSize: "16px",
                textAlign: "justify",
              }}
            >
              Improve your knowledge by using our examination’s systematic
              learning technique. Select a field of study.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container style={{ background: "#004880", textAlign: "center" }}>
        <Grid item lg={2} md={2} sm={4} xs={12}>
          <Box style={{ marginTop: "10px" }}>
            <img
              src="../../../assets/public.png"
              alt="khan"
              width="250px"
              height="250px"
            />
          </Box>
        </Grid>

        <Grid item lg={2} md={2} sm={4} xs={12}>
          <Box style={{ marginTop: "10px" }}>
            <img
              src="../../../assets/duolingo.png"
              alt="khan"
              width="230px"
              height="250px"
            />
          </Box>
        </Grid>

        <Grid item lg={2} md={2} sm={4} xs={12}>
          <Box style={{ marginTop: "10px" }}>
            <img
              src="../../../assets/entry.png"
              alt="khan"
              width="230px"
              height="250px"
            />
          </Box>
        </Grid>

        <Grid item lg={2} md={2} sm={4} xs={12}>
          <Box style={{ marginTop: "10px" }}>
            <img
              src="../../../assets/nts.png"
              alt="khan"
              width="230px"
              height="250px"
            />
          </Box>
        </Grid>

        <Grid item lg={2} md={2} sm={4} xs={12}>
          <Box style={{ marginTop: "10px" }}>
            <img
              src="../../../assets/Group 9072.png"
              alt="khan"
              width="280px"
              height="250px"
            />
          </Box>
        </Grid>
        <Grid item lg={2} md={2} sm={4} xs={12}>
          <Box style={{ marginTop: "10px" }}>
            <img
              src="../../../assets/forces.png"
              alt="khan"
              width="230px"
              height="250px"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Carousel;
