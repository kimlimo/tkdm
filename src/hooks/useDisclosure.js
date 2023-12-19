'use client'
import { useState } from 'react';

export default function useDisclosure() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleOpen = () => setOpen((prev) => !prev);

  return { open, handleClose, handleOpen, toggleOpen };
}
