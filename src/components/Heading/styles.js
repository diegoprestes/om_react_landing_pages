import styled, { css } from 'styled-components';

const mediaFont = (theme) => css`
  @media ${theme.media.sm} {
    font-size: ${theme.fonts.sizes['4xl']};
  }
`;

const titleSize = {
  sm: (theme) => css`
    font-size: ${theme.fonts.sizes.md};
  `,
  md: (theme) => css`
    font-size: ${theme.fonts.sizes.lg};
  `,
  lg: (theme) => css`
    font-size: ${theme.fonts.sizes.xl};
  `,
  xl: (theme) => css`
    font-size: ${theme.fonts.sizes.lg};
    ${mediaFont(theme)};
  `
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)}
  `}
`;
