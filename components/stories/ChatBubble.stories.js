import React from "react";
import { View } from "react-native";
import { ChatBubble } from "../";

const ChatBubbleMeta = {
  title: "ChatBubble",
  component: ChatBubble,
  args: {
    text: "Habari Keisha, ulifanya nini leo?",
    translation: "Hello Keisha, what did you do today?",
    leftBubble: true,
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

export default ChatBubbleMeta;

export const Basic = {};

export const RightBubble = {
  args: {
    leftBubble: false,
  },
};

export const LongResponse = {
  args: {
    text: "Marafiki zangu walinitembelea leo.\
 Niliwapikia chakula ya jioni.\
 Tulikula kuku na wali.",
  },
};
