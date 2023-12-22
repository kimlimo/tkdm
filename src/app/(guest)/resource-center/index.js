'use client';
import { Grid, Typography } from '@mui/material';
import Contacts from './contacts';

export default function ResourceCenter() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              Resouce Center
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Contacts />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
