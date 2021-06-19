import { renderTheme } from '../../styles/render-theme';

import Heading from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

describe('<Heading />', () => {
  test('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.lg,
      'text-transform': 'none'
    });
  });

  test('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white
    });
  });

  test('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="sm">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.md
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="md">texto</Heading>
      </ThemeProvider>
    );

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.lg
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="lg">texto</Heading>
      </ThemeProvider>
    );

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xl
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="xl">texto</Heading>
      </ThemeProvider>
    );

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.lg
    });
  });

  test('should render correct font-size when desktop', () => {
    renderTheme(<Heading size="xl">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes['4xl'], {
      media: theme.media.sm
    });
  });

  test('should render with uppercase letter', () => {
    renderTheme(<Heading uppercase>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase'
    });
  });

  test('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
