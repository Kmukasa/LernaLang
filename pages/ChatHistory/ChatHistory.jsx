import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { ChatHistoryCard, HamburgerMenu, Header } from "../../components";
import { LadderIcon } from "../../assets/icons";
import { getConversations } from "../../firebase/config";
import { AuthContext } from "../../Contexts/AuthContext";

const ChatHistory = ({ navigation }) => {
  const { authUserId } = useContext(AuthContext);
  const [conversations, setConversations] = useState([]);

  // get all the conversations for the user on screen load
  useEffect(() => {
    getConversations(authUserId).then((conversations) => {
      const modifiedConversations = conversations.map((conversation) => {
        return {
          timestamp: conversation?.timestamp,
          time: conversation?.timestamp,
          date: {
            month: conversation?.timestamp
              ?.toDate()
              ?.toLocaleString("default", { month: "short" }),
            day: conversation?.timestamp
              ?.toDate()
              ?.toLocaleString("default", { day: "2-digit" }),
            year: conversation?.timestamp
              ?.toDate()
              ?.toLocaleString("default", { year: "numeric" }),
          },
          onPress: () => {
            console.log("conversation pressed with id: ", conversation.id);
          },
          language: conversation?.language,
          description: conversation?.messages[1]?.content,
        };
      });
      setConversations(modifiedConversations);
    });
  }, []);

  const conversationData = [
    {
      timestamp: 1609502400000,
      time: "12:00pm",
      date: {
        month: "Jan",
        day: "01",
        year: "2021",
      },
      language: "French",
      description: "Lorem ipsum",
    },
    {
      timestamp: 1609588800000,
      time: "12:00pm",
      date: {
        month: "Jan",
        day: "02",
        year: "2021",
      },
      language: "French",
      description: "Lorem ipsum dolor sit amet,",
    },
  ];

  console.log("conversations: ", conversations);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text="Chat History"
        leftButton={
          <HamburgerMenu onPress={() => navigation.navigate("Menu")} />
        }
        rightButton={<LadderIcon height={30} width={30} />}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scollViewcontent}
      >
        {conversations.map((chat) => (
          <ChatHistoryCard
            key={chat.timestamp}
            date={chat.date}
            language={chat.language}
            description={chat.description}
            openChat={() => console.log("Open chat")}
            deleteChat={() => console.log("Delete chat")}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  scrollView: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flex: 1,
    top: 20,
    marginBottom: 40,
  },
  scollViewcontent: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatHistory;
