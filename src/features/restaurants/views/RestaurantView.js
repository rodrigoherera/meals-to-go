import React, { useContext, useState } from "react";
import { Colors } from "react-native-paper";
import { TouchableOpacity } from "react-native";

import { RestaurantInfoCardComponent } from "../components/RestaurantInfoCardComponent";
import {
  RestaurantList,
  LoadingContainer,
  Loading,
} from "./RestaurantViewStyles";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsContext";
import { FavouritesContext } from "../../../services/favourites/FavouritesContext";

import { Search } from "../components/SearchComponent";
import { FavouritesBar } from "../../../components/favourites/FavouritesBarComponent";

export const RestaurantView = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animated={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        onFavouritesToggle={() => setIsToggled(!isToggled)}
        isFavouritesToggled={isToggled}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <RestaurantInfoCardComponent restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
