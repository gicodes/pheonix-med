import { Alert, Typography } from "@mui/material";
import Link from "next/link";
import React from 'react';

export const VerifyWarning = () => {
  return (
    <Alert
      severity='warning'
      sx={{
        p: 2,
        mx: 'auto',
        my: {xs: 1, sm: 2, md: 3},
        bgcolor: 'wheat',
        width: { md: '75%', lg: '50%' },
      }}
    >
      <Typography width={'100%'} fontSize={'small'}>
        Your account requires verification. Proceed to upload your 
        <Link href={"#documents-upload"}>{' '}
          <b className='underline'>documents</b>
        </Link> 
      </Typography>
    </Alert>
  )
}