'use client'
import Dialog from '@/app/ui/components/dialog';
import useDisclosure from '@/hooks/useDisclosure';
import TopicSelection from './topic-selection';
import { useEffect } from 'react';

export default function Preferences() {
  const { open, handleOpen, handleClose } = useDisclosure();
  useEffect(() => {
    handleOpen();
  }, []);
  return (
    <Dialog open={open} handleClose={handleClose} width="sm">
      <TopicSelection />
    </Dialog>
  );
}
