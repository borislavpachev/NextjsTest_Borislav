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
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  background-image: url('/img/background.png');
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 50%;
  font-family: sans-serif;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
`;

export const StyledInnerContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem;
  width: 60%;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 40%;
  height: 100%;
  margin-right: 4rem;
`;

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledParagraph = styled(({ height, ...props }) => (
  <SectionParagraph {...props} />
))`
  color: black;
  margin: 0;
`;
