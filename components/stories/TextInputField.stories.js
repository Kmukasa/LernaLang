import React from "react";
import { View } from "react-native";
import { TextInputField } from "../";

const TextInputFieldMeta = {
  title: "TextInputField",
  component: TextInputField,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    value: "",
    sendResponse: (input) => {
      console.log(input);
    },
  },
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: "center",
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

export default TextInputFieldMeta;

export const Basic = {};
