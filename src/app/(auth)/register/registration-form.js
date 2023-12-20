'use client';
import Button from '@/app/ui/components/button';
import TextField, { Check } from '@/app/ui/components/text-field';
import { Grid, Link, Stack, Typography } from '@mui/material';
import { Form, useForm } from 'react-hook-form';

export default function RegistrationForm() {
  const { control } = useForm();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">
          Create An Account
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                control={control}
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField name="lastName" control={control} label="Last Name" />
            </Grid>
            <Grid item xs={12}>
              <TextField name="email" control={control} label="Email" />
            </Grid>
            <Grid item xs={12}>
              <TextField name="password" control={control} label="Password" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                control={control}
                label="Confirm Password"
              />
            </Grid>
            <Grid item xs={12}>
              <Check
                name="subscription"
                label="Subscribe to newsletter"
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                By registering, you agree to the terms of use and{' '}
                <Link
                  href="#"
                  sx={{ color: 'text.main' }}
                >
                  Privacy Policy
                </Link>{' '}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack>
                <Button variant="contained">register</Button>
                <Typography align="center">
                  Already have an account? <Button color='primary'>sign in</Button>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
