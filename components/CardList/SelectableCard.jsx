import React, { useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const SelectableCard = ({ id, text, selected, onPress, children }) => {
  return (
    <Pressable
      id={id}
      onPress={onPress}
      style={selected && styles.selectedCard}
    >
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
    height: 140,
    width: 125,
    borderRadius: 20,
    shadowColor: "#0601B4",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    margin: 5,
  },
  selectedCard: {
    alignItems: "center",
    justifyContent: "center",
    height: 155,
    borderRadius: 20,
    borderOffset: 2,
    borderWidth: 2,
    borderColor: "red",
    borderStyle: "solid",
    borderColor: "#0601B4",
    marginLeft: 10,
    marginRight: 10,
  },
  textStyle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
  },
  icon: {
    // padding: 5,
    justifyContent: "center",
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    height: 50,
    width: 50,
  },
});

export default SelectableCard;
