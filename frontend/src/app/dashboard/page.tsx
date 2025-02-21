import Link from 'next/link';
import { Metadata } from 'next';
import Page from '@/app/assets/page-template';
import { Box, Stack, Typography } from '@mui/material';

export const generateMetadata = (): Metadata => {
  return {
    title: "Phoenix Medicals",
    description: "Dashboard | User Profile | User Actions",
  };
};

const Dashboard = () => {
  return (
    <Page>
      <Box>

      </Box>
    </Page>
  )
}

export default Dashboard