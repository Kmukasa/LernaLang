import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "@firebase/auth";
import { AuthContext } from "./Contexts/AuthContext";
import {
  ChatOptions,
  Landing,
  Chat,
  Menu,
  ChatHistory,
  SignIn,
  SignUp,
} from "./pages";

// export const AuthContext = React.createContext();

export default function App() {
  const Stack = createNativeStackNavigator();
  const [authUserId, setAuthUserId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUserId(user?.uid);
        setIsLoggedIn(!!user);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    authUserId,
    setAuthUserId,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {authUserId ? (
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
    </AuthContext.Provider>
  );
}

// export { default } from "./.storybook";
