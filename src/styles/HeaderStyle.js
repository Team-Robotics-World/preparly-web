import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  background: "#004A80",
  alignItems: "center",
  "@media (max-width:280px)": {
    width: "280px",
  },
});

export const LogoMainBox = styled(Box)({
  margin: "20px",
});

export const LogoImg = styled("img")({
  background: "white",
  borderRadius: "30%",
  padding: "3px",
  marginTop: "20px",
  marginLeft: "30px",
});

export const LinksMainBox = styled(Box)({
  marginTop: "35px",
  display: "flex",
});

export const LinksMainContainer = styled(Box)({
  marginTop: "10px",
});
export const HeaderLink = styled(Link)({
  color: "white",
  //   marginRight: "27px",
  textDecoration: "none",
  margin: "15px",
  fontSize: "17px",
  "@media (max-width:768px)": {
    display: "none",
  },
});
export const HeaderButtons = styled("button")({
  color: "white",
  marginRight: "15px",
  //   marginLeft: "20px",
  border: "2px solid white",
  borderRadius: "30px",
  paddingLeft: "30px",
  paddingRight: "30px",
  background: "#004A80",
  paddingTop: "10px",
  paddingBottom: "10px",
  "@media (max-width:768px)": {
    display: "none",
  },
});

export const MenuItemSIcon = styled(Box)({
  margin: "10px",
  color: "white",
  width: "40px",
  display: "none",

  "@media (max-width:768px)": {
    display: "block",
  },
});
