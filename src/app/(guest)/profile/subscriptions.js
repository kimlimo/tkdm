'use client';

import Button from '@/app/ui/components/button';
import { Divider, Grid, Stack, Typography } from '@mui/material';
import { startCase } from 'lodash';
import EditIcon from '@mui/icons-material/Edit';
import { Check } from '@/app/ui/components/text-field';
import { useForm } from 'react-hook-form';

export const userDetails = {
  firstName: 'Jane',
  lastName: 'Jane',
  email: 'jdoe@gmail.com',
};
export default function MySubscriptions() {
  const { control } = useForm();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Newsletter Subscription
        </Typography>
      </Grid>

      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>
              Manage your subscriptions below by checking/unchecking
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Check
              name="subscription"
              control={control}
              label="The Kenya Diaspora Media Newsletter"
            />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" fullWidth>
              subscribe
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
