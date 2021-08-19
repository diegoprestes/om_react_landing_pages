import Menu from '.';

import links from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links,
    logoData: {
      text: 'LOGO',
      link: '#target',
      srcImg: ''
    }
  },
  argTypes: {}
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
