import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Products from "./products";
const Tab = createBottomTabNavigator();

//Its a stack nav, inside of a tab nav, inside of a drawer nav !!!!
//This is the middle layer, the tab, each tab screen may be a stack
function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={Products} />
    </Tab.Navigator>
  );
}
export default HomeScreen;
