import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import { Title, JobTitle, Avatar } from './look';

import Contacts from 'components/ContactFactory';

export default function BusinessCard({ personalInfo }) {
  const { name, jobTitle, location, contacts, avatar } = personalInfo;
  const { firstName, lastName } = name;

  return (
    <Card>
      {avatar && <Avatar>
        <img width="200px" src="https://ca.slack-edge.com/E017D49VC3F-W018GBWJJ9K-e64f5c7e29a9-512" alt="profile picture" />
      </Avatar>}
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
      <Contacts contactInfo={contacts} />
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
