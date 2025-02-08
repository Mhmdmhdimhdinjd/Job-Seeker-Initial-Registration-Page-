import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import mylogo from '../../assets/images/برنج نی نی 04.png'

const Logo = styled('img')({
  filter: 'brightness(0) invert(1)', 
  height: '40px',
  marginRight: '10px',
});

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#007BFF' }}> {/* پس‌زمینه آبی */}
      <Toolbar style={{ justifyContent: 'center' }}>
        <Box display="flex" alignItems="center">
          <Logo src={mylogo} alt="Logo" />
          <Typography variant="h6" style={{ color: 'white' }}> {/* متن سفید */}
            کاریابی
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
