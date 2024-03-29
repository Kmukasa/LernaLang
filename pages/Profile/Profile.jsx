import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Header } from "../../components";
import { LadderIcon } from "../../assets/icons";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        text="Profile"
        leftButton={<LadderIcon height={30} width={30} />}
        rightButton={null}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
});
