import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from './homeScreen';

const Drawer = createDrawerNavigator();
//Its a stack nav, inside of a tab nav, inside of a drawer nav !!!!
//This is the outer layer, the drawer
function LandingRoot() {
  return (
    
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* This where we put drawer nav components */}
      </Drawer.Navigator>
   
  );
}
export default LandingRoot;
