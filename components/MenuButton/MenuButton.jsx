import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const MenuButton = ({ text, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
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
    margin: 10,
    padding: 5,
    borderColor: "#0601B4",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 250,
  },
  buttonText: {
    padding: 10,
    color: "#000",
    fontSize: 18,
    textAlign: "center",
  },
});

export default MenuButton;
