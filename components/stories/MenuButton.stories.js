import React from "react";
import { View } from "react-native";
import { MenuButton } from "../";

export default {
  title: "MenuButton",
  component: MenuButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Chat History",
  },
  decorators: [
    (Story) => (
      <View
        style={{
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

export const Basic = {};

export const ChatHistory = {
  args: {
    text: "Chat History",
  },
};
