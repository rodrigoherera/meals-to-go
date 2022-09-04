import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase/app";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { theme } from "./src/infrastructure/theme";
import { Navigator } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/AuthenticationContext";

const firebaseConfig = {
  apiKey: "AIzaSyDfYHAZYn_vuK7ATcvIe0jtS7E1OPo6oV0",
  authDomain: "meals-to-go-75fc8.firebaseapp.com",
  projectId: "meals-to-go-75fc8",
  storageBucket: "meals-to-go-75fc8.appspot.com",
  messagingSenderId: "787742762148",
  appId: "1:787742762148:web:219e488883fbe1196bb231",
  measurementId: "G-5MW2L3C1ET",
};

if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigator />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
