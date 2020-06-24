import * as React from "react";
import { TouchableHighlight, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../styles/custom";
import {androidGreen } from '../../styles/colors';
function CustomButton(props) {
  const navigation = useNavigation();
  const { title, route, color, width } = props;
  return (
    <TouchableHighlight
      underlayColor={androidGreen}
      style={[Button.box, {backgroundColor: color, width: width}]}
      onPress={() => navigation.navigate(route)}
    >
      <Text style={Button.label}>{title}</Text>
    </TouchableHighlight>
  );
}
export default CustomButton;
