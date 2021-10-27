import PropTypes from 'prop-types';
import * as Styled from './styles';

const TextComponent = ({ children }) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

TextComponent.propTypes = {
  children: PropTypes.node.isRequired
};

export default TextComponent;
