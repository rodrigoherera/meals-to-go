import React from "react";
import { SvgXml } from "react-native-svg";

import { Text } from "../../../components/typography/TextComponent";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  Address,
  Info,
  Rating,
  Section,
  RestaurantCard,
  RestaurantCardCover,
} from "./RestaurantInfoCardStyles";

export const RestaurantInfoCardComponent = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2022/07/pizza-with-pineapple-and-thin-crust.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant={"label"}>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml xml={star} width={20} height={20} key={i} />
            ))}
          </Rating>
          {isOpenNow && !isClosedTemporarily && (
            <SvgXml xml={open} width={20} height={20} />
          )}
          {isClosedTemporarily && (
            <Text variant={"error"}>CLOSED TEMPORARILY</Text>
          )}
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
