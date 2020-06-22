import * as React from "react";
import {View, Text, Button} from 'react-native';
function Splash({navigation}) {
return (
    <View>
        <Text>Welcome, login or signup?</Text>
        <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Signup"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
)
}
export default Splash;
