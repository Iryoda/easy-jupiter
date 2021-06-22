import { Story, Meta } from '@storybook/react/types-6-0'
import DropArea, { DropAreaProps } from '.'

export default {
    title: 'DropArea',
    component: DropArea,
    args: { setErrorMensage: (a: string) => a }
} as Meta

export const Default: Story<DropAreaProps> = (args) => {
    return <DropArea {...args} />
}
