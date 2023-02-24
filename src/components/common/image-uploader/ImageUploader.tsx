import { Box, IconButton, Stack } from '@mui/material';
import React, { useState, useRef } from 'react';
import { uploadPicture } from '../../../../firebaseConfig';
import { getEnvVariables } from '../../../utilities/getEnv';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import Renderer from './Renderer';

const ImageUploader = () => {
	const [imageUrl, setyImageUrl] = useState<null | string>(null);
	const { storageBaseUrl } = getEnvVariables();
	const [loading, setLoading] = useState(false);
	const inputRef = useRef(null) as React.MutableRefObject<null> | React.MutableRefObject<HTMLInputElement>;

	const handleSubmit = async (filelist: FileList | null) => {
		setLoading(true);
		if (filelist) {
			try {
				const result = await uploadPicture(filelist[0] as Blob);
				console.log(result);
				setyImageUrl(`${storageBaseUrl}${result?.metadata.name}?alt=media&token=`);
				setLoading(false);
			} catch (err) {
				console.error(err);
				setyImageUrl('');
				setLoading(false);
			}
		}
	};

	const handleRef = () => {
		if (inputRef && inputRef.current) {
			inputRef.current.click();
		}
	};

	const unselectImage = () => {
		setyImageUrl(null)
	}

	return (
		<Box
			sx={{
				border: '1px dashed #B2B2B2',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<input
				style={{ display: 'none' }}
				type="file"
				accept='image/*'
				ref={inputRef}
				placeholder="testing upload"
				onChange={(e) => handleSubmit(e.target.files)}
			/>
			<Box sx={{ width: "50%" }}>
				<IconButton color="primary" onClick={handleRef}>
					<CloudUploadRoundedIcon />
				</IconButton>
				<IconButton 
					color="secondary" 
					disabled={!imageUrl}
					onClick={unselectImage}
				>
					<CloseRoundedIcon />
				</IconButton>
			</Box>
			<Box sx={{ width: "50%" }}
			>
				<Renderer loading={loading} url={imageUrl} />
			</Box>
		</Box>
	);
};

export default ImageUploader;
