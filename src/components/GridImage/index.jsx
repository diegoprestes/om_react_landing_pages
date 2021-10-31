import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const GridImage = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground hasBackground={background}>
      <Styled.Container>
        <Heading size="xl" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((item) => (
            <Styled.GridElement key={item.srcImg}>
              <Styled.Image src={item.srcImg} alt={item.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      altText: PropTypes.string.isRequired,
      srcImg: PropTypes.string.isRequired
    })
  ).isRequired,
  background: PropTypes.bool
};

export default GridImage;
