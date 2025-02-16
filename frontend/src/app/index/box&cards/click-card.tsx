"use client";

import { Box, Button } from '@mui/material';
import { ClickImageCard, clickImages } from './image-cards';

const ClickImages = () => {
  return (
    <Box 
      p={0}
      my={1}
      mx={'auto'}
      gap={1}
      display={{ sm: 'grid', md: 'flex'}}
      flexWrap={{ md: 'wrap', lg: 'nowrap'}}
      justifyContent={{ sm: 'center', md: 'space-around', lg: 'space-between'}}
    >
      {clickImages.map((image) => (
        <Box key={image?.title} my={1}>
          <ClickImageCard image={image.src}>
            <Button
              color={image?.color as 'inherit' | 'warning' | 'primary' | 'secondary' | 'success' | 'error' | 'info'}
              variant='contained'
              sx={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                p: 1.5
              }}
            >
              {image?.title}
            </Button>
          </ClickImageCard>
        </Box>
      ))}
    </Box>
  );
};

export default ClickImages;