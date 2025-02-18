import { Box } from '@mui/material';
import Image from "next/image";
import React from 'react';

const IndexFooter = () => {
  return (
    <Box
      display={"grid"}
      mx={"auto"}
      my={2} 
    >
      <Box 
        display={"flex"}
        justifyContent={"center"}
        gap={{ xs: 2, sm: 3, md: 4, lg: 5 }}
      >
        <a
          href=""
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
          href=""
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
          href=""
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
      <hr/>
    </Box>
  )
}

export default IndexFooter