import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  max-width: 512px;
  margin: auto;
  border: solid 1px ${({ color, theme }) => color || theme.color };
  background: ${({ color, theme }) => color || theme.color };
  color: ${({ text, theme }) => text || theme.fontColor };
  white-space: pre-line;
`;

export const Title = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Date = styled.p`
  margin: unset;
  text-align: right;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.7;
`;

export const ImageWrapper = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.8;
  }
`;

export default Section;
