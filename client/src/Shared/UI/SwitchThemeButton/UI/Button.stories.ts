import type { Meta, StoryObj } from '@storybook/react';
import  Button, { ButtonStyle } from './Button';
import { themeDecorator } from '../../../../../config/storybook/decorators/themeDecorator';



// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Shared/Button',
	component: Button,
		
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Clear: Story = {
	decorators: [ themeDecorator ],
	args: {
		children: 'Кнопка',
		theme: ButtonStyle.CLEAR
	},
};
export const Switcher: Story = {
	decorators: [ themeDecorator ],
	args: {
		children: 'Кнопка',
		theme: ButtonStyle.SWITCHER
	},
};
export const Toogle: Story = {
	decorators: [ themeDecorator ],
	args: {
		children: 'Кнопка',
		theme: ButtonStyle.TOOGLE
	},
};


