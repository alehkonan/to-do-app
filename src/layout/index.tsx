import React, { FC } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import styles from './styles.module.css';

export const Layout: FC = () => {
  return (
    <Box className={styles.layout}>
      <Box component="header" className={styles.header}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="h1">
          Мои 100 желаний
        </Typography>
        <IconButton>
          <HelpOutlineSharpIcon />
        </IconButton>
      </Box>
      <List component="nav" className={styles.navigation}>
        <ListItem>
          <Link to="/">Main</Link>
        </ListItem>
        <ListItem>
          <Link to="game">Game</Link>
        </ListItem>
      </List>
      <Outlet />
    </Box>
  );
};
