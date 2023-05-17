import React from "react";
import { View } from "react-native";
import { ChatHistoryCard } from "../";

const ChatHistoryCardMeta = {
  title: "ChatHistoryCard",
  component: ChatHistoryCard,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    date: {
      day: "12",
      month: "01",
      year: "2021",
    },
    language: "Kiswahili",
    description: "Habari ya nyumbani?",
    openChat: () => {
      console.log("Open chat");
    },
    deleteChat: () => {
      console.log("Delete chat");
    },
  },
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: "center",
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

export default ChatHistoryCardMeta;

export const Basic = {};
