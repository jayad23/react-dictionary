import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';

export const LoginContainer = styled(Box)`
  background-image: url("https://wallpapertag.com/wallpaper/full/8/f/a/122368-amazing-design-background-1920x1080-for-iphone-5.jpg");
  background-size: cover;
  min-height: 100%;
  position: fixed;
  width: 100%;
  background-repeat: no-repeat;
  background-color: #4444;
`;

export const Glass = styled(Box)`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba( 9, 9, 9, 0.35 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(Box)`
  width: 320px;
  padding: 20px;
  background: rgba( 255, 255, 255, 1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`