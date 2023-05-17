import React from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { CloseIcon } from "../../assets/icons";

const CloseButton = ({ width, height, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        styles.container,
      ]}
      onPress={onPress}
    >
      <CloseIcon width={width} height={height} color="#000" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 10,
  },
});

export default CloseButton;
