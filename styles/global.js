import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const screenHeight = Math.round(Dimensions.get("window").height);
export const WelcomeStyle = StyleSheet.create({
  container: {
    //THIS BORDER IS TEMPORARY
    //helps when plotting out the components
    borderStyle: "solid",
    borderWidth: 3,
    height: screenHeight,
    flex: 1,
    justifyContent: "center",
  },
});
