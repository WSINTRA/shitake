import * as React from "react";
import { TouchableHighlight, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../styles/custom";

function CustomButton(props) {
  const navigation = useNavigation();
  const { title, route, color, width } = props;
  return (
    <TouchableHighlight
      underlayColor="#9F5604"
      style={[Button.box, {backgroundColor: color, width: width}]}
      onPress={() => navigation.navigate(route)}
    >
      <Text>{title}</Text>
    </TouchableHighlight>
  );
}
export default CustomButton;
