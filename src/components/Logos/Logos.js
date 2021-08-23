import React from 'react';
import PropTypes from 'prop-types';
import {Logo} from './look';
import {useImage} from 'hooks';

export function Logos({ image, company, local, fallback }) {
  const {imgExists, setImgExist, imgFile} = useImage({image, local});

  if (local) {
    if (imgFile) {
      return <Logo src={imgFile} />;
    }
  }

  if (imgExists && image) {
    return (
      <Logo src={image} alt={company} onError={() => setImgExist(false)} />
    );
  }

  return fallback;
};

Logos.propTypes = {
  company: PropTypes.string,
  image: PropTypes.string,
  local: PropTypes.bool,
  fallback: PropTypes.node,
};
