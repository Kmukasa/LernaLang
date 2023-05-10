import React from "react";
import { StyleSheet, Pressable, View } from "react-native";

const HamburgerMenu = ({ onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.line}></View>
      <View style={styles.line}></View>
      <View style={styles.line}></View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
  },
  line: {
    width: 30,
    height: 3,
    backgroundColor: "#0601B4",
    margin: 3,
  },
});

export default HamburgerMenu;
