import GoTop from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop'
  },
  argTypes: {
    children: { type: 'string' }
  }
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati itaque nostrum
        sapiente porro minima sunt labore officiis repudiandae voluptate ab modi vitae autem
        delectus velit pariatur, odio laborum nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati itaque nostrum
        sapiente porro minima sunt labore officiis repudiandae voluptate ab modi vitae autem
        delectus velit pariatur, odio laborum nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati itaque nostrum
        sapiente porro minima sunt labore officiis repudiandae voluptate ab modi vitae autem
        delectus velit pariatur, odio laborum nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati itaque nostrum
        sapiente porro minima sunt labore officiis repudiandae voluptate ab modi vitae autem
        delectus velit pariatur, odio laborum nulla.
      </p>
      <GoTop {...args} />
    </div>
  );
};
