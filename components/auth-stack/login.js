import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { WelcomeStyle, screenHeight } from "../../styles/global";
import splash from "../../assets/splash.png";
import CustomButton from "../custom-components/customButton";
import { eggShell, hunterGreen } from "../../styles/colors";
const Login = () => {
  return (
    <ImageBackground
      style={{ height: screenHeight, resizeMode: "center" }}
      source={splash}
    >
      <View style={s.overlay} />
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={WelcomeStyle.loginFormWrapper}>
        <View style={WelcomeStyle.inputWrapper}>
        <Icon name="user" size={22}/>
            <TextInput 
            inlineImageLeft='search_icon'
            style={WelcomeStyle.input} placeholder="Email" />
           </View>
   
           <View style={WelcomeStyle.inputWrapper}>
            <Icon name="lock" size={22}/>
            <TextInput style={WelcomeStyle.input} placeholder="Password" />
            </View>
         

          <Text>Forgot your password?</Text>
          <CustomButton
            title="Login"
            route="Login"
            color={hunterGreen}
            width="40%"
          />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
const s = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: eggShell,
    opacity: 0.9,
  },
});
export default Login;
