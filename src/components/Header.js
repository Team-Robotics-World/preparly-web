import React from "react";
import { Box, Button, TextField, InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#004A80",
        alignItems: "center",
      }}
    >
      <Box>
        <Box style={{ margin: "20px" }}>
          <img
            src="../../../assets/logo.png"
            alt="khan"
            style={{
              background: "white",
              borderRadius: "30%",
              padding: "3px",
              marginTop: "20px",
              marginLeft: "30px",
            }}
          />
        </Box>
      </Box>
      <Box style={{ marginTop: "35px" }}>
        <Link
          style={{
            color: "white",
            marginRight: "27px",
            textDecoration: "none",
          }}
          to="about"
        >
          Home
        </Link>
        <Link
          style={{
            color: "white",
            marginRight: "27px",
            textDecoration: "none",
          }}
          to="about"
        >
          Blog
        </Link>
        <Link
          style={{
            color: "white",
            marginRight: "27px",
            textDecoration: "none",
          }}
          to="about"
        >
          Contact Us
        </Link>

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

        <Button
          style={{
            color: "white",
            marginRight: "30px",
            border: "2px solid white",
            borderRadius: "30px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          Register
        </Button>
        <Button
          style={{
            color: "white",
            marginRight: "20px",
            border: "2px solid white",
            borderRadius: "30px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
