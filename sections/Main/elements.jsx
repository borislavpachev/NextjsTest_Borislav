import styled from 'styled-components';
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
  SectionParagraph,
} from '~/components';

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  background-image: url('/img/background.png');

  @media (max-width: 1023px) {
    width: 100%;
    align-items: center;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 50%;
  font-family: sans-serif;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    width: 100%;
    align-items: center;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;

  @media (max-width: 1023px) {
    font-size: 1.5rem;
  }
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;

  @media (max-width: 1023px) {
    font-size: 1rem;
  }
`;

export const StyledInnerContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  align-items: center;
    width: 60%;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 70%;
  height: 100%;
`;

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  width: 100%;
  display: flex;
  margin: 2rem;
  flex-direction: column;
`;

export const StyledParagraph = styled(({ height, ...props }) => (
  <SectionParagraph {...props} />
))`
  color: black;
  margin: 0;
`;
