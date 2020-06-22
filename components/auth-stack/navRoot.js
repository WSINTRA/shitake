import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./login";
import Signup from "./signup";
import Splash from './splash';

const NavRoot = (props) => {
  //   const [switchForm, setSwitchFrom] = useState(false);
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" options={{
          title: 'codename:Shitake',
          headerStyle: {
            backgroundColor: '#ff7247',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          {(props) => <Splash {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login">
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Signup">
          {(props) => <Signup {...props} />}
        </Stack.Screen>
    </Stack.Navigator>
  );
};
export default NavRoot;
