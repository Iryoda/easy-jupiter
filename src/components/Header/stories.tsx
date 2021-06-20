import { Meta, Story } from '@storybook/react/types-6-0'
import Header from '.'

export default {
    title: 'Header',
    component: Header,
    args: {}
} as Meta

export const Default: Story = () => <Header />
