import styled from 'styled-components';

export const IconWrapper = styled.article`
  display: ${({spaced}) => spaced ? 'flex' : 'block'};
  justify-content: ${({spaced}) => spaced ? 'space-around' : 'initial'};
  font-size: ${({size}) => size === 'small' ? '0.8rem' : 'inherit'};

  > :not(:last-child) {
    margin-right: 8px;
  }
`;
