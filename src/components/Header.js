import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  MainBox,
  LogoMainBox,
  LogoImg,
  LinksMainBox,
  LinksMainContainer,
  HeaderLink,
  HeaderButtons,
  MenuItemSIcon,
} from "../styles/HeaderStyle";

const Header = () => {
  return (
    <MainBox>
      <Box>
        <LogoMainBox>
          <LogoImg src="../../../assets/logo.png" alt="khan" />
        </LogoMainBox>
      </Box>
      <LinksMainBox>
        <LinksMainContainer>
          <HeaderLink to="about">Home</HeaderLink>
          <HeaderLink to="about">Blog</HeaderLink>
          <HeaderLink to="about">Contact Us</HeaderLink>
        </LinksMainContainer>

        <Box>
          <TextField
            variant="outlined"
            placeholder="Search Exam Category "
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: {
                borderRadius: "50px",
                background: "white",
                height: "36px",
                marginRight: "20px",
              },
            }}
          />
        </Box>

        <Box>
          <HeaderButtons>Register</HeaderButtons>
          <HeaderButtons>Login</HeaderButtons>
        </Box>
        <MenuItemSIcon>
          <MenuIcon />
        </MenuItemSIcon>
      </LinksMainBox>
    </MainBox>
  );
};

export default Header;
