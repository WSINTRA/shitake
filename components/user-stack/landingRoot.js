import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function LandingRoot() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* This where we put drawer nav components */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
// its a stack nav, inside of a tab nav, inside of a drawer nav !!!!