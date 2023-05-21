import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from "react-native";
import { ChatBubble, ChatInputField, Header } from "../../components";
import { LadderIcon, BackIcon } from "../../assets/icons";

const MAX_CONVERSATION_LENGTH = 10;

const Chat = ({ route, navigation }) => {
  const { language, topic, proficiency } = route.params;
  const [chatComponents, setChatComponents] = useState([]);
  const [chatCount, setChatCount] = useState(0);
  const scrollViewRef = useRef(null);
  const [chatEnded, setChatEnded] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `You are a friendly and helpful language learning tutor called Lerna. Ask a this user a question in ${language} about ${topic} so that they can practice speaking and writing ${language}. Note that they are a ${proficiency} level speaker. Ask one question at a time and make the quesiton short and concise`,
    },
  ]);
  const endConversationMessage = {
    role: "system",
    content: `End the conversation with the user by saying thanks for chatting and goodblye in ${language}`,
  };

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
  useEffect(() => {
    getMessage(messages).then((messageData) => {
      setMessages([...messages, messageData]);
      const newChat = (
        <ChatBubble
          key={chatCount}
          text={messageData.content}
          leftBubble={true}
        />
      );
      setChatComponents([...chatComponents, newChat]);
      setChatCount(chatCount + 1);
      console.log("chatCount ", chatCount);
      console.log("UseEffect Done");
    });
  }, []);

  // Scrolls to the bottom of the chat when a new message is added
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [chatComponents]);

  const handleSendResponse = (input) => {
    // Add user message to chat
    const newChat = (
      <ChatBubble key={chatCount} text={input} leftBubble={false} />
    );
    const updatedMessages =
      chatComponents.length === MAX_CONVERSATION_LENGTH
        ? [
            ...messages,
            { role: "user", content: input },
            endConversationMessage,
          ]
        : [...messages, { role: "user", content: input }];
    const updatedChatComponents = [...chatComponents, newChat];
    setMessages(updatedMessages);
    setChatComponents(updatedChatComponents);
    setChatCount(chatCount + 1);
    setChatEnded(chatComponents.length >= MAX_CONVERSATION_LENGTH);

    // Add Lerna's response to chat
    getMessage(updatedMessages).then((messageData) => {
      const newChat = (
        <ChatBubble
          key={chatCount + 1}
          text={messageData.content}
          leftBubble={true}
        />
      );
      setMessages([...updatedMessages, messageData]);
      setChatComponents([...updatedChatComponents, newChat]);
      setChatCount(chatCount + 2);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text="Chat with Lerna"
        leftButton={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon height={30} width={30} />
          </TouchableOpacity>
        }
        rightButton={<LadderIcon height={30} width={30} />}
      />
      <KeyboardAvoidingView behavior="padding" style={styles.scrollView}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.contentContainer}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          {chatComponents}
        </ScrollView>
        {chatEnded ? (
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              console.log("finished conversation");
            }}
          >
            <Text style={styles.submitText}>End Conversation</Text>
          </TouchableOpacity>
        ) : (
          <ChatInputField value={""} sendResponse={handleSendResponse} />
        )}
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
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#0601B4",
    width: "100%",
    height: 50,
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  submitText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Chat;
