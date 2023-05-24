import type { Meta, StoryObj } from '@storybook/react';
import NavBarLink from './NavBarLink';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Widgets/NavBarLink',
	component: NavBarLink,
		
} satisfies Meta<typeof NavBarLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const StandardNavBar: Story = {
	
};

