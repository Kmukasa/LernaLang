import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LernaLangLogo2 } from "../../assets/images";
import { Header } from "../../components";
import { BackIcon, LadderIcon } from "../../assets/icons";

import { signUpUser } from "../../firebase/config";

// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { collection, addDoc } from "firebase/firestore";
// import { db, auth } from "../../firebase/config";

const SignUp = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match.");
      return;
    }
    signUpUser(email, password, fullName)
      .then((user) => {
        navigation.navigate("Chat Options", { userId: user.uid });
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{
          flex: 1,
          width: "100%",
        }}
        contentContainerStyle={{ alignItems: "center", top: 50 }}
        keyboardShouldPersistTaps="always"
      >
        <Header
          text="Create an account"
          leftButton={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackIcon height={30} width={30} />
            </TouchableOpacity>
          }
          rightButton={<LadderIcon height={30} width={30} />}
        />
        <View style={{ margin: 60 }}>
          <LernaLangLogo2 height={150} width={100} />
        </View>
        <Text style={styles.error}>{errorMessage}</Text>
        <View style={styles.inputsView}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="Confirm Password"
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onRegisterPress()}
        >
          <Text style={styles.buttonTitle}>Create account</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already got an account?{" "}
            <Text
              onPress={() => navigation.navigate("SignIn")}
              style={styles.footerLink}
            >
              Log in
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  inputsView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    color: "#000",
  },
  error: {
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "left",
    width: "80%",
  },
  button: {
    backgroundColor: "#0601B4",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    padding: 15,
    // height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
  },
  footerLink: {
    color: "#0601B4",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SignUp;
