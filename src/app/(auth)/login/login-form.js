'use client';
import Button from '@/app/ui/components/button';
import TextField, { Check } from '@/app/ui/components/text-field';
import { Grid, Link, Stack, Typography } from '@mui/material';
import { Form, useForm } from 'react-hook-form';

export default function LoginForm() {
  const { control } = useForm();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">
          Sign In
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField name="email" control={control} label="Email" />
            </Grid>
            <Grid item xs={12}>
              <TextField name="password" control={control} label="Password" />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" color="primary">
                Forgot your password?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack>
                <Button variant="contained">sign in &rarr;</Button>
                <Typography align="center">
                  Don&apos;t have an account?{' '}
                  <Button color="primary">register</Button>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
