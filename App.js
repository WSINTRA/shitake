import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { WelcomeStyle } from "./styles/global";
import NavRoot from './components/auth-stack/navRoot';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <NavigationContainer>
        {authenticated ? 
        <HomeScreen/> 
        : 
        <View style={WelcomeStyle.container}>
        <NavRoot/> 
        </View>
        }
    </NavigationContainer>
  );
}

export default App;