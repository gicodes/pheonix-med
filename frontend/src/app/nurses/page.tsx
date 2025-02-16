import Link from 'next/link';
import { Metadata } from 'next';
import Page from '@/app/assets/page-template';
import { Box, Card, Stack, Typography } from '@mui/material';

export const generateMetadata = (): Metadata => {
  return {
    title: "Phoenix Medical - Nurses",
    description: "See a Nurse Nearby",
  };
};

const Nurses = () => {
  return (
    <Page>
      <Box 
        my={2}
        width={'100%'} 
        textAlign={'center'}
      >
        <Typography
          variant={'h6'}
          color='burlywood'
        >
          Visit a Homecare Around You
        </Typography>
        <Card sx={{ p: 2, mt: 3}} className='bg-pheonix'>
          <Typography color='white'>Nurses are amazing</Typography>
          
        </Card>
      </Box>
    </Page>
  )
}

export default Nurses;