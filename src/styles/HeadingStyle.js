import styled from "styled-components";
import { Box } from "@mui/material";
export const MainBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "70px",
  textAlign: "center",
});

export const InnerBox = styled(Box)({
  width: "400px",
  "@media (max-width:280px)": {
    width: "300px",
    fontSize: "15px",
  },
});
export const Head = styled("p")({
  fontFamily: "Montserrat",
  fontSize: "27px",
  fontWeight: "1000",

  "@media (max-width:280px)": {
    width: "260px",
    marginLeft: "20px",
  },
});

export const Paragraph = styled("p")({
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "Montserrat",
  color: "black",
  marginTop: "5px",

  "@media (max-width:280px)": {
    width: "260px",
    fontSize: "14px",
    marginLeft: "20px",
  },
});
