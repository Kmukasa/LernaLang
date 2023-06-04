import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { TrashIcon } from "../../assets/icons";

const MAX_CHARS_DESCRIPTION = 25;

const ChatHistoryCard = ({
  date,
  language,
  description,
  openChat,
  deleteChat,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          {date.month} | {date.day}
        </Text>
        <Text style={styles.dateText}>{date.year}</Text>
      </View>
      <View style={styles.textRow}>
        <Pressable
          style={(pressed) => [
            {
              opacity: pressed ? 1 : 0.5,
            },
          ]}
          onPress={openChat}
        >
          <Text style={styles.language}>{language}</Text>
        </Pressable>
        <Text style={styles.description}>
          {description.substring(0, MAX_CHARS_DESCRIPTION)}...
        </Text>
      </View>
      <Pressable style={styles.deleteChat} onPress={deleteChat}>
        <TrashIcon height={28} width={28} color="#000" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    minHeight: 10,
    backgroundColor: "#fff",
    borderTopColor: "#000",
    borderTopWidth: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  textRow: {
    flexDirection: "column",
    flexWrap: "wrap",
    textAlign: "left",
    width: "65%",
  },
  language: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "#0601B4",
    textAlign: "left",
  },
  description: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#000",
    textAlign: "left",
  },
  deleteChat: {
    width: "10%",
    paddingRight: 15,
  },
  dateContainer: {
    width: "25%",
    flexDirection: "column",
    paddingRight: 5,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "thin",
    color: "#000",
    textAlign: "left",
  },
});

export default ChatHistoryCard;
