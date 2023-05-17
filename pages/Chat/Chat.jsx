import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Pressable } from "react-native";
import { ChatBubble, ChatInputField, Header } from "../../components";
import { LadderIcon, BackIcon } from "../../assets/icons";

const Chat = ({ navigation }) => {
  const [chatComponents, setChatComponents] = useState([]);
  const [chatCount, setChatCount] = useState(0);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [chatComponents]);

  const handleSendResponse = (input) => {
    console.log("Sending response");
    console.log("input ", input);
    const newChat = (
      <ChatBubble key={chatCount} text={input} leftBubble={true} />
    );
    setChatComponents([...chatComponents, newChat]);
    setChatCount(chatCount + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text="Chat with Lerna"
        leftButton={
          <Pressable onPress={() => navigation.goBack()}>
            <BackIcon height={30} width={30} />
          </Pressable>
        }
        rightButton={<LadderIcon height={30} width={30} />}
      />
      <ScrollView
        style={styles.scrollView}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        {chatComponents}
      </ScrollView>
      <ChatInputField value={""} sendResponse={handleSendResponse} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  scrollView: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    top: 40,
    width: "100%",
    padding: 20,
  },
});

export default Chat;
