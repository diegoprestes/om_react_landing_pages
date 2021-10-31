import Base from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import { mock } from './mock';

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mock}>children</Base>);
    expect(container).toMatchSnapshot();
  });
});
