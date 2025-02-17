import React from 'react';
import { Box, } from '@mui/material';
import {TextCard} from './box&cards/text-cards';
import ClickImages from './box&cards/click-card';
import NonClickImages from './box&cards/non-click-card';

const Overview = () => {
  return (
    <Box p={{ xs: '1rem 0', sm: 2, md: 3}}>
      <NonClickImages />
      <TextCard />
      <ClickImages />
    </Box>
  )
}

export default Overview