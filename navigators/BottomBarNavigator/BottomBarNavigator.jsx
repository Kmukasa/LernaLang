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
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Chat"
        component={chatStarted ? Chat : ChatOptions}
        options={{
          tabBarIcon: ({ focused }) => (
            <ChatIcon
              height={"40px"}
              width={"40px"}
              color={focused ? "#000" : "#808080"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Study"
        component={Study}
        options={{
          tabBarIcon: ({ focused }) => (
            <StudyIcon
              height={"45px"}
              width={"45px"}
              color={focused ? "#000" : "#808080"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat History"
        component={ChatHistory}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <HistoryIcon
                height={"50px"}
                width={"50px"}
                color={focused ? "#000" : "#808080"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <ProfileIcon
              height={"32px"}
              width={"32px"}
              color={focused ? "#000" : "#808080"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomBarNavigator;
