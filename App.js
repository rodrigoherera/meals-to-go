import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantView } from "./src/features/restaurants/views/RestaurantView";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantView />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
