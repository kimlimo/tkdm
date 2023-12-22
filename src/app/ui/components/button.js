'use client';
import { Button as Btn } from '@mui/material';

export default function Button({
  children,
  sx,
  variant = 'text',
  color = 'text',
  ...rest
}) {
  return (
    <Btn variant={variant} color={color} size="small" sx={sx} {...rest}>
      {children}
    </Btn>
  );
}
