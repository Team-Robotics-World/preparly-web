import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const MainBox = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",

  "@media (max-width:768px)": {
    flexDirection: "column",
  },
  "@media (max-width:280px)": {
    width: "230px",
  },
});

export const CardOuterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",

  "@media (max-width:768px)": {
    marginBottom: "50px",
  },
});

export const CardInnerBox = styled(Box)({
  background: "#004A80",
  display: "flex",
  width: "330px",
  height: "300px",
  justifyContent: "center",
  alignItems: "center",
});

export const FirstHeading = styled(Typography)({
  color: "#004A80",
  textAlign: "center",
});

export const Paragraph = styled(Typography)({
  fontSize: "75px",
  textAlign: "justify",
  width: "300px",
  "@media (max-width:280px)": {
    width: "250px",
    // marginLeft: "70px",
    padding: "0px",
  },
});
export const LastBox = styled(Box)({
  "@media (max-width:280px)": {
    width: "280px",
    marginLeft: "50px",
    padding: "0px",
  },
});
