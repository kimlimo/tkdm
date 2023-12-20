'use client';
import Button from '@/app/ui/components/button';
import Dialog from '@/app/ui/components/dialog';
import { navItems } from '@/app/ui/header/mainHeader';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { Chip, Grid, Typography } from '@mui/material';
import { useState } from 'react';

export default function TopicSelection({ open, handleClose }) {
  const [topics, setTopics] = useState([]);
  const handleClick = (topic) => {
    if (topics.indexOf(topic) === -1) {
      setTopics((prev) => [...prev, topic]);
    } else {
      setTopics((prev) => prev.filter((item) => item !== topic));
    }
  };
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h3" align="center">
          Choose Your Preferred Topics
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        {navItems.map((item, idx) => (
          <Chip
            key={idx}
            label={item}
            onClick={() => handleClick(item)}
            icon={topics.indexOf(item) === -1 ? <AddIcon /> : <CheckIcon />}
            color={topics.indexOf(item) === -1 ? 'default' : 'primary'}
            variant={topics.indexOf(item) === -1 ? 'outlined' : 'contained'}
          />
        ))}
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button sx={{ fontSize: '1rem', fontWeight: '700' }}>
          Continue &rarr;
        </Button>
      </Grid>
    </Grid>
  );
}
