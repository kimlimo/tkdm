'use client';
import { Box, Button, Grid, IconButton, Grow, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import useDisclosure from '@/hooks/useDisclosure';
import { useRef } from 'react';

export default function NewsSearch() {
  const ref = useRef(null);
  const { toggleOpen, open } = useDisclosure();
  return (
    <>
      <Grid item zeroMinWidth>
        <Box sx={{ color: 'paper' }}>
          <IconButton onClick={toggleOpen} color="inherit" disableRipple>
            {open ? <CloseIcon /> : <SearchIcon />}
          </IconButton>
        </Box>
      </Grid>
      <Grid item zeroMinWidth sx={{ ml: -3 }} ref={ref}>
        <Grow in={open} direction="left" container={ref.current}>
          <Box
            sx={{
              display: 'flex',
              visibility: open ? 'visible' : 'hidden',
              gap: '5px',
            }}
          >
            <TextField
              size="small"
              fullWidth
              id="searchTerm"
              placeholder="search"
              sx={{
                minWidth: { md: '300px' },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent!important',
                },
              }}
            />
            <Button variant="contained" size="small" sx={{ bgcolor: 'grey' }}>
              search
            </Button>
          </Box>
        </Grow>
      </Grid>
    </>
  );
}
