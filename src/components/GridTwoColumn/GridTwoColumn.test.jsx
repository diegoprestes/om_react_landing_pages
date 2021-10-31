import GridTwoColumn from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridTwoColumn />', () => {
  it('should render grid with two columns with background', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid with two columns without background', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} hasBackground={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
