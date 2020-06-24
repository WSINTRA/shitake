import React, { useState } from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import {View, Text, Input, ImageBackground, StyleSheet,
    TextInput,
    KeyboardAvoidingView,  Platform
} from 'react-native';
import { WelcomeStyle, screenHeight } from '../../styles/global';
import bkImg from "../../assets/shrooms.jpg"
import { eggShell, hunterGreen } from "../../styles/colors";
import CustomButton from "../custom-components/customButton";

const Signup = () => {
    return (
    <ImageBackground
      blurRadius={0}
      style={{ height: screenHeight, resizeMode: "center" }}
      source={bkImg}
    >
       <View style={s.overlay} />
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={WelcomeStyle.loginFormWrapper}>
        <View style={[WelcomeStyle.inputWrapper, {opacity:1}]}>
        <Icon name="user" size={22}/>
            <TextInput 
            inlineImageLeft='search_icon'
            style={WelcomeStyle.input} placeholder="Email" />
           </View>
   
           <View style={[WelcomeStyle.inputWrapper, {opacity:1}]}  >
            <Icon name="lock" size={22}/>
            <TextInput style={WelcomeStyle.input} placeholder="Password" />
            </View>
            <View style={[WelcomeStyle.inputWrapper, {opacity:1}]}>
            <Icon name="lock" size={22}/>
            <TextInput style={WelcomeStyle.input} placeholder="Confirm Password" />
            </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
    )
}

const s = StyleSheet.create({
    overlay: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: eggShell,
      opacity: 0.45,
    },
  });
export default Signup;