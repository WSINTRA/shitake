import * as React from "react";
import { View, Text, Button, Dimensions } from "react-native";
import CustomButton from '../custom-components/customButton';

function Splash({ navigation }) {
  return (
    <View>
      <Text>Welcome, login or signup?</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: 'space-around',
          alignContent: 'stretch',
          width:"100%",
        }}
      >
        <CustomButton title="Login" route="Login" color="coral" width="50%"/> 
        <CustomButton title="Signup" route="Signup" color="gold" width="50%"/>
        {/* <Button
          title="Login"
          style={[{borderRadius: 5,}]}
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="Signup"
          onPress={() => navigation.navigate("Signup")}
        /> */}
      </View>
    </View>
  );
}
export default Splash;
