import React from "react";
import { Box, Grid } from "@mui/material";
import {
  MainBox,
  CardOuterBox,
  CardInnerBox,
  FirstHeading,
  Paragraph,
  LastBox,
} from "../styles/CardsStyle";
const Cards = () => {
  return (
    <div>
      <Grid conatiner mt={10}>
        <MainBox>
          <CardOuterBox>
            <CardInnerBox>
              <Box>
                <img src=".././/.//assets/card11.png" />
              </Box>
            </CardInnerBox>

            <LastBox>
              <FirstHeading variant="h5">MCQS Preparation</FirstHeading>
              <Paragraph variant="body2">
                Preparely has related mcqs section for every chapter. Students
                can practice to get an eye on preparation level of theirs at the
                end of every chapter.
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
              <FirstHeading variant="h5">Online Videos Lessons</FirstHeading>
              <Paragraph variant="body2">
                Preparely provides students with an option of live ineractive
                sessions in which students can join to learn more
                professionally. Practical work enhaces the learning ability.
              </Paragraph>
            </LastBox>
          </CardOuterBox>
        </MainBox>
      </Grid>
    </div>
  );
};

export default Cards;
