import React from "react";
import { View } from "react-native";
import { ChatOptions } from "../";

const ChatOptionsMeta = {
  title: "ChatOptions",
  component: ChatOptions,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {},
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "white",
          justifyContent: "center",
          flex: 1,
          height: "100%",
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default ChatOptionsMeta;

export const Basic = {};
