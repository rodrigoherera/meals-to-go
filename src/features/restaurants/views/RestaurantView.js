import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCardComponent } from "../components/RestaurantInfoCardComponent";
import { SearchContainer, RestaurantList } from "./RestaurantViewStyles";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";

export const RestaurantView = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
      ]}
      renderItem={() => <RestaurantInfoCardComponent />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
