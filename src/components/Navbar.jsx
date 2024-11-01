// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // State for dropdown menu

  // Toggle Drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Handle menu open/close
  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget); // Set anchor element for dropdown
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close the dropdown menu
  };

  // Navigation Links
  const navLinks = [
    { text: "Services", path: "/services" },
    { text: "About Us", path: "/about-us" },
    { text: "Portfolio", path: "/portfolio" },
    { text: "Gallery", path: "/gallery" },
    { text: "Careers", path: "/careers" },
    {
      text: "Profile",
      path: null, // No path, will open dropdown instead
      isDropdown: true,
    },
  ];

  return (
    <AppBar position="absolute" color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.isDropdown ? (
              <div key={link.text}>
                <Typography
                  aria-controls={anchorEl ? "profile-menu" : undefined}
                  aria-haspopup="true"
                  onClick={handleProfileClick}
                  className="text-white hover:text-gray-300 cursor-pointer"
                >
                  {link.text}
                </Typography>
                <Menu
                  id="profile-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>Miss Tuba</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Mr. Umair</MenuItem>
                </Menu>
              </div>
            ) : (
              <Link
                key={link.text}
                to={link.path}
                className="text-white hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                {link.text}
              </Link>
            )
          )}
          {/* Contact Info */}
          <Typography variant="body1" className="text-white ml-4">
            📞 <a href="tel:03708050090" className="hover:text-gray-300">03708050090</a>
          </Typography>
        </div>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          className="md:hidden" // Only visible on mobile
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for Mobile View */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List className="w-64">
            <ListItem button onClick={toggleDrawer(false)}>
              <img src={logo} alt="Logo" className="h-12 w-auto mx-auto" />
            </ListItem>
            {navLinks.map((link) =>
              link.isDropdown ? (
                <ListItem button key={link.text} onClick={handleProfileClick}>
                  <ListItemText primary={link.text} />
                </ListItem>
              ) : (
                <ListItem button key={link.text} onClick={toggleDrawer(false)}>
                  <Link to={link.path} style={{ textDecoration: "none", color: "black", width: "100%" }}>
                    <ListItemText primary={link.text} />
                  </Link>
                </ListItem>
              )
            )}
            <ListItem>
              <Typography variant="body1" className="flex items-center mx-auto">
                📞 <a href="tel:03708050090" style={{ textDecoration: "none", color: "black", marginLeft: "8px" }}>03708050090</a>
              </Typography>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
