import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, CardMedia } from '@mui/material';

const ImageRender = ({ url, loading }: { url: string | null; loading: boolean }) => {
	if (loading && url === null) {
		return (
			<Box
				sx={{
					textAlign: 'center',
				}}
			>
				<CircularProgress size="20px" />
			</Box>
		);
	}

	return (
		<>
			{url ? (
				<CardMedia
					component="img"
					image={url}
					height="40"
					sx={{
						objectFit: 'contain',
					}}
					alt="image_uploaded"
				/>
			) : null}
		</>
	);
};

export default ImageRender;
