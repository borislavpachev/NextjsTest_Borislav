import {
  StyledContainer,
  StyledDescription,
  StyledTextContainer,
  StyledTitle,
  StyledInnerContainer,
  StyledImageContainer,
  StyledCardContainer,
  StyledParagraph,
} from '../../sections/Main/elements';
import { Card } from '../../collections/Card/Card';

import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShapes,
  faMagnifyingGlass,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';

const cardProps = [
  {
    logo: <FontAwesomeIcon icon={faShapes} />,
    title: 'Brief',
    text: 1,
  },
  {
    logo: <FontAwesomeIcon icon={faMagnifyingGlass} />,
    title: 'Search',
    text: 1,
  },
  {
    logo: <FontAwesomeIcon icon={faPeopleGroup} />,
    title: 'Pitch',
    text: 1,
  },
];

export const Main = ({ image, title, description }) => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledInnerContainer>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        <StyledCardContainer>
          {cardProps.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </StyledCardContainer>
      </StyledInnerContainer>
    </StyledContainer>
  );
};
