'use client';
import Button from '@/app/ui/components/button';
import TextField from '@/app/ui/components/text-field';
import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { userDetails } from './my-account';

export default function HelpCenter() {
  const { control } = useForm();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h2" align="center" gutterBottom>
          Contact Us
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
                defaultValue={userDetails.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                control={control}
                label="Last Name"
                defaultValue={userDetails.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                control={control}
                label="Email"
                defaultValue={userDetails.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField name="subject" control={control} label="Subject" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                control={control}
                label="Description"
              />
            </Grid>

            <Grid item xs={4}>
              <Button variant="contained" fullWidth>submit</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
