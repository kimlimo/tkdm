'use client';
import RoomIcon from '@mui/icons-material/Room';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Grid, Link, Paper, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Button from '@/app/ui/components/button';
import useDisclosure from '@/hooks/useDisclosure';
import Dialog from '@/app/ui/components/dialog';
import Image from 'next/image';

export default function EventCard({ event }) {
  const theme = useTheme();
  const { open, toggleOpen, handleClose } = useDisclosure();

  return (
    <Paper elevation={2}>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="/event.png"
          alt="Live event"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <EventDetails event={event} toggleOpen={toggleOpen} />
            <Dialog open={open} handleClose={handleClose}>
              <EventDetails event={event} toggleOpen={toggleOpen} fullDetails />
            </Dialog>
          </CardContent>
        </Box>
      </Card>
    </Paper>
  );
}

function EventDetails({ event, toggleOpen, fullDetails = false }) {
  return (
    <Grid container spacing={3}>
      {fullDetails && (
        <Grid item xs={12}>
          <Image src="/event.png" alt={event.title} width={600} height={400} />
        </Grid>
      )}
      <Grid item xs={12}>
        <Stack spacing={2} justifyContent="start">
          {!fullDetails && (
            <Stack direction="row" justifyContent="space-between">
              <Typography component="div" variant="h5" color="primary">
                {event.start} - {event.end}
              </Typography>
              <Link href={event.url}>
                <OpenInNewIcon />
              </Link>
            </Stack>
          )}
          <Typography variant="subtitle1" color="text" component="div">
            {event.title}
          </Typography>
          <Typography>Organizer: {event.organizer}</Typography>
          <Typography>
            {fullDetails
              ? event.description
              : `${event.description.split('.').slice(0, 3).join('. ')}.`}
          </Typography>
        </Stack>
        {!fullDetails && (
          <Button color="primary" onClick={toggleOpen}>
            more details
          </Button>
        )}
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Stack direction="row">
              <RoomIcon />
              <Typography>{event.venue}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" justifyContent="end">
              <Typography>{event.cost || 'Free'}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
