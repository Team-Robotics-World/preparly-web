import React from "react";
import { Box, Grid } from "@mui/material";
import {
  MainBox,
  CardOuterBox,
  CardInnerBox,
  FirstHeading,
  Paragraph,
} from "../styles/Card2Style";
import { LastBox } from "../styles/CardsStyle";
const Cards = () => {
  return (
    <div>
      <Grid conatiner mt={10}>
        <MainBox>
          <CardOuterBox>
            <CardInnerBox>
              <Box>
                <img src=".././/.//assets/card33.png" />
              </Box>
            </CardInnerBox>

            <LastBox>
              <FirstHeading variant="h5">Mock Up Exam Preparation</FirstHeading>
              <Paragraph variant="body2">
                Preparely is offering various mockup tests with each subject for
                each module. It provides flexible practice mockup tests.
              </Paragraph>
            </LastBox>
          </CardOuterBox>

          <CardOuterBox>
            <CardInnerBox>
              <Box>
                <img src=".././/.//assets/card22.png" />
              </Box>
            </CardInnerBox>

            <LastBox>
              <FirstHeading variant="h5">PDF Preparation </FirstHeading>
              <Paragraph variant="body2">
                Preparely has related mcqs section for every chapter. Students
                can practice to get an eye on preparation level of theirs at the
                end of every chapter.
              </Paragraph>
            </LastBox>
          </CardOuterBox>
        </MainBox>
      </Grid>
    </div>
  );
};

export default Cards;
