import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Pages/AboutPage',
	component: AboutPage,
		
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const StandardAboutPage: Story = {
	
};

