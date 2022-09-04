import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { LoginView } from "../../features/account/views/LoginView";
import { RegisterView } from "../../features/account/views/RegisterView";
import { AccountView } from "../../features/account/views/AccountView";

const Stack = createStackNavigator();

const createScreenOptions = ({ route }) => {
  return {
    headerShown: false,
  };
};

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={createScreenOptions}>
    <Stack.Screen name="Main" component={AccountView} />
    <Stack.Screen name="Login" component={LoginView} />
    <Stack.Screen name="Register" component={RegisterView} />
  </Stack.Navigator>
);
