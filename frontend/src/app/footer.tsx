import React from 'react'
import Link from 'next/link';
import { Box, 
  Stack, 
  Typography 
} from '@mui/material';

const Footer = () => {
  return (
    <Box
      marginTop={'2rem'}
      display={"grid"}
      mx={"auto"}
      my={10} 
    >
      <Stack
        direction={"row"}
        mx={"auto"}
        py={2}
        spacing={2}
      >
        <Typography variant={"caption"} color={"gray"}>
          <Link href={''}>Terms & Conditions &nbsp; |</Link>
        </Typography>
        <Typography variant={"caption"} color={"gray"}>
          <Link href={''}>Privacy Policy &nbsp; |</Link>
        </Typography>
        <Typography variant={"caption"} color={"gray"}>
          <Link href={'#'}>Cookie Policy</Link>
        </Typography>
      </Stack>

      <Box my={2} mx={"auto"}>
        <Typography variant={"caption"} color={"darkgray"}>
          © 2025 Phoenix Medicals. All rights reserved.
        </Typography>
      </Box>
    </Box> 
  )
}

export default Footer
