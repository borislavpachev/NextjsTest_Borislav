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
    text: (
      <StyledParagraph>
        Complete <strong>brief writing or simple guidance</strong> on what
        include, we`ve got you covered
      </StyledParagraph>
    ),
  },
  {
    logo: <FontAwesomeIcon icon={faMagnifyingGlass} />,
    title: 'Search',
    text: (
      <StyledParagraph>
        In depth agency search covering; <strong>criteria matching</strong>,
        door knocking and due-diligence vetting.`,
      </StyledParagraph>
    ),
  },
  {
    logo: <FontAwesomeIcon icon={faPeopleGroup} />,
    title: 'Pitch',
    text: (
      <StyledParagraph>
        Comprehensive <strong>pitch management</strong>, including comms, diary
        management and pitch hosting
      </StyledParagraph>
    ),
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
          {cardProps.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </StyledCardContainer>
      </StyledInnerContainer>
    </StyledContainer>
  );
};
