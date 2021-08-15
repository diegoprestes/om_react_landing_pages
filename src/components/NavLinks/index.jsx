import PropTypes from 'prop-types';
import * as Styled from './styles';

import MenuLink from '../MenuLink';

const NavLinks = ({ links = [] }) => {
  return (
    <Styled.Container>
      {links.map((link, index) => (
        <MenuLink key={`menu-link-${index}`} {...link} />
      ))}
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      children: PropTypes.string.isRequired,
      newTab: PropTypes.bool
    })
  )
};

export default NavLinks;
