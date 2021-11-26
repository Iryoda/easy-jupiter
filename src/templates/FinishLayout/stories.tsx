import { Meta, Story } from '@storybook/react/types-6-0';
import { GlobalContainer } from 'components/GlobalContainer/styles';
import FinishLayout from '.';

export default {
    title: 'Templates/FinishLayout',
    component: FinishLayout,
} as Meta;

export const Default: Story = () => (
    <GlobalContainer>
        <FinishLayout />
    </GlobalContainer>
);
