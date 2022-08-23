import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";

import { SpacerComponent } from "../spacer/SpacerComponent";
import { CompactRestaurantInfoComponent } from "../restaurant/CompactRestaurantInfoComponent";
import { Text } from "../typography/TextComponent";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <SpacerComponent variant="left.large">
        <Text variant="caption">Favourites</Text>
      </SpacerComponent>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <SpacerComponent key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", restaurant)}
              >
                <CompactRestaurantInfoComponent restaurant={restaurant} />
              </TouchableOpacity>
            </SpacerComponent>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
