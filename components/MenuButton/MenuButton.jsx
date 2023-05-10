import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const MenuButton = ({ text }) => {
  const handlePress = () => {
    console.log("Pressed");
  };
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#ced5de" : "#ffff",
        },
        styles.buttonContainer,
      ]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    margin: 30,
    padding: 5,
    borderColor: "#0601B4",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    padding: 10,
    color: "#000",
    fontSize: 18,
    textAlign: "center",
  },
});

export default MenuButton;
