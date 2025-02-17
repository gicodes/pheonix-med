import { MedicalInformation } from '@mui/icons-material';
import { FaClinicMedical } from 'react-icons/fa';
import { Stack, Typography } from '@mui/material';
import React from 'react';

const LogoTxt = () => {
  return (
    <Stack
      boxShadow={'0px 2px 10px rgba(0, 0, 0, 0.1)'} 
      direction={"column"} 
      p={'4px 12px'}
    >
      <Typography 
        variant="h6"
        component="div"
        fontWeight={400} 
        className='flame'
        sx={{ flexGrow: 1 }}
      >
        Pheonix
      </Typography>

      <Stack direction={"row"} mt={-1} className='text-wheat' >
        <FaClinicMedical className='my-auto' />
        <Typography 
          justifyContent={'flex-end'}
          display={'flex'}
          variant="h6"
          color='burlywood'
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