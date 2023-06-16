import styled from "styled-components";
import { Box, Grid, Typography } from "@mui/material";

export const CarouselContainer = styled(Grid)({
  background: "#004880",
  textAlign: "center",
});

export const HeadingConatiner = styled(Box)({
  width: "380px",
  marginTop: "20px",
  marginLeft: "120px",
  padding: "40px",

  "@media(max-width :768px)": {
    width: "300px",
    marginLeft: "10px",
    padding: "10px",
    marginBottom: "20px",
  },

  "@media (max-width:280px)": {
    width: "220px",
    marginLeft: "0px",
    padding: "4px",
  },
});

export const Heading = styled("p")({
  fontWeight: "bolder",
  fontSize: "30px",
  textAlign: "justify",
  color: "#004A80",
  "@media (max-width:280px)": {
    fontSize: "18px",
  },
});

export const FirstParagraph = styled("p")({
  fontWeight: "500",
  fontSize: "18px",
  textAlign: "justify",

  "@media (max-width:280px)": {
    fontSize: "15px",
  },
});

export const ImageBox = styled(Box)({
  marginTop: "30px",
  marginBottom: "15px",
});

export const Image1 = styled("img")({
  width: "250px",
  height: "250px",
});

export const Image2 = styled("img")({
  width: "230px",
  height: "250px",
});

export const Image3 = styled("img")({
  width: "230px",
  height: "250px",
});

export const Image4 = styled("img")({
  width: "230px",
  height: "250px",
});

export const Image5 = styled("img")({
  width: "280px",
  height: "250px",
});
export const Image6 = styled("img")({
  width: "230px",
  height: "250px",
});
