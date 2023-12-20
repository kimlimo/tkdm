'use client';
import Button from '@/app/ui/components/button';
import config from '@/config';
import { Divider, Grid, Typography } from '@mui/material';
import LoginForm from './login-form';

export default function Login() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={3}
      mt={3}
    >
      <Grid item xs={12} sm={8} lg={4}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h1" align="center">
              {config.brand}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button color="primary" variant="contained">
              sign in with google
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Divider>OR</Divider>
          </Grid>
          <Grid item xs={12}>
            <LoginForm />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
