import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Products from './products'
const Tab = createBottomTabNavigator();

function homeScreen() {
  return (
  <Tab.Navigator>
      <Tab.Screen name="Products" component={Products}/>
  </Tab.Navigator>
  );
}
export default homeScreen;
