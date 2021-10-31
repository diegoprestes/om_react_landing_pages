import PropTypes from 'prop-types';
import * as Styled from './styles';
import TextComponent from '../TextComponent';
import SectionContainer from '../SectionContainer';

const Footer = ({ children }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{children}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  children: PropTypes.node.isRequired
};

export default Footer;
