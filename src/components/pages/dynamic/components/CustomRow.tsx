import React from 'react';
import { Box } from '@mui/material';
import { Media } from '../../../common/section-card/Types';
import { CenteredContainer } from '../../../common/styles/customElements';
import { blue, red } from '@mui/material/colors';

export const CustomRow = ({ from, row }: { from: string; row: Array<Media> }) => {
  const color = from === "reading" ? blue : red;

  return (
    <CenteredContainer>
      {
        row.map(({ id, link, title }: Media) => (
          <Box 
            key={id}
            component="div"
            sx={{
              width: "fit-content",
              borderRadius: "5px",
              padding: "5px",
              background: color[200]
            }}
          >
            <a 
              style={{ 
                fontSize: 12.5, 
                cursor: "pointer", 
                textDecoration: "none",
                color: "#313638"
              }} 
              href={link === "#" ? undefined : link} 
              target="_blank" 
              rel="nonreferrer"
              >
                {title}
            </a>
          </Box>
        ))
      }
    </CenteredContainer>
  )
};