import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

import { RestaurantInfoCardComponent } from "../components/RestaurantInfoCardComponent";

export const RestaurantDeatilView = ({ route, navigation }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { restaurant } = route.params;

  return (
    <>
      <RestaurantInfoCardComponent restaurant={restaurant} />
      <ScrollView>
        <List.AccordionGroup>
          <List.Accordion
            title="Breakfast"
            id="1"
            expanded={breakfastExpanded}
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            id="2"
            expanded={lunchExpanded}
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="Burget w/ Fries" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            id="3"
            expanded={dinnerExpanded}
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Spaghetti Bolognese" />
            <List.Item title="Veal Cutlet with Chicken Mushrooms" />
            <List.Item title="Steak Frites" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            id="4"
            expanded={drinksExpanded}
            left={(props) => <List.Icon {...props} icon="cup" />}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Modelo" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
          </List.Accordion>
        </List.AccordionGroup>
      </ScrollView>
    </>
  );
};
