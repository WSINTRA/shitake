import * as React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//TODO: Rename this component
function Main() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text onPress={() => navigation.openDrawer()}>Home Screen</Text>
    </View>
  );
}

//Created a nested stack so when a user adds a product, we can remain in the products tab
function Products() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen options={{}} name="Products">
        {(props) => <Main {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
export default Products;
