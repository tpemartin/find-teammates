import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Dashboard } from '@mui/icons-material';

export default function BulletinBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Dashboard style={{marginRight: "20px"}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Find My Teammates Bulletin Board
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}