import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Card2 = () => {
  return (
    <div>
      <Grid conatiner mt={10}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Box
              width="330px"
              height="300px"
              style={{
                background: "#004A80",
                display: "flex",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <img src=".././/.//assets/card33.png" />
              </Box>
            </Box>

            <Box>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Mock Up Exam Preparation
              </Typography>
              <Typography
                width="300px"
                style={{ fontSize: "15px", textAlign: "justify" }}
              >
                Preparely is offering various mockup tests with each subject for
                each module. It provides flexible practice mockup tests.
              </Typography>
            </Box>
          </Box>

          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Box
              width="330px"
              height="300px"
              style={{
                background: "#004A80",
                display: "flex",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <img src=".././/.//assets/card22.png" />
              </Box>
            </Box>

            <Box>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                PDF Preparation
              </Typography>
              <Typography
                width="300px"
                style={{ fontSize: "15px", textAlign: "justify" }}
              >
                Preparely has related mcqs section for every chapter. Students
                can practice to get an eye on preparation level of theirs at the
                end of every chapter.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default Card2;
