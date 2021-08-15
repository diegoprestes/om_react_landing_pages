import SectionBackground from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

describe('<SectionBackground />', () => {
  it('should render with dark background', () => {
    const { container } = renderTheme(
      <SectionBackground hasBackground>
        <h1>children</h1>
      </SectionBackground>
    );
    expect(container).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with light background', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>children</h1>
      </SectionBackground>
    );
    expect(container).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
