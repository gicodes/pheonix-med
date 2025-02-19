"use client";

import { Pagination, Dot } from '../../assets/pagination';
import { ImageCard, images } from './image-cards';
import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { styled } from '@mui/system';

const Container = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '0 5px 0 5px',
  flexDirection: 'column',
  justifyContent: 'center',
});

// Floating Text is disabled for Index page simplicity; && clickCards.FloatingText
const FloatingText = styled(Box)`
  position: absolute;
  bottom: 7.5%;
  width: auto;
  padding: 10px;
  max-width: 90%;
  color: whitesmoke;
  border-radius: 5px;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  font-family: Verdana, Geneva, sans-serif;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);

  @media (min-width: 769px) and (max-width: 1024px) {
    min-height: 145px;
    left: 5%;
    max-width: 40%;
  }

  @media (min-width: 1024px) {
    min-height: 150px;
    left: 5%;
    max-width: 20%;
  }
`;

const NonClickImages: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <ImageCard image={images[currentIndex].src}>
        {/* <FloatingText>
          <b className='text-wheat'>{images[currentIndex].title}</b>
          <Typography
            mt={{ xs: 1, sm: 1.5, md: 2, lg: 3}}
            fontSize={'small'}
          >
            {images[currentIndex].text}</Typography>
        </FloatingText> */}
        <Pagination>
          {images.map((_, index) => (
            <Dot isActive={index === currentIndex} key={index} />
          ))}
        </Pagination>
      </ImageCard>
    </Container>
  );
};

export default NonClickImages;