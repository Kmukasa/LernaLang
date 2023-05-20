import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Pressable,
  Text,
  ScrollView,
} from "react-native";
import { CardList, Header, RadioButton, HamburgerMenu } from "../../components";
import { LadderIcon } from "../../assets/icons";
import { LANGUAGES, SKILL_LEVELS, TOPICS } from "../../components/constants";

const ChatOptions = ({ navigation }) => {
  const [language, setLanguage] = useState("");
  const [topic, setTopic] = useState("");
  const [proficiency, setProficiency] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (language !== "" && topic !== "" && proficiency !== "") {
      setButtonDisabled(false);
    }
  }, [language, topic, proficiency]);

  const handleSubmit = () => {
    if (language === "" || topic === "" || proficiency === "") {
      console.log("Please select all options");
    } else {
      navigation.navigate("Chat", {
        language: language,
        topic: topic,
        proficiency: proficiency,
      });
    }
  };

  const handleLanguageSelection = (e) => {
    setLanguage(e.text);
  };

  const handleTopicSelection = (e) => {
    setTopic(e.text);
  };

  const handleProficiencySelection = (e) => {
    setProficiency(e.label);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text="Chat Options"
        leftButton={
          <HamburgerMenu onPress={() => navigation.navigate("Menu")} />
        }
        rightButton={<LadderIcon height={30} width={30} />}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.topicsList}>
          <Text style={styles.subHeading}>Select a language</Text>
          <CardList
            items={LANGUAGES}
            scrollDirection="horizontal"
            handleSelected={handleLanguageSelection}
          />
        </View>
        <View style={styles.topicsList}>
          <Text style={styles.subHeading}>Select a topic</Text>
          <CardList
            items={TOPICS}
            scrollDirection="horizontal"
            handleSelected={handleTopicSelection}
          />
        </View>
        <View style={styles.proficiencyList}>
          <Text style={styles.subHeading}>Select your proficiency</Text>
          <RadioButton
            radioOptions={SKILL_LEVELS}
            handleSelection={handleProficiencySelection}
          />
        </View>
      </ScrollView>
      <Pressable
        style={[
          {
            backgroundColor: buttonDisabled ? "#B3B3B3" : "#0601B4",
          },
          styles.submitButton,
        ]}
        onPress={handleSubmit}
        disabled={buttonDisabled}
      >
        <Text style={styles.submitText}>Start Conversation</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
  subHeading: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  scrollView: {
    flex: 1,
    marginTop: 10,
  },
  languageList: {},
  topicsList: {},
  proficiencyList: {
    width: "100%",
    marginBottom: 70,
  },
  submitButton: {
    bottom: 20,
    width: "90%",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  submitText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ChatOptions;
