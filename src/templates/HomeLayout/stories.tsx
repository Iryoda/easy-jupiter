import { Meta, Story } from '@storybook/react/types-6-0';
import { GlobalContainer } from 'components/GlobalContainer/styles';
import HomeLayout from '.';

export default {
    title: 'Templates/HomeLayout',
    component: HomeLayout,
} as Meta;

export const Default: Story = () => (
    <GlobalContainer>
        <HomeLayout />
    </GlobalContainer>
);
