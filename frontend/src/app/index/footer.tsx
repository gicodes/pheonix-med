import React from 'react'
import Image from "next/image";
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      display={"grid"}
      mx={"auto"}
      my={10} 
    >
      <Box 
        display={"flex"}
        justifyContent={"center"}
        gap={{ xs: 2, sm: 3, md: 4, lg: 5 }}
      >
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Docs
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Opt-in
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Subscribe →
        </a>
      </Box>

      <Stack
        direction={"row"}
        mx={"auto"}
        py={2}
        spacing={2}
      >
        <Typography variant={"body2"} color={"gray"}>
          Terms & Conditions &nbsp; |
        </Typography>
        <Typography variant={"body2"} color={"gray"}>
          Privacy Policy &nbsp; |
        </Typography>
        <Typography variant={"body2"} color={"gray"}>
          Cookie Policy
        </Typography>
      </Stack>

      <Box mt={5} mx={"auto"}>
        <Typography variant={"caption"} color={"darkgray"}>
          © 2025 Phoenix Medicals. All rights reserved.
        </Typography>
      </Box>
    </Box>
    
  )
}

export default Footer