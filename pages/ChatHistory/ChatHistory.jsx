import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { ChatHistoryCard, HamburgerMenu, Header } from "../../components";
import { LadderIcon } from "../../assets/icons";
const ChatHistory = ({ navigation }) => {
  const getChatHistory = () => {
    return [
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
      {
        timestamp: 1609675200000,
        time: "12:00pm",
        date: {
          month: "Jan",
          day: "03",
          year: "2021",
        },
        language: "French",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nunc eget nunc. Nulla facilisi. Nulla",
      },
      {
        timestamp: 1609761600000,
        time: "12:00pm",
        date: {
          month: "Jan",
          day: "04",
          year: "2021",
        },
        language: "French",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nunc eget nunc. Nulla facilisi. Nulla",
      },
      {
        timestamp: 1609848000000,
        time: "12:00pm",
        date: {
          month: "Jan",
          day: "05",
          year: "2021",
        },
        language: "French",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nunc eget nunc. Nulla facilisi. Nulla",
      },
      {
        timestamp: 1609934400000,
        time: "12:00pm",
        date: {
          month: "Jan",
          day: "06",
          year: "2021",
        },
        language: "French",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nunc eget nunc. Nulla facilisi. Nulla",
      },
      {
        timestamp: 1610020800000,
        time: "12:00pm",
        date: {
          month: "Jan",
          day: "07",
          year: "2021",
        },
        language: "French",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nunc eget nunc. Nulla facilisi. Nulla",
      },
      {
        timestamp: 1610107200000,
        time: "12:00pm",
        date: {
          month: "Jan",
          day: "08",
          year: "2021",
        },
        language: "French",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nunc eget nunc. Nulla facilisi. Nulla",
      },
      {
        timestamp: 1610193600000,
        time: "12:00pm",
        date: {
          month: "Jan",
          day: "09",
          year: "2021",
        },
        language: "French",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nunc eget nunc. Nulla facilisi. Nulla",
      },
      {
        timestamp: 1610280000000,
        time: "12:00pm",
        date: {
          month: "Jan",
          day: "10",
          year: "2021",
        },
        language: "French",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nunc eget nunc. Nulla facilisi. Nulla",
      },
      {
        timestamp: 1610366400000,
        time: "12:00pm",
        date: {
          month: "Jan",
          day: "11",
          year: "2021",
        },
        language: "French",
        description: "Lorem ipsum",
      },
      {
        timestamp: 1610452800000,
        time: "12:00pm",
        date: {
          month: "Jan",
          day: "12",
          year: "2021",
        },
        language: "French",
        description: "Lorem ipsum dolor sit amet,",
      },
    ];
  };

  const data = getChatHistory();

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
        {data.map((chat) => (
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
