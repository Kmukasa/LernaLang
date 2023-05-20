import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { ChatBubble, ChatInputField, Header } from "../../components";
import { LadderIcon, BackIcon } from "../../assets/icons";

const Chat = ({ route, navigation }) => {
  const { language, topic, proficiency } = route.params;
  const [chatComponents, setChatComponents] = useState([]);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `You are a friendly and helpful language learning tutor called Lerna. Ask a this user a question in ${language} about ${topic} so that they can practice speaking and writing ${language}. Note that they are a ${proficiency} level speaker. Ask one question at a time and make the quesiton short and concise`,
    },
  ]);
  const [chatCount, setChatCount] = useState(0);
  const scrollViewRef = useRef(null);

  // function for sendign a message to the api
  const getMessage = async (messages) => {
    try {
      const message = await fetch("http://localhost:3000/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages,
        }),
      });
      const messageData = await message.json();
      console.log("Message data ", messageData);
      return messageData.data;
    } catch (error) {
      console.log("Error getting message from OpenAI");
      console.log(error);
    }
  };

  // Loads initial question from Lerna
  // useEffect(() => {
  //   getMessage(messages).then((messageData) => {
  //     setMessages([...messages, messageData]);
  //     const newChat = (
  //       <ChatBubble
  //         key={chatCount}
  //         text={messageData.content}
  //         leftBubble={true}
  //       />
  //     );
  //     setChatComponents([...chatComponents, newChat]);
  //     setChatCount(chatCount + 1);
  //     console.log("chatCount ", chatCount);
  //     console.log("UseEffect Done");
  //   });
  // }, []);

  // Scrolls to the bottom of the chat when a new message is added
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [chatComponents]);

  const handleSendResponse = (input) => {
    const newChat = (
      <ChatBubble key={chatCount} text={input} leftBubble={false} />
    );
    const updatedMessages = [...messages, { role: "user", content: input }];
    const updatedChatComponents = [...chatComponents, newChat];
    setMessages(updatedMessages);
    setChatComponents(updatedChatComponents);
    setChatCount(chatCount + 1);

    // getMessage(updatedMessages).then((messageData) => {
    //   const newChat = (
    //     <ChatBubble
    //       key={chatCount + 1}
    //       text={messageData.content}
    //       leftBubble={true}
    //     />
    //   );
    //   setMessages([...updatedMessages, messageData]);
    //   setChatComponents([...updatedChatComponents, newChat]);
    //   setChatCount(chatCount + 2);
    // });
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
      <KeyboardAvoidingView behavior="padding" style={styles.scrollView}>
        <ScrollView
          style={{ flexShrink: 1 }}
          contentContainerStyle={styles.contentContainer}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          {chatComponents}
        </ScrollView>
        <ChatInputField value={""} sendResponse={handleSendResponse} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  contentContainer: {
    flexGrow: 1,
  },
  scrollView: {
    flexDirection: "column",
    flexGrow: 1,
    width: "100%",
    // paddingLeft: 20,
    // paddingRight: 20,
    // marginBottom: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});

export default Chat;
