import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.sm} {
      padding-top: 5.4rem;
    }
  `}
`;
