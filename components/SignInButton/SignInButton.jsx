import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const SignInButton = ({ text, onPress, children }) => {
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
      {children}
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    minWidth: 300,
    margin: 10,
    padding: 10,
    borderRadius: 30,
    borderColor: "#000",
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

export default SignInButton;
