import React from "react";
import { SpacerComponent } from "../../../components/spacer/SpacerComponent";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from "../components/AccountStyles";

export const AccountView = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title> Meals To Go </Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <SpacerComponent size="large" />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
