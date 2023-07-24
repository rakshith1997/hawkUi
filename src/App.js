import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Avatar, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import profile from "./assets/images/profile.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import backgroundImage from "./assets/images/wallpaper.jpeg";

import Home from "./Home";
import About from "./About";

// Define your custom theme
const theme = createTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <nav
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                left: "45%",
              }}
            >
              <Button
                sx={{ fontSize: "18px", color: "white" }}
                component={Link}
                to="/"
                color="inherit"
              >
                Home
              </Button>
              <Button
                sx={{ fontSize: "18px", color: "white" }}
                component={Link}
                to="/about"
                color="inherit"
              >
                About
              </Button>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar alt="Remy Sharp" src={profile} style={{ left: "-22%" }} />
              <ShoppingCartIcon fontSize="large" sx={{ color: "white" }} />
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
