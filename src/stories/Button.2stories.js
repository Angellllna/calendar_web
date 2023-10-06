// myStories.stories.jsx
import { Button } from "./Button";
import { withDesign } from "storybook-addon-designs";


export default {
  title: "Test",
  component: Button,
  decorators: [withDesign],
};

export const myStory = () => <Button />;

myStory.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
  },
};