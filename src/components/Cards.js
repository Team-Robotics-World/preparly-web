import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Cards = () => {
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
                <img src=".././/.//assets/card11.png" />
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
                MCQS Preparation
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
                Online Videos Lessons
              </Typography>
              <Typography
                width="300px"
                style={{ fontSize: "15px", textAlign: "justify" }}
              >
                Preparely provides students with an option of live ineractive
                sessions in which students can join to learn more
                professionally. Practical work enhaces the learning ability.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default Cards;
