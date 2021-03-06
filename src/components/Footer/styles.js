import styled, { css } from 'styled-components';

import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.fonts.sizes.sm};
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration: none;
    }

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${TextComponent} {
      font-size: ${theme.fonts.sizes.sm};
    }
  `}
`;
