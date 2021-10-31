import Footer from '.';

export default {
  title: 'Components/Footer',
  component: Footer,
  args: {
    children: `<p><a href="https://google.com">Feito com ❤ por Diego Prestes</a></p>`
  },
  argTypes: {
    children: { type: 'string' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
