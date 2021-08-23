import {useState} from 'react';

export function useImage({image, local}) {
	const [imgExists, setImgExist] = useState(true);
	const imgFile = image && local ? require(`images/${image}`).default : null;
	
	return {
		imgExists,
		setImgExist,
		imgFile,
	};
}