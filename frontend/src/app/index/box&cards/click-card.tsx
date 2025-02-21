"use client";

import { Box, Button, Stack, Typography } from '@mui/material';
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
      justifyContent={{ sm: 'center', md: 'space-around'}}
    >
      { clickImages.map((image) => (
        <Box key={image?.title} my={1}>
          <ClickImageCard image={image.src}>
            <Stack
              padding={2}
              bottom={0}
              position={'absolute'}
              bgcolor={'rgba(0, 0, 0, 0.6)'}
              text-shadow={'1px 1px 5px rgba(0, 0, 0, 0.7)'}
            >
              <Typography 
                mb={{ xs: 5, sm: 4, md: 6}}
                color='white' 
                fontSize={'smaller'}
              >
                {image?.description}
              </Typography>
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
            </Stack>
          </ClickImageCard>
        </Box>
      ))}
    </Box>
  );
};

export default ClickImages;