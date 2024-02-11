import React, { useState, useEffect, useRef, useContext } from "react";
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
import { OPENAI_MODEL, OPENAI_CHAT_REQUEST_URL, OPENAI_API_KEY } from "@env";
import { storeConversation } from "../../firebase/config";
import { AuthContext } from "../../contexts/AuthContext";
import { ChatContext } from "../../contexts/ChatContext";

const MAX_CONVERSATION_LENGTH = 2;
const MAX_RETRIES = 3;

const Chat = ({ route, navigation }) => {
  const { language, topic, proficiency } = route.params;
  const [chatComponents, setChatComponents] = useState([]);
  const [chatCount, setChatCount] = useState(0);
  const scrollViewRef = useRef(null);
  const [chatEnded, setChatEnded] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `You are a friendly and helpful language learning tutor called Lerna. Ask this user a question in ${language} about ${topic} so that they can practice speaking and writing ${language}. Note that they are a ${proficiency} level speaker. In your conversation with them ask one question at a time, wait for their responses and reply thoughtfully with short and concise quesitons.`,
    },
  ]);
  const endConversationMessage = {
    role: "system",
    content: `End the conversation with the user by saying thanks for chatting and goodbye in ${language}`,
  };

  const { authUserId } = useContext(AuthContext);
  const { setChatStarted } = useContext(ChatContext);
  // const translation = "This is a translation";

  const getTranslation = async (text, language) => {
    // if language if English, return the text
    if (language === "English") {
      return text;
    }

    let response = null;
    let translation = "";
    let messageData = [
      {
        role: "system",
        content: "You are a helpful translator called Lerna",
      },
      {
        role: "user",
        content: "Translate " + text + " from " + language + "to English",
      },
    ];

    try {
      response = await fetch(OPENAI_CHAT_REQUEST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: OPENAI_MODEL,
          messages: messageData,
          max_tokens: 150,
        }),
      });

      // After retrying if response is server_error, throw error
      if (!response.ok) {
        const error = await response.json();
        console.error("OpenAI API Error:", error);
        throw new Error("OpenAI API Error");
      }

      // If response is ok, return translation data
      let translationData = await response.json();
      translation = translationData?.choices?.[0]?.message?.content;
    } catch (error) {
      console.log("Error getting translation");
      console.log(error);
    }

    return translation;
  };

  // function for sending a message to the api
  const getMessage = async (messages) => {
    let response = null;
    let messageData = null;
    // TODO: Add retry logic
    try {
      response = await fetch(OPENAI_CHAT_REQUEST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: OPENAI_MODEL,
          messages: messages,
          max_tokens: 150,
        }),
      });
      // After retrying if response is server_error, throw error
      if (!response.ok) {
        const error = await response.json();
        console.error("OpenAI API Error:", error);
        throw new Error("OpenAI API Error");
      }

      // If response is ok, return message data
      messageData = await response.json();
      console.log("Message data ", messageData);
      return {
        role: "assistant",
        content: messageData?.choices?.[0]?.message?.content,
      };
    } catch (error) {
      console.log("Error getting message from OpenAI");
      console.log(error);
    }
  };

  // Loads initial question from Lerna
  useEffect(() => {
    getMessage(messages).then((messageData) => {
      setMessages([...messages, messageData]);
      getTranslation(messageData.content, language).then((translation) => {
        const newChat = (
          <ChatBubble
            key={chatCount}
            text={messageData.content}
            translation={translation}
            leftBubble={true}
          />
        );
        setChatComponents([...chatComponents, newChat]);
        setChatCount(chatCount + 1);
        console.log("chatCount ", chatCount);
        console.log("UseEffect Done");
      });
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
    getTranslation(input, language).then((translation) => {
      const newChat = (
        <ChatBubble
          key={chatCount}
          text={input}
          leftBubble={false}
          translation={translation}
        />
      );
      const updatedMessages =
        chatComponents.length >= MAX_CONVERSATION_LENGTH
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
        getTranslation(messageData.content, language).then((translation) => {
          const newChat = (
            <ChatBubble
              key={chatCount + 1}
              text={messageData.content}
              leftBubble={true}
              translation={translation}
            />
          );
          setMessages([...updatedMessages, messageData]);
          setChatComponents([...updatedChatComponents, newChat]);
          setChatCount(chatCount + 2);
        });
      });
    });
  };

  const submitResponse = () => {
    // store chat in firebase db
    storeConversation(messages, authUserId, language, topic, proficiency)
      .then(() => {
        navigation.navigate("Chat Options");
      })
      .catch((error) => {
        console.log("Error storing conversation in firebase. Try again.");
        console.log(error);
      });
    setChatStarted(false);
    // navigation.navigate("Chat Options");
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
      <Text style={styles.instruction}>
        Hold chat bubble to get translation
      </Text>
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
            onPress={submitResponse}
          >
            <Text style={styles.submitText}>End Conversation</Text>
          </TouchableOpacity>
        ) : (
          <ChatInputField
            value={""}
            sendResponse={handleSendResponse}
            language={language}
          />
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
  instruction: {
    fontSize: 16,
    color: "#000",
    opacity: 0.5,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Chat;
