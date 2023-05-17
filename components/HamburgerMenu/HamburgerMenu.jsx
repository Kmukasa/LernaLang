import React from "react";
import { StyleSheet, Pressable, View } from "react-native";

const HamburgerMenu = ({ onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.line}></View>
      <View style={styles.line}></View>
      <View style={styles.line}></View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  line: {
    backgroundColor: "#0601B4",
    width: 30,
    height: 4,
    margin: 3,
    borderRadius: 4,
  },
});

export default HamburgerMenu;
