import Base from '../../templates/Base';
import { mock } from '../../templates/Base/mock';
import * as Styled from './styles';

function Home() {
  return <Base {...mock} />;
}

export default Home;
