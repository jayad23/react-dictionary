import { styled, keyframes } from '@mui/material';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FadeIn = styled('div')(({ duration }: { duration?: string }) => ({
  animation: fadeIn,
  animationDuration: duration || '0.5s',
  animationFillMode: 'both',
}));