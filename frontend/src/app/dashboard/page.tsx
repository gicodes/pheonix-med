import Link from 'next/link';
import { Metadata } from 'next';
import UserProfile from './user-profile';
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
      <Box pt={{ md: 5}}>
        <UserProfile />
      </Box>
    </Page>
  ) 
}

export default Dashboard;