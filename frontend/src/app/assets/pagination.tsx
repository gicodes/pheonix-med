import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const Pagination = styled(Box)({
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  display: 'flex',
  gap: '8px',
});

interface DotProps {
  isActive: boolean;
}

export const Dot = styled('div')<DotProps>(({ isActive }) => ({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  border: '0.1px solid gray',
  backgroundColor: isActive ? 'tomato' : 'lightgray',
}));