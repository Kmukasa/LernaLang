import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function TriangleDown() {
  return (
    <View style={styles.container}>
      <Svg width={20} height={20} viewBox="0 0 20 20">
        <Path d="M16.993 6.667H3.227l6.883 6.883 6.883-6.883z" fill="#000" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
