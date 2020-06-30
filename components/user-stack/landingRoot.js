import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from './homeScreen';

const Drawer = createDrawerNavigator();

function LandingRoot() {
  return (
    
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* This where we put drawer nav components */}
      </Drawer.Navigator>
   
  );
}
export default LandingRoot;
// its a stack nav, inside of a tab nav, inside of a drawer nav !!!!