import {
  Button,
  Card,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { FC, MouseEvent, useState } from 'react';
import { spheres } from '../../data/spheres';
import { Wish } from '../../types';

type Props = {
  number: number;
  wish: Wish;
};
export const WishCard: FC<Props> = ({ number, wish }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const openMenu = (e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const closeMenu = () => setAnchorEl(null);
  const selectOption = (e: MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  return (
    <Card key={wish.id} sx={{ display: 'flex', gap: 1 }}>
      <Typography>{number}</Typography>
      <Typography sx={{ flex: 1 }}>{wish.text}</Typography>
      <List>
        <ListItemButton onClick={openMenu}>
          <ListItemText>{spheres[selectedIndex].name}</ListItemText>
        </ListItemButton>
      </List>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={closeMenu}>
        {spheres.map((sphere, index) => (
          <MenuItem
            key={sphere.id}
            selected={index === selectedIndex}
            onClick={(e) => selectOption(e, index)}
          >
            {sphere.name}
          </MenuItem>
        ))}
      </Menu>
    </Card>
  );
};
