import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { styled } from '@mui/system';
import logo from '../assets/jc.png'; // Replace with your logo path

// Styled Components
const Logo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: "'Dancing Script', cursive",
});

const ShopNowButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF4081',
  color: '#fff',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.875rem',
  padding: '10px 30px', // Adjusted for an oval shape
  borderRadius: '50px', // Oval shape
  marginLeft: '16px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#E73370',
  },
}));

const buttonStyles = {
  color: '#FFFFFF', // White for strong contrast
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1rem',
  textTransform: 'none',
  margin: '0 10px',
  '&:hover': {
    color: '#FFD700', // Gold hover color for vibrancy
    textDecoration: 'underline',
  },
};

const menuOptions = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Workshops', path: '/workshops' },
  { label: 'Contact', path: '/contact' },
  { label: 'Login', path: '/login' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <AppBar
  position="static"
  sx={{
    background: 'linear-gradient(90deg, #FF4081 0%, #FF1744 50%, #D500F9 100%)',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
  }}
>
  <Toolbar>
    {/* Logo Section */}
    <Logo>
      <img src={logo} alt="Logo" style={{ width: '150px', height: '60px' }} />
    </Logo>

    {/* Spacer */}
    <Box sx={{ flexGrow: 1 }} />

    {/* Desktop Menu */}
    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
      {menuOptions.map((option) => (
        <Button
          key={option.label}
          sx={{
            ...buttonStyles,
            '&:hover': {
              color: '#FFD700', // Gold hover color
              textDecoration: 'underline',
            },
          }}
          component={Link}
          to={option.path}
        >
          {option.label}
        </Button>
      ))}
      <ShopNowButton>Shop Now</ShopNowButton>
    </Box>

    {/* Social Media Icons */}
    <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: '20px' }}>
      <IconButton href="https://instagram.com" sx={{ color: '#FFD700', '&:hover': { color: '#FF4081' } }}>
        <InstagramIcon />
      </IconButton>
      <IconButton href="https://twitter.com" sx={{ color: '#FFD700', '&:hover': { color: '#FF4081' } }}>
        <TwitterIcon />
      </IconButton>
      <IconButton href="https://facebook.com" sx={{ color: '#FFD700', '&:hover': { color: '#FF4081' } }}>
        <FacebookIcon />
      </IconButton>
    </Box>

    {/* Mobile Menu Icon */}
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        sx={{ color: '#FFD700' }}
        edge="start"
        aria-label="menu"
        onClick={() => setMobileMenuOpen(true)}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  </Toolbar>

  {/* Drawer for Mobile Menu */}
  <Drawer anchor="left" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
    <List>
      {menuOptions.map((option) => (
        <ListItem button key={option.label} component={Link} to={option.path}>
          <ListItemText
            primary={option.label}
            primaryTypographyProps={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '1rem',
              color: '#001F54',
            }}
          />
        </ListItem>
      ))}
      <ListItem>
        <IconButton href="https://instagram.com" sx={{ color: '#001F54' }}>
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://twitter.com" sx={{ color: '#001F54' }}>
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://facebook.com" sx={{ color: '#001F54' }}>
          <FacebookIcon />
        </IconButton>
      </ListItem>
    </List>
  </Drawer>
</AppBar>

  );
};

export default Navbar;
