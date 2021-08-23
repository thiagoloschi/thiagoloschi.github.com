import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact';
import {IconWrapper} from './look';

export function ContactFactory({contactInfo, spaced, size}) {
  const Contacts = contactInfo.map(info => (
    <Contact {...info} key={info.name} />
  ));
  return <IconWrapper spaced={spaced} size={size}>{Contacts}</IconWrapper>;
}

ContactFactory.propTypes = {
  contactInfo: PropTypes.arrayOf(Object),
  spaced: PropTypes.bool,
  size: PropTypes.oneOf('small', 'medium'),
};