import styled from 'styled-components';
import {
    SectionContainer,
  } from '~/components';

export const StyledContainer = styled(
  ({ height, variant = 'contained', color = 'main', ...props }) => (
    <SectionContainer {...props} />
  )
)`
  align-items: center;
  background-color: #f9f9f9;
`;
