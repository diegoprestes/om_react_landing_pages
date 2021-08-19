import Menu from '.';
import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

import links from '../NavLinks/mock';
const logoData = {
  text: 'Logo',
  link: '#target'
};

describe('<Menu />', () => {
  it('should render Logo and Menu Nav', () => {
    const { container } = renderTheme(<Menu links={links} logoData={logoData} />);

    expect(screen.getByRole('heading', { hidden: true })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { label: 'Main menu', hidden: true })
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button for open and close the menu', () => {
    renderTheme(<Menu links={links} logoData={logoData} />);

    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'block');
    expect(button).toHaveStyleRule('display', 'none', {
      media: theme.media.sm
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0');
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1');
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '0');
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);

    expect(
      screen.queryByRole('navigation', { label: 'Main menu', hidden: true }).firstChild
    ).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
