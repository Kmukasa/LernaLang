import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

import { BottomBarNavigator, AuthNavigator } from "./navigators";

export default function App() {
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
        {authUserId ? (
          <BottomBarNavigator chatStarted={false} />
        ) : (
          <AuthNavigator />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// export { default } from "./.storybook";
