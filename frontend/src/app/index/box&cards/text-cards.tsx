import { Box, Typography } from '@mui/material'
import React from 'react';

export const TextCard = () => (
    <Box my={2} p={1} textAlign={'center'}>
      <Typography
        width={'100%'}
        my={2}
        fontFamily={'Times, Times New Romans, sans-serif, Times New Romans'}
        fontWeight={{ xs: 400, sm: 501, md: 669}}
        fontSize={{ xs: '25px', sm: '35px', md: '40px'}}
      >
        A Small Act, A Big Impact. 
        <span className='block cursive mt-1'> We literally supply the 
          <b className='flame'> Vitamin-U</b> lacked 
        </span>
      </Typography>
    </Box>
  )

export const AboutPhenixText = () => (
  <Box 
    p={{ xs: 1.5, sm: 2, md: 3}} 
    textAlign={"center"} 
    color={"#101010"}
  >
    <Typography 
      p={1}
      fontSize={{ xs: '12.5px', sm: '15px', md: '17.5px', lg: '20px'}}
    >
      <span>Phoenix Med is revolutionizing healthcare access by combining compassion, convenience, and experience&#8212; All at an affordable rate.</span>
      <span className='block'>Our platform bridges the gap between patients, doctors, nurses, and philanthropists, ensuring that life-saving medications and healthcare services are within reach for everyone ...</span> 
      <span>from our <b>PriceLock</b> 🔐 feature that protects clients from medication price surges to our <b>Save-a-Life</b> initiative that connects those in need with generous donors, we are redefining how healthcare should work&#8212; fair, accessible, and secure.</span>
      <span className='block'>With freelancing doctors and nurses available for consultations and home care, Phoenix Med is more than just a healthcare provider; 
      it’s a community-driven ecosystem where wellness meets innovation. Whether you're securing long-term prescriptions, 
      consulting with a doctor online, or hiring a certified nurse, we make healthcare simple, secure, and affordable.</span>
    </Typography>
  </Box>
)
