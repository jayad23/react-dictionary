import React, { useContext, useRef } from 'react';
import {Box, Typography} from '@mui/material';
import { Media } from '../../../common/section-card/Types';
import { SearchContext } from '../../../../context/Context';
import { CenteredContainer } from '../../../common/styles/customElements';
import { blue, red } from '@mui/material/colors';

export const CustomRow = ({ from, row }: { from: string; row: Array<Media> }) => {
  const { state } = useContext(SearchContext);
  const anchorText = state.lang === "es" ? "Ir" : "Go";
  const anchorRef = useRef(null) as React.MutableRefObject<null> | React.MutableRefObject<HTMLAnchorElement>;

  const handleFooterRef = () => {
    if(anchorRef && anchorRef.current){
      anchorRef.current.click();
    }
  };
  
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
              padding: "2px 5px 0px 5px",
              background: color[200]
            }}
          >
            <Typography 
              sx={{ 
                fontSize: 12.5, 
                cursor: "pointer", 
                color: "bolder" 
              }} 
              color="text.secondary" 
              gutterBottom
              onClick={handleFooterRef}
              >
              {title}
            </Typography>
            <a 
              style={{ display: "none" }} 
              href={link} 
              target="_blank" 
              rel="nonreferrer"
              ref={anchorRef}
              >
                {anchorText}
            </a>
          </Box>
        ))
      }
    </CenteredContainer>
  )
};