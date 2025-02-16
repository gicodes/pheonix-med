import { Stack, Typography } from '@mui/material'
import React from 'react'

const LogoTxt = () => {
  return (
    <Stack direction={"row"}>
      <Typography 
        variant="h6"
        component="div"
        fontWeight={700} 
        className='flame'
        sx={{ flexGrow: 1 }}
      >
        Pheonix
      </Typography>

      <Typography 
        variant="h6"
        color='coral'
        component='div'         
        className='flame-2'
        sx={{ flexGrow: 1, }}
      >
        Med
      </Typography>
    </Stack>
    
  )
}

export default LogoTxt