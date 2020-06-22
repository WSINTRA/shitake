import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./login";
import Signup from "./signup";

const Welcome = (props) => {
  //   const [switchForm, setSwitchFrom] = useState(false);
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login">
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Signup">
          {(props) => <Signup {...props} />}
        </Stack.Screen>
    </Stack.Navigator>
  );
};
export default Welcome;
