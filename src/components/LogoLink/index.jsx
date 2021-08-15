import PropTypes from 'prop-types';
import * as Styled from './styles';

import Heading from '../Heading';

const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size="sm" uppercase>
      <Styled.Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: PropTypes.string.isRequired,
  srcImg: PropTypes.string,
  link: PropTypes.string.isRequired
};

export default LogoLink;
