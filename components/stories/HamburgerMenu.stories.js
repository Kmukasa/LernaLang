import React from "react";
import { View } from "react-native";
import { HamburgerMenu } from "../";

const HamburgerMenuMeta = {
  title: "HamburgerMenu",
  component: HamburgerMenu,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    onPress: () => console.log("pressed"),
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

export default HamburgerMenuMeta;

export const Basic = {};
