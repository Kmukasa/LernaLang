import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

const Header = ({ text, leftButton, rightButton }) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.headerLeft}>{leftButton}</View>
      <Text style={styles.headerText}>{text}</Text>
      <View style={styles.headerRight}>{rightButton}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    top: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    alignSelf: "center",
    flex: 1,
  },
  headerLeft: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  headerRight: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
});

export default Header;
