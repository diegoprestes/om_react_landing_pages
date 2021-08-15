import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    @media ${theme.media.sm} {
      flex-flow: row wrap;
    }
  `}
`;
