import { Meta, Story } from '@storybook/react/types-6-0'
import Header from '.'

export default {
    title: 'Header',
    component: Header,
    parameters: {
        background: 'dark'
    },
    args: {}
} as Meta

export const Default: Story = () => <Header />
