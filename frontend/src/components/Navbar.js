import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // ✅ Import Cart Context
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
import Badge from '@mui/material/Badge'; // ✅ Import Badge for Cart Count
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/system';
import logo from '../assets/jc.png';

const Logo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: "'Dancing Script', cursive",
});

const ShopNowButton = styled(Button)({
  backgroundColor: '#FF4081',
  color: '#fff',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.875rem',
  padding: '10px 30px',
  borderRadius: '50px',
  marginLeft: '16px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#E73370',
  },
});

const buttonStyles = {
  color: '#F8E71C',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1rem',
  textTransform: 'none',
  margin: '0 10px',
  '&:hover': {
    color: '#FFD700',
    textDecoration: 'underline',
  },
  '&.active': {
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))',
    backdropFilter: 'blur(15px)',
    borderRadius: '25px',
    padding: '10px 20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    color: '#fff',
  },
};

const menuOptions = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Workshops', path: '/workshops' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart(); // ✅ Get cart data from context

  const handleShopNowClick = () => {
    navigate('/shop'); // Navigate to shop page
  };

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
        {/* Logo */}
        <Logo>
          <img src={logo} alt="Logo" style={{ width: '150px', height: '60px' }} />
        </Logo>

        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {menuOptions.map((option) => (
            <Button key={option.label} sx={buttonStyles} component={NavLink} to={option.path}>
              {option.label}
            </Button>
          ))}
          <ShopNowButton onClick={handleShopNowClick}>Shop Now</ShopNowButton>
        </Box>

        {/* Icons for Wishlist, Cart, and Account */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: '20px' }}>
          <IconButton sx={{ color: '#FFD700', '&:hover': { color: '#FF4081' } }}>
            <FavoriteBorderIcon />
          </IconButton>

          {/* ✅ Shopping Cart Icon with Badge */}
          <IconButton sx={{ color: '#FFD700', '&:hover': { color: '#FF4081' } }} onClick={() => navigate('/cart')}>
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <IconButton sx={{ color: '#FFD700', '&:hover': { color: '#FF4081' } }}>
            <AccountCircleIcon />
          </IconButton>
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton sx={{ color: '#FFD700' }} edge="start" aria-label="menu" onClick={() => setMobileMenuOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <List>
          {menuOptions.map((option) => (
            <ListItem button key={option.label} component={NavLink} to={option.path}>
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
            <IconButton sx={{ color: '#001F54' }}>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton sx={{ color: '#001F54' }} onClick={() => navigate('/cart')}>
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton sx={{ color: '#001F54' }}>
              <AccountCircleIcon />
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
