import type { Meta, StoryObj } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';



// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Widgets/LangSwitcher',
	component: LangSwitcher,
		
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const StandardLangSwitcher: Story = {
	
};

