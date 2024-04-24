import {
  StyledContainer,
  StyledDescription,
  StyledTextContainer,
  StyledTitle,
} from '../../sections/Main/elements';

export const Main = ({ image, title, description }) => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
    </StyledContainer>
  );
};
