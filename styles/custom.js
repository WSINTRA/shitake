import { StyleSheet } from "react-native";
import {androidGreen, charCoal} from './colors';
export const Button = StyleSheet.create({
  box: {
    alignItems: "center",
    height: 55,
    justifyContent: "center",
    borderRadius: 20,
    margin:10,
    shadowColor: charCoal,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  label: {
      fontSize:22,
      color: androidGreen,
      fontFamily: "GillSans-SemiBold",
      //http://iosfonts.com/
      fontWeight: "800",
      textTransform: 'uppercase'
  },
});
