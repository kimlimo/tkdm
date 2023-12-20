'use client';
import { Box, Grid } from '@mui/material';
import NewsSearch from './search';

// const navItems = [
//   {
//     item: 'Diaspora News',
//     url: '#',
//     stories: [],
//   },
//   {
//     item: 'Health',
//     url: '',
//     stories: [],
//   },
// ];

export const navItems = [
  'Diaspora News',
  'Health',
  'Travel',
  'Tech',
  'Culture',
  'Sports',
];

export default function MainHeader() {
  return (
    <Grid
      container
      spacing={3}
      sx={{ bgcolor: 'primary.main', pb: 1, justifyContent: 'center' }}
      justifyContent="start"
      alignItems="center"
    >
      {navItems.map((item) => (
        <Grid item zeroMinWidth key={item} sx={{ color: 'paper' }}>
          {item}
        </Grid>
      ))}
      {/* <NewsSearch /> */}
    </Grid>
  );
}
