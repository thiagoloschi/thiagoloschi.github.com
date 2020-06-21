import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Title, Date, ImageWrapper } from 'components/Card/look';
import { FixedSizeCard, Description, Company } from './look';
import { Logos } from 'components';

export default function ExperienceCard({
  period,
  jobTitle,
  company,
  location,
  description,
  url,
  image,
  color,
  text,
  local = false,
}) {
  const { beginDate, endDate } = period;

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
        <Date>
          {beginDate} - {endDate}
        </Date>
      </Title>
      <p>
        {jobTitle} - <small>{location}</small>
      </p>
      <Description>{description}</Description>
    </FixedSizeCard>
  );
}

ExperienceCard.propTypes = {
  period: PropTypes.shape({
    beginDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  jobTitle: PropTypes.string,
  company: PropTypes.string,
  image: PropTypes.string,
  local: PropTypes.bool,
  description: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};
