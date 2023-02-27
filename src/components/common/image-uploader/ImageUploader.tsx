import { Box, IconButton, Stack } from '@mui/material';
import React, { useState, useRef } from 'react';
import { uploadPicture } from '../../../../firebaseConfig';
import { getEnvVariables } from '../../../utilities/getEnv';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import ImageRender from './components/ImageRender';
import { DashedBox } from './style/ImageUploadStyles';
import {ComposedBox} from './components/ComposedBox';

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
				setyImageUrl(`${storageBaseUrl}${result?.metadata.name}?alt=media&token=`);
				setLoading(false);
			} catch (err) {
				setyImageUrl('');
				setLoading(false);
			}
		}
	};

	const handleInputChange = () => {
		if (inputRef && inputRef.current) {
			inputRef.current.click();
		}
	};

	const unselectImage = () => {
		setyImageUrl(null)
	}

	return (
		<DashedBox>
			<input
				style={{ display: 'none' }}
				name="upload picture"
				type="file"
				accept='image/*'
				ref={inputRef}
				placeholder="hidden_input"
				onChange={(e) => handleSubmit(e.target.files)}
			/>
			<ComposedBox>
				<IconButton name="CloudIconWrapper" color="primary" onClick={handleInputChange}>
					<CloudUploadRoundedIcon />
				</IconButton>
				<IconButton
					name="CloseIconWrapper" 
					color="secondary" 
					disabled={!imageUrl}
					onClick={unselectImage}
				>
					<CloseRoundedIcon />
				</IconButton>
			</ComposedBox>
			<ComposedBox>
				<ImageRender 
					loading={loading} 
					url={imageUrl} 
				/>
			</ComposedBox>
		</DashedBox>
	);
};

export default ImageUploader;
