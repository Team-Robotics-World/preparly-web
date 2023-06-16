import styled from "styled-components";
import { Box } from "@mui/material";

export const MainContainer = styled(Box)({
  width: "340px",

  "@media (max-width:280px)": {
    width: "280px",
  },
});

export const Heading = styled("p")({
  fontSize: "36px",
  fontFamily: "Montserrat",
  fontWeight: "800",
  marginTop: "55px",
  background: "#004A80",
  color: "white",
  marginLeft: "60px",
  paddingLeft: "10px",
  "@media (max-width:280px)": {
    marginLeft: "20px",
    paddingLeft: "5px",
    fontSize: "18px",
  },
});

export const Heading2 = styled("p")({
  fontFamily: "Segoe UI",
  marginTop: "4px",
  fontWeight: 400,
  fontSize: "20px",

  display: "flex",
  marginLeft: "60px",
  color: "#FFFFFF",
  paddingLeft: "10px",

  "@media (max-width:280px)": {
    marginLeft: "20px",
    paddingLeft: "10px",
    fontSize: "20px",
  },
});

export const PictureBox = styled(Box)({
  textAlign: "center",
  marginTop: "15px",
  paddingBottom: "40px",
  padding: "30px",
});
