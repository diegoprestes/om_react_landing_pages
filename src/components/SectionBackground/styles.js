import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, hasBackground }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${hasBackground && containerBackgroundActivate(theme)}
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
