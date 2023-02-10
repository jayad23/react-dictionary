import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';

export const CustomBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
  padding-top: 30px;
`;

export const CustomBoxElement = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "30px",
  justifyContent: "start",
  padding: "30px 10px",
  [theme.breakpoints.down('md')]:{
    justifyContent: "center",
    padding: "30px 0px",
  }
}));

export const CenteredContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 3px;
`;