import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ChatBubble = ({ text, leftBubble = false }) => {
  return (
    <View style={leftBubble ? styles.chatBubbleLeft : styles.chatBubbleRight}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatBubbleLeft: {
    alignSelf: "flex-start",
    borderColor: "#000",
    backgroundColor: "#000",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 15,
    borderWidth: 1,
    margin: 5,
  },
  chatBubbleRight: {
    alignSelf: "flex-end",
    backgroundColor: "#fff",
    borderColor: "#0601B4",
    backgroundColor: "#0601B4",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 2,
    borderWidth: 1,
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "regular",
    textAlign: "left",
    padding: 10,
  },
});

export default ChatBubble;
