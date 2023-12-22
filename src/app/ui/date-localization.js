'use client'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

export default function Localization({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      {children}
    </LocalizationProvider>
  );
}