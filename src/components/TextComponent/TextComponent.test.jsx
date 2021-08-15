import TextComponent from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    const { container } = renderTheme(<TextComponent>children</TextComponent>);

    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>children</TextComponent>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
