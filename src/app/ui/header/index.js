'use client';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import MobileHeader from './mobileHeader';
import MainHeader from './mainHeader';
import Logo from '../logo';

export default function Header() {
  const theme = useTheme();
  const matchXS = useMediaQuery('(max-width:600px)');
  const matchLg = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            p: 2,
            alignItems: {xs: 'start', sm: 'end'},
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Logo />
          <Typography variant="h1">The Kenya Diaspora Media</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {matchXS && <MobileHeader />}
        {matchLg && <MainHeader />}
      </Grid>
    </Grid>
  );
}
