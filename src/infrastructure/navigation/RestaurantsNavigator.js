import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantView } from "../../features/restaurants/views/RestaurantView";
import { RestaurantDeatilView } from "../../features/restaurants/views/RestaurantDetailView";

const RestaurantStack = createStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
    ...TransitionPresets.ModalPresentationIOS,
  };
};

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={createScreenOptions}>
      <RestaurantStack.Screen
        name="RestaurantView"
        component={RestaurantView}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDeatilView}
      />
    </RestaurantStack.Navigator>
  );
};
