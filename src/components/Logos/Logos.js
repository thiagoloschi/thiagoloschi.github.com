import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Logo } from './look';

const Logos = ({ image, company, local, fallback }) => {
  const [imgExists, setImgExist] = useState(true);

  if (local) {
    const imgFile = require(`images/${image}`).default;

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

export default Logos;
