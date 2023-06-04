import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LernaLangLogo } from "../../assets/images";
import { BackIcon, LadderIcon } from "../../assets/icons";

import { signInUser } from "../../firebase/config";
import { AuthContext } from "../../Contexts/AuthContext";

const SignIn = ({ navigation }) => {
  const { setAuthUserId } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onLoginPress = () => {
    // signInUser with firebase functions
    try {
      signInUser(email, password)
        .then((userId) => {
          setAuthUserId(userId);
        })
        .catch((error) => {
          setErrorMessage("Invalid email or password.");
        });
    } catch (error) {
      console.error(error.message);
      setErrorMessage("Invalid email or password.");
    }
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
          text="Sign In"
          leftButton={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackIcon height={30} width={30} />
            </TouchableOpacity>
          }
          rightButton={<LadderIcon height={30} width={30} />}
        />
        <View style={{ margin: 60 }}>
          <LernaLangLogo height={150} width={100} />
        </View>
        <Text style={styles.error}>{errorMessage}</Text>
        <View style={styles.inputsView}>
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
        </View>
        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{" "}
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={styles.footerLink}
            >
              Create an account
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

export default SignIn;
