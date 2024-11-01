// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle Drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Navigation Links
  const navLinks = [
    { text: "Services", path: "/services" },
    { text: "About Us", path: "/about-us" },
    { text: "Industries", path: "/industries" },
    { text: "Portfolio", path: "/portfolio" },
    { text: "Gallery", path: "/gallery" },
    { text: "Careers", path: "/careers" },
  ];

  return (
    <AppBar position="absolute" color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar className="container mx-auto flex justify-between items-center">
        {/* Logo and Navigation Links for Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-auto mr-2" />
          </div>

          {/* Desktop Navigation Links */}
          <ul className="flex space-x-4">
            {navLinks.map((link) => (
              <li key={link.text}>
                <Link to={link.path} style={{ color: "white", textDecoration: "none" }} className="hover:text-gray-300">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info for Desktop */}
        <div className="hidden md:flex items-center text-white">
          <span className="mr-2">📞</span>
          <a href="tel:03708050090" className="hover:text-gray-300">
            03708050090
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          className="md:hidden"  // Only show on small screens
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for Mobile View */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List className="w-64">
            <ListItem button onClick={toggleDrawer(false)}>
              <img src={logo} alt="Logo" className="h-12 w-auto mx-auto" />
            </ListItem>
            {navLinks.map((link) => (
              <ListItem button key={link.text} onClick={toggleDrawer(false)}>
                <Link to={link.path} style={{ textDecoration: "none", color: "black", width: "100%" }}>
                  <ListItemText primary={link.text} />
                </Link>
              </ListItem>
            ))}
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
