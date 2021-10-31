import PropTypes from 'prop-types';
import * as Styled from './styles';

import Heading from '../Heading';
import SectionBackground from '../SectionBackground';
import TextComponent from '../TextComponent';

const GridTwoColumn = ({ title, text, srcImg, hasBackground = false }) => {
  return (
    <SectionBackground hasBackground={hasBackground}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!hasBackground} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  srcImg: PropTypes.string.isRequired,
  hasBackground: PropTypes.bool
};

export default GridTwoColumn;
