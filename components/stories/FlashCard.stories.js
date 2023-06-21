import React from "react";
import { View } from "react-native";
import { FlashCard } from "..";

const FlashCardMeta = {
  title: "FlashCard",
  component: FlashCard,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    sideA: "Front",
    sideB: "Back",
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

export default FlashCardMeta;

export const Basic = {};
