import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/RestaurantsContext";
import { LocationContextProvider } from "./src/services/location/LocationContext";
import { Navigator } from "./src/infrastructure/navigation";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigator />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
