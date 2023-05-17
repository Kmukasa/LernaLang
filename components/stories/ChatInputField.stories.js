import React from "react";
import { View } from "react-native";
import { ChatInputField } from "..";

const ChatInputFieldMeta = {
  title: "ChatInputField",
  component: ChatInputField,
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

export default ChatInputFieldMeta;

export const Basic = {};
