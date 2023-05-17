import React from "react";
import { View } from "react-native";
import { ChatHistory } from "..";

const ChatHistoryMeta = {
  title: "ChatHistory",
  component: ChatHistory,
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

export default ChatHistoryMeta;

export const Basic = {};
