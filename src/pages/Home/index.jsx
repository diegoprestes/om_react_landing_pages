import Base from '../../templates/Base';
import { mockBase } from '../../templates/Base/stories';
import * as Styled from './styles';

function Home() {
  return <Base {...mockBase} />;
}

export default Home;
