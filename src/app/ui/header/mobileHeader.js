'use client';
import {
  Box,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navItems } from './mainHeader';
import useDisclosure from '@/hooks/useDisclosure';
import NewsSearch from './search';

export default function MobileHeader() {
  const disclosure = useDisclosure();
  return (
    <Grid
      container
      spacing={2}
      sx={{ bgcolor: 'primary.main' }}
      justifyContent="start"
      alignItems="center"
    >
      {disclosure.open ? (
        <MobileMenu {...disclosure} />
      ) : (
        <>
          <MobileMenu {...disclosure} />
          <NewsSearch />
        </>
      )}
    </Grid>
  );
}

function MobileMenu({ open, handleOpen, handleClose }) {
  return (
    <>
      {open ? (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <IconButton onClick={handleClose} color="inherit" disableRipple>
            <CloseIcon />
          </IconButton>
          <List>
            {navItems.map((item) => (
              <ListItemButton key={item}>
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      ) : (
        <Grid item zeroMinWidth>
          <Box sx={{ color: 'paper' }}>
            <IconButton onClick={handleOpen} color='inherit' disableRipple>
              <MenuIcon />
            </IconButton>
          </Box>
        </Grid>
      )}
    </>
  );
}
