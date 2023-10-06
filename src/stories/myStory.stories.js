import { Button } from "./Button"
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'My stories',
  component: Button,
  decorators: [withDesign],
}

export const myStory = () => <Button>Hello, World!</Button>

myStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  },
}