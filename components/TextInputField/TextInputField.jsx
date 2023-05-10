import React, { useState } from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import SendIcon from "../../assets/icons/SendIcon";

const TextInputField = ({ value, sendResponse }) => {
  const [input, setInput] = useState(value || "");

  const handleChangeText = (text) => {
    setInput(text);
  };

  const handlePressSend = () => {
    sendResponse(input);
    setInput("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        value={input}
        placeholder="Enter response..."
        keyboardType="default"
        multiline={true}
      />
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          styles.sendButton,
        ]}
        onPress={handlePressSend}
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
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    minHeight: 10,
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
    width: "90%",
  },
  sendButton: {
    position: "relative",
    justifyContent: "center",
    width: "10%",
    right: 10,
  },
});

export default TextInputField;
