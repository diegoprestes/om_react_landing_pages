import SectionContainer from '.';

export default {
  title: 'Components/SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio fugiat hic,
          accusantium veniam laboriosam eos provident non quos maxime blanditiis consectetur iste
          explicabo? Repellendus odit libero recusandae exercitationem eligendi?
        </p>
      </div>
    )
  },
  argTypes: {
    children: { type: 'string' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
