import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ChatBubble = ({ text, leftBubble }) => {
  return (
    <View style={leftBubble ? styles.chatBubbleLeft : styles.chatBubbleRight}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatBubbleLeft: {
    borderColor: "#000",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 15,
    borderWidth: 1,
    margin: 15,
  },
  chatBubbleRight: {
    backgroundColor: "#fff",
    borderColor: "#0601B4",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    margin: 15,
  },
  text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "regular",
    textAlign: "left",
    padding: 10,
  },
});

export default ChatBubble;
