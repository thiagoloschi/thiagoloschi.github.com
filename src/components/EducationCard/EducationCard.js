import React from 'react';
import PropTypes from 'prop-types';
import { Title, Date, ImageWrapper } from 'components/Card/look';
import { School, Major, Badge, ContainedCard, InfoSection } from './look';

export default function EducationCard({
  period,
  school,
  major,
  color,
  type,
  place,
  badge,
  url,
}) {
  const { beginDate, endDate } = period;

  return (
    <ContainedCard>
      <ImageWrapper href={url} target="_blank" rel="noopener noreferrer">
        <Badge src={badge} title={school} alt={school} color={color} />
      </ImageWrapper>
      <InfoSection>
        <Title>
          <School>{school}</School>
        </Title>
        <Major>
          {major} - <small>{place}</small>
        </Major>
        <small>{type}</small>
      </InfoSection>
    </ContainedCard>
  );
}

EducationCard.propTypes = {
  period: PropTypes.shape({
    beginDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  school: PropTypes.string,
  major: PropTypes.string,
  type: PropTypes.string,
  place: PropTypes.string,
  color: PropTypes.string,
};
