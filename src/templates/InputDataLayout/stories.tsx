import { Meta, Story } from '@storybook/react/types-6-0';
import { GlobalContainer } from 'components/GlobalContainer/styles';
import InputLayout from '.';

export default {
    title: 'Templates/InputLayout',
    component: InputLayout,
} as Meta;

export const Default: Story = () => (
    <GlobalContainer>
        <InputLayout />
    </GlobalContainer>
);
