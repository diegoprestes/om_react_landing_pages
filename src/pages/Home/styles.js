import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme, background }) => css`
    background: ${background || theme.colors.primaryColor};
  `}
  color: white;
`;
