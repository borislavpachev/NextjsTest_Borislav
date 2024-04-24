import styled from 'styled-components';
import { SectionContainer, SectionSubheading } from '~/components';

export const StyledContainer = styled(
  ({ height, variant = 'contained', color = 'main', ...props }) => (
    <SectionContainer {...props} />
  )
)`
  align-items: center;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 8.5rem;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    border: 2px solid #00bfff;
    width: 100%;

    h3 {
      text-decoration: underline;
      color: #00bfff;
    }
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: 65%;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  margin: 1rem;
`;

export const StyledLogo = styled(({ ...props }) => <div {...props} />)`
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const StyledHeading = styled(({ height, ...props }) => (
  <SectionSubheading {...props} />
))`
  color: black;
  margin: 0;
  font-weight: 600;
`;

export const StyledParagraphContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  margin: 0;
`;
