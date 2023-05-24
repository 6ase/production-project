import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Widgets/Navbar',
	component: Navbar,
		
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const StandardNavBar: Story = {
	
};

