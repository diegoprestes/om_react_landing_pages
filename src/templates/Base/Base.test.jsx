import Base from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import { mockBase } from './stories';

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mockBase}>children</Base>);
    expect(container).toBeInTheDocument();
  });
});
