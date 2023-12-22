'use client';

import {
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import EventCard from './event-card';
import DateField from '@/app/ui/components/date-field';
import NewsSearch from '@/app/ui/header/search';
import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import moment from 'moment';

const eventDetails = {
  start: '2022-01-08',
  end: '2022-01-08',
  title: '8th annual uk-east africa health summit',
  description:
    'Save the Dates : UK 🇬🇧 East Africa Health Summit is back on 24th and 25th April 2024 in London. – Financing the health workforce, future epidemics, climate change & medical research to achieve universal health coverage will be the cornerstone for the 8TH ANNUAL UK-EAST AFRICA HEALTH SUMMIT. The event will run from April 24-25, 2024, at Royal College of General Practitioners, 30 Euston Square, London NW1 2FB. Universal Health Coverage (UHC) means that all people have access to the full range of quality health services they need, when and where they need them, without financial hardship. Attendees will discuss the full continuum of essential health services, from health promotion to prevention, treatment, rehabilitation, and palliative care across the life course.',
  venue:
    'THE ROYAL COLLEGE OF GENERAL PRACTITIONERS 30 Euston Square London NW1 2FB, LONDON, United Kingdom',
  cost: 0,
  organizer: 'The East African Health Alliances',
  url: 'https://www.africa-uk-healthsummit.com/',
};
export default function Events() {
  const [date, setDate] = useState();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2">Events Schedule</Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between">
              <DatePicker
                sx={{ width: 260 }}
                slotProps={{
                  textField: { size: 'small' },
                  field: {
                    clearable: true,
                  },
                }}
                value={date}
                onChange={(newValue) => setDate(newValue)}
              />
              <TextField
                id="events-search"
                label="Search Events"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between"></Stack>
          </Grid>
          {[1, 2, 3, 4, 5].map((item) => (
            <Grid item xs={12} key={item}>
              <EventCard event={eventDetails} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
