"use client"

import { useState } from 'react';
import LogoTxt from '../assets/logo';
import MenuDrawer from './xs-drawer';
import { MenuSubTitle } from './md-menu';
import { Menu, Person } from '@mui/icons-material';
import { AppBar, Button, Box, IconButton, Stack, Toolbar} from '@mui/material';
import Link from 'next/link';

export default function Header() {
  const [mobileDrawer, setMobileDrawer] = useState(false);

  const toggleMobileDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setMobileDrawer(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
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
              display: { xs: 'grid', sm: 'none' },
            }}
            onClick={() => setMobileDrawer(true)}
          >
            <Menu />
          </IconButton>

          <Stack direction={"row"}>
            <Link href={"/"}>
            <LogoTxt /></Link>
          </Stack>

          <Stack>
            <MenuSubTitle />
          </Stack>

          <Button color="inherit" sx={{ textTransform: 'none' }}>
            <Person fontSize='inherit' />&nbsp;
            <span>Sign in</span>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}