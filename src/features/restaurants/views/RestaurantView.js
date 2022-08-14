import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCardComponent } from "../components/RestaurantInfoCardComponent";
import {
  SafeArea,
  SearchContainer,
  RestaurantListContainer,
} from "./RestaurantViewStyles";

export const RestaurantView = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCardComponent />
    </RestaurantListContainer>
  </SafeArea>
);
