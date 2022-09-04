import React, { useContext } from "react";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/TextComponent";

import { FavouritesContext } from "../../../services/favourites/FavouritesContext";

import { RestaurantInfoCardComponent } from "../../restaurants/components/RestaurantInfoCardComponent";
import { RestaurantList } from "../../restaurants/views/RestaurantViewStyles";

const Caption = styled(Text)`
  align-self: center;
  font-size: 20px;
`;

export const FavouritesView = () => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <Caption variant="caption">You don't have favourites yet!</Caption>
  ) : (
    <RestaurantList
      data={favourites}
      renderItem={({ item }) => {
        return <RestaurantInfoCardComponent restaurant={item} />;
      }}
      keyExtractor={(item) => item.name}
    />
  );
};
