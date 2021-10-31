import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const GridText = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground hasBackground={background}>
      <Styled.Container>
        <Heading size="xl" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((item) => (
            <Styled.GridElement key={item.title}>
              <Heading size="md" colorDark={!background} as="h3">
                {item.title}
              </Heading>
              <TextComponent>{item.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  background: PropTypes.bool
};

export default GridText;
