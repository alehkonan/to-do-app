import { AppBar, IconButton, List, ListItem, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import { Box } from '@mui/system';

export const Layout: FC = () => {
  return (
    <Box display="grid" component="main">
      <AppBar position="static">
        <Box display="flex" justifyContent="space-between" p={1}>
          <IconButton>
            <FastfoodIcon />
          </IconButton>
          <Typography variant="h6" component="h1">
            Мои 100 желаний
          </Typography>
          <IconButton>
            <HelpOutlineSharpIcon />
          </IconButton>
        </Box>
      </AppBar>
      <Box component="aside" sx={{ width: '10%', backgroundColor: '#E1BB80' }}>
        <List component="nav">
          <ListItem>
            <Link to="/">Main</Link>
          </ListItem>
          <ListItem>
            <Link to="game">Game</Link>
          </ListItem>
        </List>
      </Box>
      <Outlet />
      <Box component="aside" sx={{ width: '10%', backgroundColor: '#E1BB80' }}>
        <List component="nav">
          <ListItem>
            <Link to="/">Main</Link>
          </ListItem>
          <ListItem>
            <Link to="game">Game</Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
