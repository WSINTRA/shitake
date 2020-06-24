import * as React from "react";
import { View, ImageBackground, Dimensions} from "react-native";
import CustomButton from '../custom-components/customButton';
import splash from '../../assets/splash.png';
import {hunterGreen, mayGreen} from '../../styles/colors';
import {WelcomeStyle, screenHeight } from '../../styles/global'

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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <CustomButton title="Login" route="Login" color={hunterGreen} width="40%" /> 
        <CustomButton title="Signup" route="Signup" color={mayGreen}width="40%" />
        </View>

      </View>
      </ImageBackground>
    </View>
  );
}
export default Splash;
