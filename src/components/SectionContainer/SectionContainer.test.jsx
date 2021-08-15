import SectionContainer from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

describe('<SectionContainer />', () => {
  it('should render content', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>children</h1>
      </SectionContainer>
    );
    expect(container).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
