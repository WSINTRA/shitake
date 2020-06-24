import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { eggShell, deepChestnut, charCoal } from "./colors";
export const screenHeight = Math.round(Dimensions.get("window").height);
export const WelcomeStyle = StyleSheet.create({
  container: {
    backgroundColor: eggShell,
    height: screenHeight,
    flex: 1,
  },
  loginFormWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    marginTop:100,
  },
  inputWrapper:{
    alignItems: 'center',
    flexDirection: 'row',
    width:'80%',
    fontFamily: "GillSans-SemiBold",
    borderColor: deepChestnut,
    backgroundColor: eggShell,
    padding: 10,
    textAlign: 'center',
    borderBottomWidth: 3,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom:20,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: charCoal,
    shadowOpacity: 0.5,
    opacity:0.5

  },
  input: {
    paddingLeft:20,
    width:"100%",
    fontSize:24
  },
});
