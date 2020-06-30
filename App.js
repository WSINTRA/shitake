import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavRoot from "./components/auth-stack/navRoot";
import LandingRoot from "./components/user-stack/landingRoot";

function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <NavigationContainer>
      {authenticated ? <LandingRoot /> : <NavRoot />}
    </NavigationContainer>
  );
}

export default App;
