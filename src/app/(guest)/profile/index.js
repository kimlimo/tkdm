'use client';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Grid } from '@mui/material';
import MyAccount from './my-account';
import MySubscriptions from './subscriptions';
import HelpCenter from './help-center';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pl: 3, width: '100%' }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function UserProfile() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="center"
      mt={5}
    >
      <Grid item xs={12} sm={8} lg={6}>
        <Typography variant="h3">Account & Settings</Typography>
      </Grid>
      <Grid item xs={12} sm={8} lg={8}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab label="My Account" {...a11yProps(0)} />
              <Tab label="Subscriptions" {...a11yProps(1)} />
              <Tab label="Help Center" {...a11yProps(2)} />
            </Tabs>
          </Grid>
          <Grid item xs={8}>
            <TabPanel value={value} index={0}>
              <MyAccount />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <MySubscriptions />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <HelpCenter />
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
