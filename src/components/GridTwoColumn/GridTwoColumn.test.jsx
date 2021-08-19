import GridTwoColumn from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridTwoColumn />', () => {
  it('should render grid with two columns', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
