import React, { useContext } from "react";
import { Colors, Searchbar } from "react-native-paper";

import { RestaurantInfoCardComponent } from "../components/RestaurantInfoCardComponent";
import {
  SearchContainer,
  RestaurantList,
  LoadingContainer,
  Loading,
} from "./RestaurantViewStyles";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsContext";

export const RestaurantView = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animated={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCardComponent restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
