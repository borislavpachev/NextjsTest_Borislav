import {
  StyledContainer,
  StyledImageContainer,
  StyledParagraphContainer,
  StyledTextContainer,
  StyledHeading,
  StyledLogo,
} from '../Card/elements';

export const Card = ({ logo, title, text }) => {
  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledLogo>{logo}</StyledLogo>
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledHeading>{title}</StyledHeading>
        <StyledParagraphContainer>{text}</StyledParagraphContainer>
      </StyledTextContainer>
    </StyledContainer>
  );
};
