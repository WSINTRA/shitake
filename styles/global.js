import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {eggShell } from './colors';
const screenHeight = Math.round(Dimensions.get("window").height);
export const WelcomeStyle = StyleSheet.create({
  container: {
    //THIS BORDER IS TEMPORARY
    //helps when plotting out the components
    backgroundColor: eggShell,
    height: screenHeight,
    flex: 1,
    justifyContent: 'space-between',
  },
});
