import React, { useState } from "react";
import { View, Text, Input } from "react-native";
import { WelcomeStyle } from "../../styles/global";
import Login from "./login";
import Signup from "./signup";

const Welcome = () => {
  const [switchForm, setSwitchFrom] = useState(false);
  return (
    <View style={WelcomeStyle.container}>
      <Text> Welcom Screen </Text>
      {switchForm 
      ? 
      <Signup /> 
      : 
      <Login />
      }
    </View>
  );
};
export default Welcome;
