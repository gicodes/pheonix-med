import Link from 'next/link';
import { Metadata } from 'next';
import Page from '@/app/assets/page-template';
import { Box, Card, Stack, Typography } from '@mui/material';

export const generateMetadata = (): Metadata => {
  return {
    title: "Phoenix Medical - Pharmacy",
    description: "Lock-in Pharmacy Stores",
  };
};

const Pharmacy = () => {
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
          Lock-in Prices of Your Routine Meds
        </Typography>
        <Card sx={{ p: 2, mt: 3}} className='bg-pheonix'>
          <Typography color='white'>Pharmacies are Amazing!</Typography>  
        </Card>
      </Box>
    </Page>
  )
}

export default Pharmacy;