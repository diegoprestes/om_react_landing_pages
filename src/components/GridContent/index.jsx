import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground hasBackground={background}>
      <Styled.Container>
        <Heading uppercase colorDark={!background}>
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: PropTypes.string,
  html: PropTypes.string,
  background: PropTypes.bool
};

export default GridContent;
