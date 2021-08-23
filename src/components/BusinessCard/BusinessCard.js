import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import {Title, JobTitle, Avatar} from './look';
import {useImage} from 'hooks';
import {ContactFactory} from 'components';


export default function BusinessCard({ personalInfo }) {
  const {name, jobTitle, location, contacts, avatar} = personalInfo;
  const {firstName, lastName } = name;
  const {imgExists, setImgExist, imgFile} = useImage({image: avatar, local: true});

  const avatarMarkup = avatar && imgExists ? <Avatar>
    <img width="200px" src={imgFile} alt="avatar" onError={() => setImgExist(false)} />
  </Avatar> : null;

  return (
    <Card>
      {avatarMarkup}
      <Title>
        {firstName}
        <strong> {lastName}</strong>
      </Title>
      <JobTitle>
        {jobTitle}
        <div>
          <small>{location}</small>
        </div>
      </JobTitle>
      <ContactFactory contactInfo={contacts} spaced />
    </Card>
  );
}

BusinessCard.propTypes = {
  name: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
  jobTitle: PropTypes.string,
  contacts: PropTypes.array,
  avatar: PropTypes.string,
};
