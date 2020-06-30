import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./login";
import Signup from "./signup";
import Splash from "./splash";
import { deepChestnut } from "../../styles/colors";
const NavRoot = (props) => {
  //   const [switchForm, setSwitchFrom] = useState(false);
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={
        { 
          headerTransparent: true, 
          headerTintColor: deepChestnut 
          }
        }>
        <Stack.Screen 
          name="Splash" 
          options={
            { 
              headerShown: false
            }
          }>
          {(props) => <Splash {...props} />}
        </Stack.Screen>

        <Stack.Screen
          name="Login" 
          options={
            { 
              headerBackTitle: "Welcome" 
              }
          }>
          {(props) => <Login {...props} />}
        </Stack.Screen>

        <Stack.Screen 
          name="Signup">
          {(props) => <Signup {...props} />}
        </Stack.Screen>
    </Stack.Navigator>
  );
};
export default NavRoot;
