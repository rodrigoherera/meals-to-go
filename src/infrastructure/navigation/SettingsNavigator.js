import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";
import { SettingsView } from "../../features/settings/views/SettingsView";
import { FavouritesView } from "../../features/settings/views/FavouritesView";

const SettingsStack = createStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
    ...TransitionPresets.ModalPresentationIOS,
    CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
  };
};

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator screenOptions={createScreenOptions}>
      <SettingsStack.Screen name="SettingsView" component={SettingsView} />
      <SettingsStack.Screen name="FavouritesView" component={FavouritesView} />
    </SettingsStack.Navigator>
  );
};
