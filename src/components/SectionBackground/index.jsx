import PropTypes from 'prop-types';
import SectionContainer from '../SectionContainer';
import * as Styled from './styles';

const SectionBackground = ({ children, hasBackground = false }) => {
  return (
    <Styled.Container hasBackground={hasBackground}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
  hasBackground: PropTypes.bool
};

export default SectionBackground;
