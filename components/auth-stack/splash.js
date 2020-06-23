import * as React from "react";
import { View, ImageBackground, Image, Dimensions} from "react-native";
import CustomButton from '../custom-components/customButton';
import splash from '../../assets/splash.png';
import {hunterGreen, mayGreen} from '../../styles/colors';
import {WelcomeStyle } from '../../styles/global'
const screenHeight = Math.round(Dimensions.get("window").height);
function Splash() {
  return (
    
    <View style={WelcomeStyle.container}>
     <ImageBackground style={{ height: screenHeight, resizeMode: "center",}} source={splash}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <View style={{flexDirection: 'row'}}>
        <CustomButton title="Login" route="Login" color={hunterGreen} width="45%" /> 
        <CustomButton title="Signup" route="Signup" color={mayGreen}width="45%" />
        </View>
      
      </View>
      </ImageBackground>
    </View>
   
  );
}
export default Splash;
