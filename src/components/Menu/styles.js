import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Container as SectionBackground } from '../SectionBackground/styles';
import { Title as Heading } from '../Heading/styles';

const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    background: ${theme.colors.white};
    height: 100vh;
    visibility: hidden;
    opacity: 0;
    transition: all 300ms ease-in-out;
    ${visible && menuVisible(theme)}

    > ${SectionContainer} {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      height: 100vh;
      overflow-y: auto;
      align-items: center;
      padding: 0 ${theme.spacings.lg};
    }

    > ${SectionBackground} {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }

    & ${Heading} {
      display: flex;
      justify-content: center;
      overflow-y: none;
      padding-bottom: ${theme.spacings.lg};
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.sm} {
      position: static;
      height: auto;
      border-bottom: 1px solid ${theme.colors.mediumGray};
      ${menuVisible(theme)};

      > ${SectionContainer} {
        display: block;
        height: auto;
        padding: 0;
      }

      & ${Heading} {
        display: block;
        padding: 0;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.xl} 0;

    @media ${theme.media.sm} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    display: block;
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    cursor: pointer;

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    @media ${theme.media.sm} {
      display: none;
    }
  `}
`;
