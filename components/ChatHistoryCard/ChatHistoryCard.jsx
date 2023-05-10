import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { TrashIcon } from "../../assets/icons";

const ChatHistoryCard = ({
  date,
  textTitle,
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
      <View styles={styles.rowText}>
        <Pressable
          style={(pressed) => [
            {
              opacity: pressed ? 1 : 0.5,
            },
          ]}
          onPress={openChat}
        >
          <Text style={styles.textTitle}>{textTitle}</Text>
        </Pressable>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Pressable style={styles.deleteChat} onPress={deleteChat}>
        <TrashIcon height={28} width={28} color="#000" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    minHeight: 10,
    backgroundColor: "#fff",
    borderTopColor: "#000",
    borderTopWidth: 1,
  },
  rowText: {
    flexDirection: "column",
    paddingLeft: 15,
    paddingRight: 15,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "#0601B4",
  },
  description: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#000",
  },
  deleteChat: {
    paddingLeft: 15,
  },
  dateContainer: {
    flexDirection: "column",
    paddingRight: 15,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "thin",
    color: "#000",
    textAlign: "left",
  },
});

export default ChatHistoryCard;
