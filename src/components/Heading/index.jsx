import PropTypes from 'prop-types';
import { Title } from './styles';

const Heading = ({ children, colorDark = true, as = 'h1', size = 'xl', uppercase = false }) => {
  return (
    <Title as={as} colorDark={colorDark} size={size} uppercase={uppercase}>
      {children}
    </Title>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  colorDark: PropTypes.bool,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  uppercase: PropTypes.bool
};

export default Heading;
