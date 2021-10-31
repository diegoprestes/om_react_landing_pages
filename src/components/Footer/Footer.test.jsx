import Footer from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer>children</Footer>);
    expect(container).toMatchSnapshot();
  });
});
