'use client';
import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  Link as OuterLink,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { navItems } from '../header/mainHeader';
import Logo from '../logo';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import config from '@/config';
import Link from 'next/link';

const socialMedia = [
  {
    media: 'facebook',
    icon: <FacebookIcon color="inherit" />,
    url: 'https://www.facebook.com/KenyanDiasporaMedia',
  },
  {
    media: 'instagram',
    icon: <InstagramIcon color="inherit" />,
    url: 'https://www.instagram.com/kenyandiasporamedia',
  },
  {
    media: 'linkedin',
    icon: <LinkedInIcon color="inherit" />,
    url: 'https://linkedin.com/the-kenyan-diaspora-media',
  },
  {
    media: 'youtube',
    icon: <YouTubeIcon color="inherit" />,
    url: 'https://www.youtube.com/channel/UCRH3sweqGYZuwZrDIQ3EYJw',
  },
];

export function FooterLinks() {
  const theme = useTheme();
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: theme.palette.grey[200],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 2,
        }}
      >
        <Stack direction="row" spacing={2} justifyContent="center">
          <Typography variant="subtitle1">Follow Us:</Typography>
          <Stack direction="row" spacing={2} sx={{ color: 'text.main' }}>
            {socialMedia.map((item) => (
              <OuterLink color="inherit" key={item.media} href={item.url}>
                {item.icon}
              </OuterLink>
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} py={2}>
        <Stack direction="row" justifyContent="center" spacing={1}>
          <Typography variant="subtitle2">
            &copy;{new Date().getFullYear()}
            {config.brand}. All rights reserved
          </Typography>
          <Divider orientation="vertical" />
          <Link href="#">Privacy Policy</Link>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default function MainFooter() {
  const theme = useTheme();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ backgroundColor: theme.palette.grey[200] }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h3">{config.brand}</Typography>
          <Stack direction="row" spacing={1}>
            <Button>subscribe</Button>
            <Divider orientation="vertical" />
            <Button>sign in</Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <FooterItems />
      </Grid>
      <Grid item xs={12}>
        <FooterLinks />
      </Grid>
    </Grid>
  );
}

function FooterItems() {
  const csItems = ['Diaspora Services', 'Contact Us', 'Resource Center'];
  const featureItems = ['Newsletter', 'Videos Page', 'Events'];
  const adsItems = ['Advertising', 'Advertising Packages'];
  const moreItems = ['About Us', 'News Archive', 'Register'];
  return (
    <Grid container spacing={3} justifyContent="space-evenly">
      <Grid item zeroMinWidth>
        <List>
          <ListItemButton>
            <Typography variant="subtitle1">Browse</Typography>
          </ListItemButton>
          {navItems.map((item) => (
            <ListItemButton key={item}>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Grid>
      <Grid item zeroMinWidth>
        <List>
          <ListItemButton>
            <Typography variant="subtitle1">Customer Service</Typography>
          </ListItemButton>
          {csItems.map((item) => (
            <ListItemButton key={item}>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Grid>
      <Grid item zeroMinWidth>
        <List>
          <ListItemButton>
            <Typography variant="subtitle1">Features</Typography>
          </ListItemButton>
          {featureItems.map((item) => (
            <ListItemButton key={item}>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ mt: 3 }}>
          <Logo />
        </Box>
      </Grid>
      <Grid item zeroMinWidth>
        <List>
          <ListItemButton>
            <Typography variant="subtitle1">Ads</Typography>
          </ListItemButton>
          {adsItems.map((item) => (
            <ListItemButton key={item}>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Grid>
      <Grid item zeroMinWidth>
        <List>
          <ListItemButton>
            <Typography variant="subtitle1">More</Typography>
          </ListItemButton>
          {moreItems.map((item) => (
            <ListItemButton key={item}>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
