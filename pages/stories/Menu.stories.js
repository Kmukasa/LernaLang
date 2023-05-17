import React from "react";
import { View } from "react-native";
import { Menu } from "../";

const MenuMeta = {
  title: "Menu",
  component: Menu,
  argTypes: {},
  args: {},
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

export default MenuMeta;

export const Basic = {};
