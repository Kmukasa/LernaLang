import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { MicrophoneIcon, SendIcon } from "../../assets/icons";

const ChatInputField = ({ value, sendResponse, onFocus }) => {
  const [input, setInput] = useState(value);

  const handleOnPress = () => {
    sendResponse(input);
    setInput("");
  };

  return (
    <View style={styles.inputContainer}>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          styles.microphoneButton,
        ]}
        onPress={() => console.log("Pressed Microphone")}
      >
        <MicrophoneIcon height={28} width={28} color={"#000"} />
      </Pressable>
      <TextInput
        style={styles.input}
        onChangeText={(input) => setInput(input)}
        value={input}
        placeholder="Enter response..."
        keyboardType="default"
        multiline={true}
        onFocus={onFocus}
      />
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          styles.sendButton,
        ]}
        onPress={() => handleOnPress()}
      >
        <SendIcon
          height={28}
          width={28}
          color={"#000"} //TODO: change color when pressed
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    minHeight: 10,
    maxHeight: 110,
    backgroundColor: "#fff",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#000",
  },
  input: {
    color: "#000",
    fontSize: 16,
    fontWeight: "regular",
    textAlign: "left",
    padding: 5,
    width: 250,
  },
  sendButton: {
    position: "relative",
    justifyContent: "center",
    width: "10%",
    right: 10,
  },
  microphoneButton: {
    position: "relative",
    justifyContent: "center",
    width: "10%",
    left: 10,
    marginRight: 5,
  },
});

export default ChatInputField;
