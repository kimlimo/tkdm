'use client';

import Button from '@/app/ui/components/button';
import { Divider, Grid, Stack, Typography } from '@mui/material';
import { startCase } from 'lodash';
import EditIcon from '@mui/icons-material/Edit';

export const userDetails = {
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jdoe@gmail.com',
};
export default function MyAccount() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            My Account
          </Typography>
          <Button endIcon={<EditIcon />}>edit</Button>
        </Stack>
      </Grid>
      {Object.entries(userDetails).map(([key, value]) => (
        <Grid item xs={12} key={key} sx={{ mb: 3 }}>
          <Stack spacing={1}>
            <Typography variant="subtitle1">{startCase(key)}</Typography>
            <Typography>{value}</Typography>
          </Stack>
          <Divider />
        </Grid>
      ))}
      <Grid
        item
        xs={12}
        sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}
      >
        <Stack spacing={1}>
          <Typography variant="subtitle1">Password</Typography>
          <Typography>*******</Typography>
        </Stack>
        <Button variant="outlined" sx={{ height: 'max-content' }}>
          change password
        </Button>
      </Grid>
    </Grid>
  );
}
