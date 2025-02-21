import Link from 'next/link';
import { Metadata } from 'next';
import Page from '@/app/assets/page-template';
import RegistrationForm from './register-form';
import { Box, Stack, Typography } from '@mui/material';

export const generateMetadata = (): Metadata => {
  return {
    title: "Phoenix Medicals - Register",
    description: "Sign up to Pheonix-Meds & Services",
  };
};

const Register = () => {
  return (
    <Page>
      <Box 
        my={{ xs: 1.5, sm: 3, md: 6}}
        width={'100%'} 
        textAlign={'center'}
      >
        <Box>
          <RegistrationForm />
          <Stack 
            mt={4} 
            direction={'row'}
            alignItems={'center'} 
            justifyContent={'center'}
          >
            <Typography variant='caption' color='white'>
              Already have an Account with us? 
            </Typography>&nbsp;
            <Link href={'/auth/login'} className='text-wheat fs-small pheonix-effect'> 
              Login here
            </Link>
          </Stack>
        </Box>
      </Box>
    </Page>
  )
}

export default Register;