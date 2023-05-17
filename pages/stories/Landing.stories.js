import React from "react";
import { View } from "react-native";
import { Landing } from "../";

const LandingMeta = {
  title: "Landing",
  component: Landing,
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
          height: 100,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default LandingMeta;

export const Basic = {};
