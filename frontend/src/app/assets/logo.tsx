import { Stack, Typography } from '@mui/material';
import { MonitorHeart } from '@mui/icons-material';
import React from 'react'

const LogoTxt = () => {
  return (
    <Stack direction={"column"}>
      <Typography 
        variant="h6"
        component="div"
        fontWeight={400} 
        className='flame'
        sx={{ flexGrow: 1 }}
      >
        Pheonix
      </Typography>

      <Stack direction={"row"} mt={-1} className='text-burly'>
        <MonitorHeart color="inherit" className='my-auto' />
        <Typography 
          display={'flex'}
          justifyContent={'flex-end'}
          variant="h6"
          component='div'
          fontWeight={600} 
          fontStyle={"italic"} 
          sx={{ flexGrow: 1 }}
        >
          Med
        </Typography> 
      </Stack>
      
    </Stack>
    
  )
}

export default LogoTxt