import LogoLink from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink text="Hello World" link="#target" />);
    expect(screen.getByRole('heading', { name: 'Hello World' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Hello World' })).toHaveAttribute('href', '#target');
  });

  it('should render text image', () => {
    renderTheme(<LogoLink text="Hello World" link="#target" srcImg="image.jpg" />);
    expect(screen.getByRole('img', { name: 'Hello World' })).toHaveAttribute('src', 'image.jpg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink text="Hello World" link="#target" srcImg="image.jpg" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
