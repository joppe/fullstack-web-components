import { StoryFn } from '@storybook/web-components';

import './Card';

export default {
  title: 'Components/Card',
  argTypes: {
    image: {
      control: {
        type: 'text',
      },
    },
    headline: {
      control: {
        type: 'text',
      },
    },
    content: {
      control: {
        type: 'text',
      },
    },
    link: {
      control: {
        type: 'text',
      },
    },
  },
};

type PrimaryTemplateProps = {
  image: string;
  headline: string;
  content: string;
  link: string;
};

const PrimaryTemplate: StoryFn<PrimaryTemplateProps> = ({
  image,
  headline,
  content,
  link,
}: PrimaryTemplateProps) => {
  return `
    <in-card>
      <img slot="header" src="${image}" alt="Random image" />
      <h1 slot="header">${headline}</h1>
      <p slot="content">${content}</p>
      <a href="#" slot="footer">${link}</a>
    </in-card>
  `;
};

export const ImageCard = PrimaryTemplate.bind({});
ImageCard.args = {
  image: 'https://source.unsplash.com/random/300x200',
  headline: 'Food',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'Read',
};
