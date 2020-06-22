import * as React from "react";
import { View, Text, Image, } from "react-native";
import CustomButton from '../custom-components/customButton';
import splash from '../../assets/splash.png';
import {hunterGreen, mayGreen} from '../../styles/colors';
function Splash() {
  return (
    <View>
      <Image style={
          {
              height:500, 
              width: 400,
              marginTop: 10,
              resizeMode: 'stretch',
              alignSelf:'center'}} source={splash}/>
      <View
        style={{
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: 'space-around',
          alignContent: 'stretch',
          width:"100%",
        }}
      >
        <CustomButton title="Login" route="Login" color={hunterGreen} width="45%"/> 
        <CustomButton title="Signup" route="Signup" color={mayGreen}width="45%"/>
      
      </View>
    </View>
  );
}
export default Splash;
