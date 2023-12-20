import { Box, Dialog as MuiDialog } from '@mui/material';

export default function Dialog({
  children,
  open,
  handleOpen,
  handleClose,
  sx,
  width = 'md',
  ...others
}) {
  return (
    <MuiDialog
      sx={{ overflowY: 'scroll', ...sx }}
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth={width}
      scroll="paper"
      disableScrollLock
      {...others}
    >
      <Box sx={{ p: 2 }} alignContent="center">
        {children}
      </Box>
    </MuiDialog>
  );
}
