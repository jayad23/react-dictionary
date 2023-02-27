import { ReactNode } from 'react';
import { Box } from "@mui/material";

export const ComposedBox = ({ children }:{ children: ReactNode }) => (
  <Box sx={{ width: "50%" }}>
    {children}
  </Box>
)