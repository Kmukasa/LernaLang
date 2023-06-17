import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Chat, ChatHistory, ChatOptions, Profile } from "../../pages";
import {
  ProfileIcon,
  ChatIcon,
  HistoryIcon,
  StudyIcon,
} from "../../assets/icons";
import Study from "../../pages/Study/Study";

const Tab = createBottomTabNavigator();

const BottomBarNavigator = ({ chatStarted }) => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{ showLabel: false }}
    >
      <Tab.Screen
        name="Chat"
        component={chatStarted ? Chat : ChatOptions}
        options={{
          tabBarIcon: () => <ChatIcon height={"40px"} width={"40px"} />,
        }}
      />
      <Tab.Screen
        name="Study"
        component={Study}
        options={{
          tabBarIcon: () => <StudyIcon height={"45px"} width={"45px"} />,
        }}
      />
      <Tab.Screen
        name="Chat History"
        component={ChatHistory}
        options={{
          tabBarIcon: () => <HistoryIcon height={"50px"} width={"50px"} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <ProfileIcon height={"32px"} width={"32px"} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomBarNavigator;
