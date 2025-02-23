import { Metadata } from 'next';
import { Box } from '@mui/material';
import UserProfile from './user-profile';
import Page from '@/app/assets/page-template';

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