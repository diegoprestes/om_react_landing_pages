import Base from '.';

import mock from './mock';
import GridText from '../../components/GridText';
import gridMock from '../../components/GridText/mock';

export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} />
      <GridText {...gridMock} background={true} />
      <GridText {...gridMock} />
      <GridText {...gridMock} background={true} />
    </>
  ),
  ...mock
};

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};