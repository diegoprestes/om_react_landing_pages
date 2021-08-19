import styled, { css } from 'styled-components';

import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: ${theme.spacings.lg};

    @media ${theme.media.sm} {
      grid-template-columns: 1fr 2fr;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xl};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.lg};

    @media ${theme.media.sm} {
      margin-bottom: 0;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css``}
`;

export const Image = styled.img`
  ${({ theme }) => css``}
`;
