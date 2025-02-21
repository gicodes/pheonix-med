"use client"

import Link from 'next/link';
import { useState } from 'react';
import LogoTxt from '../assets/logo';
import MenuDrawer from './sm-drawer';
import { MenuSubTitle } from './md-menu';
import { useRouter } from 'next/navigation';
import { Menu, Person } from '@mui/icons-material';
import { useAuth } from "../contexts/auth.context";
import { AppBar, Button, Box, IconButton, Stack, Toolbar} from '@mui/material';

export default function Header() {
  const router = useRouter();
  const { state, dispatch } = useAuth();
  const [ mobileDrawer, setMobileDrawer ] = useState(false);

  const toggleMobileDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setMobileDrawer(open);
  };

  const username = state.user?.name;

  const LogOut = () => {
    if (state?.isAuthenticated) {
      alert("You are logging out... Confirm?")
      dispatch({ type: "LOGOUT"});
      router.push('/')
    }
    return
  }

  return (
    <Box 
      width={"100%"} 
      zIndex={'999'} 
      position={"fixed"} 
      sx={{ flexGrow: 1 }}
    >
      <MenuDrawer 
        open={mobileDrawer} 
        toggleDrawer={toggleMobileDrawer} 
        username={username || undefined}
      />
      
      <AppBar position="static">
        <Toolbar 
          sx={{
            width: '100%',
            justifyContent: 'space-between',
            padding: { xs: '0.5rem 0.75rem', md: '0.5rem 3rem' },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ 
              display: { sm: 'grid', md: 'none' },
              boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'
            }}
            onClick={() => setMobileDrawer(true)}
          >
            <Menu sx={{ fontSize: { xs: '30px', sm: '40px'}}} />
          </IconButton>

          <Stack mx={{ xs: 'auto', sm: 'auto', md: '0'}}>
            <Link href={"/"}>
              <LogoTxt />
            </Link>
          </Stack>

          <Link href={"#"} // this link function refreshes the page. Good UX
          >
            <MenuSubTitle name={username || null} />
          </Link>

          <Button 
            color="inherit" 
            sx={{ 
              textTransform: 'none', 
              boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' 
            }}
          >
            { state.isAuthenticated && state?.user?.name ? 
              <span onClick={LogOut} className='text-burly dy-flex'>
                <Person fontSize='inherit' />&nbsp;
                <span>Logout</span>
              </span>
              :
              <Link href={'/auth/login'} className='dy-flex'>
                <Person fontSize='inherit' color='disabled' />&nbsp;
                <span>Login</span>
              </Link>
            }
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}