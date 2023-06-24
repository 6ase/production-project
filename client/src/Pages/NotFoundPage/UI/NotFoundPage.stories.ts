import type { Meta, StoryObj } from '@storybook/react';
import NotFoundPage from './NotFoundPage';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Pages/NotFoundPage',
	component: NotFoundPage,
		
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const StandardNotFoundPage: Story = {
	
};

