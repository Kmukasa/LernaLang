import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const SelectableCard = ({ text, selected, onPress, children }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.cardContainer}>
        <Text style={styles.textStyle}>{text}</Text>
        <View style={styles.icon}>{children}</View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0601B4",
    padding: 10,
    height: 135,
    width: 125,
    borderRadius: 20,
    shadowColor: "#0601B4",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  pressedCard: {
    outlineColor: "#0601B4",
    outlineStyle: "solid",
    outlineWidth: 2,
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    padding: 3,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    height: 50,
    width: 50,
  },
});

export default SelectableCard;
