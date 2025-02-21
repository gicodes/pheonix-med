import Link from 'next/link';
import { Metadata } from 'next';
import LoginForm from './login-form';
import Page from '@/app/assets/page-template';
import { Box, Stack, Typography } from '@mui/material';

export const generateMetadata = (): Metadata => {
  return {
    title: "Phoenix Medicals - Login",
    description: "Sign in to access your Pheonix-Med account",
  };
};

const Login = () => {
  return (
    <Page>
      <Box 
        my={{ xs: 1.5, sm: 3, md: 6}}
        width={'100%'} 
        textAlign={'center'}
      >
        <Box>
          <LoginForm />

          <Stack 
            mt={4} 
            direction={'row'}
            alignItems={'center'} 
            justifyContent={'center'}
          >
            <Typography variant='caption' color='white'>
              Don't have an Account with us? 
            </Typography>&nbsp;
            <Link href={'/auth/register'} className='text-wheat fs-small pheonix-effect'> 
              Register here
            </Link>
          </Stack>
        </Box>
      </Box>
    </Page>
  )
}

export default Login;