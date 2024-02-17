import React from "react";
import { StyleSheet, SafeAreaView, View, Text, TextInput } from "react-native";
import { LernaLangLogo2 } from "../../assets/images";
import { SignInButton } from "../../components";
import { EmailIcon, AccountIcon } from "../../assets/icons";

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleStyles}>Get Started</Text>
      <View style={styles.logoStyles}>
        <LernaLangLogo2 height={150} width={100} />
        <Text style={styles.slogan}>
          Enhance your language learning journey with Lerna
        </Text>
      </View>
      <View style={styles.signInButtonStyles}>
        <SignInButton
          text="Login with Email"
          onPress={() => navigation.navigate("SignIn")}
        >
          <EmailIcon height={20} width={20} />
        </SignInButton>
        <SignInButton
          text="Create Account"
          onPress={() => navigation.navigate("SignUp")}
        >
          <AccountIcon height={20} width={20} />
        </SignInButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  titleStyles: {
    marginBottom: 30,
    marginTop: 30,
    fontSize: 35,
    fontWeight: "bold",
    color: "#000",
  },
  logoStyles: {
    flexDirection: "column",
    marginTop: 40,
    marginBottom: 40,
    alignItems: "center",
  },
  signInButtonStyles: {
    bottom: 0,
  },
  slogan: {
    marginTop: 30,
    padding: 40,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "thin",
    color: "grey",
  },
});

export default Landing;
