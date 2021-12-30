import React, {ComponentProps} from 'react';
import {Meta, Story} from '@storybook/react';
import HeaderComponent from './Header';

export default {
  "component": HeaderComponent,
  "title": `Components/Header`
} as Meta;

const Template: Story<ComponentProps<typeof HeaderComponent>> = (args) => {
  return (
    <HeaderComponent
      {...args}
    />
  );
};


export const Header = Template.bind({});

Header.args = {
  links: [
    {
      link: '/',
      title: 'All'
    },
    {
      link: '/favorites',
      title: 'Favorites'
    }
  ]
};
