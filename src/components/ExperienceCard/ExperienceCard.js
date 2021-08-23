import React from 'react';
import PropTypes from 'prop-types';
import { Title, ImageWrapper } from 'components/Card/look';
import { FixedSizeCard, Description, Company } from './look';
import { Logos } from 'components';

export default function ExperienceCard({
  jobTitle,
  company,
  industry,
  location,
  contacts,
  description,
  url,
  image,
  color,
  text,
  local = false,
}) {

  return (
    <FixedSizeCard color={color} text={text}>
      <Title>
        <ImageWrapper
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={company}
        >
          <Logos
            image={image}
            fallback={<Company>{company}</Company>}
            local={local}
            company={company}
          />
        </ImageWrapper>
        {industry && <small>{String(industry).toUpperCase()}</small>}
      </Title>
      <p>
        {jobTitle} - <small>{location}</small>
      </p>
      {description && <Description>{description}</Description>}
    </FixedSizeCard>
  );
}

ExperienceCard.propTypes = {
  jobTitle: PropTypes.string,
  company: PropTypes.string,
  image: PropTypes.string,
  local: PropTypes.bool,
  description: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  industry: PropTypes.string,
  contacts: PropTypes.array,
};
