import React from 'react';
import { Box, } from '@mui/material';
import {TextCard} from './box&cards/text-cards';
import ClickImages from './box&cards/click-card';
import NonClickImages from './box&cards/non-click-card';

const Overview = () => {
  return (
    <Box p={{ xs: 2, sm: 3, md: 4}}>
      <NonClickImages />
      <TextCard />
      <ClickImages />
    </Box>
  )
}

export default Overview