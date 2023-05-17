import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { collection, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase/config";
import { onAuthStateChanged } from "@firebase/auth";
import {
  ChatOptions,
  Landing,
  Chat,
  Menu,
  ChatHistory,
  SignIn,
  SignUp,
} from "./pages";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const usersRef = collection(db, "users");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getDoc(usersRef)
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Chat Options" component={ChatOptions} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Chat History" component={ChatHistory} />
          </>
        ) : (
          <>
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Chat Options" component={ChatOptions} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Chat History" component={ChatHistory} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});

// export { default } from "./.storybook";
