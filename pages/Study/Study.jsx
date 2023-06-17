import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Header } from "../../components";
import { LadderIcon } from "../../assets/icons";

const Study = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        text="Study"
        leftButton={<LadderIcon height={30} width={30} />}
        rightButton={null}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
});

export default Study;
