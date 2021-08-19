import NavLinks from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import links from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={links}>children</NavLinks>);
    expect(screen.getAllByRole('link')).toHaveLength(links.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks>children</NavLinks>);
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  it('should render media', () => {
    renderTheme(<NavLinks links={links}>children</NavLinks>);
    expect(screen.getByText(/link 8/i).parentElement).toHaveStyleRule('flex-flow', 'row wrap', {
      media: theme.media.sm
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={links}>children</NavLinks>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
