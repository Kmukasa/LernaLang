import React from "react";
import { View } from "react-native";
import { Chat } from "..";

const ChatMeta = {
  title: "Chat",
  component: Chat,
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

export default ChatMeta;

export const Basic = {};
