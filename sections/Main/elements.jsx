import styled from 'styled-components';
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from '~/components';

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 4rem;
  background-image: url('/img/background.png');
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 50%;
  font-family: sans-serif;
  margin: 0.5rem;
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