import React, { useState } from "react";
import { View } from "react-native";
import { SelectableCard } from "../";
import { ActivitiesIcon, MusicIcon } from "../../assets/icons";

const SelectableCardMeta = {
  title: "SelectableCard",
  component: SelectableCard,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    id: "hobbies",
    text: "Hobbies",
    onPress: () => {
      console.log("pressed Option 1");
    },
    selected: false,
    children: <ActivitiesIcon width={34} height={34} color="#0601B4" />,
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
    id: "music",
    text: "Music",
    selected: false,
    children: <MusicIcon height={34} width={34} color="#0601B4" />,
  },
};
