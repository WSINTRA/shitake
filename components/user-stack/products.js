import * as React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


function products() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text onPress={() => navigation.openDrawer()}>Home Screen</Text>
    </View>
  );
}
export default products;
