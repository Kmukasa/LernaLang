import React from "react";
import { View } from "react-native";
import { Header, CloseButton } from "../";
import { LadderIcon } from "../../assets/icons";
const HeaderMeta = {
  title: "Header",
  component: Header,
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
    leftButton: {
      control: {
        type: "object",
      },
    },
    rightButton: {
      control: {
        type: "object",
      },
    },
  },
  args: {
    text: "Header",
    leftButton: (
      <CloseButton
        height={40}
        weight={40}
        onPress={() => console.log("Clicked close")}
      />
    ),
    rightButton: <LadderIcon height={40} weight={40} />,
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

export default HeaderMeta;

export const Basic = {};

export const WithText = {
  text: "Header",
};
