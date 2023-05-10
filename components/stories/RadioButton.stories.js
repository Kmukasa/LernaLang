import React from "react";
import { View } from "react-native";
import { RadioButton } from "../";

const RadioButtonMeta = {
  title: "RadioButton",
  component: RadioButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    radioOptions: [
      {
        label: "Option 1",
        value: 1,
      },
      {
        label: "Option 2",
        value: 2,
      },
      {
        label: "Option 3",
        value: 3,
      },
    ],
    handleSelection: (value) => console.log(value),
  },
  decorators: [
    (Story) => (
      <View
        style={{
          //   alignItems: "center",
          backgroundColor: "white",
          justifyContent: "center",
          flex: 1,
          height: 100,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default RadioButtonMeta;

export const Basic = {};

export const LevelsExample = {
  args: {
    radioOptions: [
      {
        label: "Level 1",
        value: 1,
      },
      {
        label: "Level 2",
        value: 2,
      },
      {
        label: "Level 3",
        value: 3,
      },
    ],
  },
};

export const ExperienceExample = {
  args: {
    radioOptions: [
      {
        label: "Beginner",
        value: 1,
      },
      {
        label: "Intermediate",
        value: 2,
      },
      {
        label: "Proficient",
        value: 3,
      },
    ],
  },
};
