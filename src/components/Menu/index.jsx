import PropTypes from 'prop-types';
import * as Styled from './styles';
import SectionContainer from '../SectionContainer';
import NavLinks from '../NavLinks';
import LogoLink from '../LogoLink';
import { Menu as IconMenu } from '@styled-icons/material-outlined/Menu';
import { Close as IconClose } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

const Menu = ({ links, logoData }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Styled.Button onClick={() => setVisible(!visible)} aria-label="Open/Close menu">
        {visible ? <IconClose aria-label="Close menu" /> : <IconMenu aria-label="Open menu" />}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(!visible)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: PropTypes.shape(LogoLink.propTypes).isRequired
};

export default Menu;
