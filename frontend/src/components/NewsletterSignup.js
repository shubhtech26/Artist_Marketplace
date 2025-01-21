import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const NewsletterSignup = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 24px',
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 182, 193, 1) 100%)',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ 
          color: '#333', 
          fontWeight: '500', 
          marginRight: '16px',
          whiteSpace: 'nowrap',
        }}
      >
        Sign up to receive my free newsletter!
      </Typography>
      <TextField 
        variant="outlined" 
        placeholder="Enter your e-mail" 
        InputProps={{
          sx: {
            backgroundColor: '#fff',
            borderRadius: '50px',
            padding: '0px 12px',
            height: '40px',
          },
        }}
        sx={{
          width: '300px',
          marginRight: '12px', // Added space between input field and button
          '& .MuiOutlinedInput-root': {
            borderRadius: '50px',
            '& fieldset': {
              borderColor: '#ddd',
            },
            '&:hover fieldset': {
              borderColor: '#ccc',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#E91E63',
            },
          },
        }} 
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#E91E63',
          color: '#fff',
          padding: '10px 24px',
          borderRadius: '50px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#D81B60',
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default NewsletterSignup;
