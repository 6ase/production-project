import type { Meta, StoryObj } from '@storybook/react';
import  Modal from './Modal';
import { themeDecorator } from '../../../../../config/storybook/decorators/themeDecorator';



// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Shared/Modal',
	component: Modal,
		
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Opend: Story = {
	decorators: [ themeDecorator ],
	args: {
		children: 'Кнопка',
		isActive: true
		
	},
};



