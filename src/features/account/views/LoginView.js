import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SpacerComponent } from "../../../components/spacer/SpacerComponent";
import { Text } from "../../../components/typography/TextComponent";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/AccountStyles";
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext";

export const LoginView = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title> Meals To Go </Title>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
        />
        <SpacerComponent size="large" />
        <AuthInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          textContentType="password"
          secure
          secureTextEntry
          autoCapitalize="none"
        />
        <SpacerComponent size="large" />
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <SpacerComponent size="large" />
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </AccountContainer>
      <SpacerComponent size="large" />
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
