import React from "react";
import { View } from "react-native";
import { CardList } from "../";
import {
  ActivitiesIcon,
  MusicIcon,
  SportsIcon,
  FoodIcon,
  TravelIcon,
} from "../../assets/icons";

const CardListMeta = {
  title: "CardList",
  component: CardList,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    items: [
      {
        id: "1",
        text: "Hobbies",
        icon: <ActivitiesIcon height={34} width={34} color="#0601B4" />,
      },
      {
        id: "2",
        text: "Music",
        icon: <MusicIcon height={34} width={34} color="#0601B4" />,
      },
      {
        id: "3",
        text: "Sports",
        icon: <SportsIcon height={34} width={34} color="#0601B4" />,
      },
      {
        id: "4",
        text: "Food",
        icon: <FoodIcon height={34} width={34} color="#0601B4" />,
      },
      {
        id: "5",
        text: "Travel",
        icon: <TravelIcon height={34} width={34} color="#0601B4" />,
      },
    ],
    scrollDirection: "horizontal",
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

export default CardListMeta;

export const Basic = {};
