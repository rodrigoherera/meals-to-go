import React, { useContext } from "react";
import { Colors } from "react-native-paper";

import { RestaurantInfoCardComponent } from "../components/RestaurantInfoCardComponent";
import {
  RestaurantList,
  LoadingContainer,
  Loading,
} from "./RestaurantViewStyles";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsContext";
import { Search } from "../components/SearchComponent";

export const RestaurantView = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animated={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
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
