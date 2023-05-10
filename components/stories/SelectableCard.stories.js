import React, { useState } from "react";
import { View } from "react-native";
import { SelectableCard } from "../";
import { ActivitiesIcon } from "../../assets/icons";
import { MusicIcon } from "../../assets/icons";

const SelectableCardMeta = {
  title: "SelectableCard",
  component: SelectableCard,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hobbies",
    onPress: () => {
      console.log("pressed Option 1");
    },
    children: <ActivitiesIcon color="#0601B4" />,
    pressed: false,
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

export default SelectableCardMeta;

export const Basic = {};

export const Music = {
  args: {
    text: "Music",
    children: <MusicIcon color="#0601B4" />,
  },
};
