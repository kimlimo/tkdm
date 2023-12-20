'use client'
import { Button as Btn } from '@mui/material';

export default function Button({ children, variant = 'text', color = 'text' }) {
  return (
    <Btn variant={variant} color={color} size="small">
      {children}
    </Btn>
  );
}
