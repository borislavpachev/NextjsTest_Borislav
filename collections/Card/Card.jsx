import {
    StyledContainer,
    StyledImageContainer,
    StyledParagraph,
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
        <StyledParagraph>{text}</StyledParagraph>
      </StyledTextContainer>
    </StyledContainer>
  );
  
};
