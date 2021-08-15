import TextComponent from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure eligendi libero
      incidunt magnam quasi officiis quis labore ullam perspiciatis tenetur nam natus,
      aperiam eius, eaque fuga iste sequi totam.`
  },
  argTypes: {
    children: { type: 'string' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
