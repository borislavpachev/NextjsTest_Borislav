import styled from 'styled-components';
import { SectionContainer } from '~/components';

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    align-items: center;
    margin: 0;
    width: 100%;
  }
`;
