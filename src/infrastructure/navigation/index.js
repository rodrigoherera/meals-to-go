import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./AppNavigator";
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext";
import { AccountNavigator } from "./AccountNavigator";

export const Navigator = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
