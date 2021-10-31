import GridTwoColumn from '.';

import args from './mock';

export default {
  title: 'Components/GridTwoColumn',
  component: GridTwoColumn,
  args: args
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
