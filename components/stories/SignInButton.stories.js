import React from "react";
import { View } from "react-native";
import { SignInButton } from "../";
import GoogleLogo from "../../assets/images/GoogleLogo";
import Phone from "../../assets/images/Phone";

const SignInButtonMeta = {
  title: "SignInButton",
  component: SignInButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Sign in with Google",
    children: <GoogleLogo width={30} height={31} fill={"#000"} />,
  },
  decorators: [
    (Story) => (
      <View
        style={{
          //   alignItems: "center",
          backgroundColor: "grey",
          justifyContent: "center",
          flex: 1,
          height: 100,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default SignInButtonMeta;

export const Basic = {};

export const PhoneExample = {
  args: {
    text: "Sign in with Phone",
    children: <Phone width={30} height={31} fill={"#000"} />,
  },
};
