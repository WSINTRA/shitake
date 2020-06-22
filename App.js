import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/auth-stack/welcome';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  const [count, setCount] = useState(0);
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authenticated ? 
        <Stack.Screen name="Home" component={HomeScreen} /> 
        :
        <Stack.Screen name="auth-stack" component={ Welcome } /> 
        }
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;