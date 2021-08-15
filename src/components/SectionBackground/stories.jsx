import SectionBackground from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus tempora
          temporibus obcaecati ea. Magnam commodi totam, enim placeat molestias, mollitia harum
          dignissimos adipisci, quibusdam deleniti cupiditate architecto? Soluta, itaque?
        </p>
      </div>
    )
  },
  argTypes: {
    children: { type: '' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
