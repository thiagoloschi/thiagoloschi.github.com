import styled from 'styled-components';

export const Main = styled.main`
  @import url('${({ theme }) => theme.fontUrl}');
  font-family: ${({ theme }) => theme.fontName};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  max-height: 100vh;
  background-color: ${({ theme }) => theme.color };
  
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 2;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LeftSection = styled.section`
  display: flex;
  justify-content: center;
  flex: 1;
  min-width: 400px;
  z-index: 1;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const FixedContent = styled.section`
  position: fixed;
  flex: 1;
  width: inherit;
  z-index: -1;

  @media only screen and (max-width: 1024px) {
    position: initial;
    width: 100%;
  }
`;

export const RightSection = styled.section`
  width: 40%;
  min-width: 300px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;
