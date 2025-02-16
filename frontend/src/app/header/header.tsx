"use client"

import Link from 'next/link';
import { useState } from 'react';
import LogoTxt from '../assets/logo';
import MenuDrawer from './sm-drawer';
import { MenuSubTitle } from './md-menu';
import { Menu, Person } from '@mui/icons-material';
import { AppBar, Button, Box, IconButton, Stack, Toolbar} from '@mui/material';

export default function Header() {
  const [mobileDrawer, setMobileDrawer] = useState(false);

  const toggleMobileDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setMobileDrawer(open);
  };

  return (
    <Box width={"100%"} zIndex={'999'} position={"fixed"} sx={{ flexGrow: 1 }}>
      <MenuDrawer open={mobileDrawer} toggleDrawer={toggleMobileDrawer} />
      
      <AppBar position="static">
        <Toolbar 
          sx={{
            width: '100%',
            justifyContent: 'space-between',
            padding: { xs: '1rem 0.75rem', md: '1rem 3rem' },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ 
              display: { sm: 'grid', md: 'none' },
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
            <MenuSubTitle />
          </Link>

          <Button color="inherit" sx={{ textTransform: 'none', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <Link href={'/auth/login'}>
              <Person fontSize='inherit' />&nbsp;
              <span>Sign in</span>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}