import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Header, MenuButton, CloseButton } from "../../components";
import { LadderIcon } from "../../assets/icons";

const Menu = ({ navigation, chatStarted = false }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        text="Menu"
        leftButton={
          <CloseButton
            height={40}
            width={40}
            onPress={() => navigation.goBack()}
          />
        }
        rightButton={<LadderIcon height={34} width={34} />}
      />
      <View style={styles.menuContainer}>
        <MenuButton
          text="Chat"
          onPress={() =>
            navigation.navigate(chatStarted ? "Chat" : "ChatOptions")
          }
        />
        <MenuButton
          text="Chat History"
          onPress={() => navigation.navigate("Chat History")}
        />
        <MenuButton text="Profile" onPress={() => console.log("Profile")} />
        <MenuButton text="Sign Out" onPress={() => console.log("Sign Out")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
  menuContainer: {
    justifyContent: "center",
    height: "80%",
  },
});

export default Menu;
