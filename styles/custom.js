import { StyleSheet } from "react-native";
import {androidGreen} from './colors';
export const Button = StyleSheet.create({
  box: {
    alignItems: "center",
    height: 55,
    justifyContent: "center",
    borderRadius: 3,
    margin:10,
  },
  label: {
      fontSize:22,
      color: androidGreen
  },
});
