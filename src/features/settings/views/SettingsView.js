import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext";

export const SettingsView = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <View>
        <Text>Settings</Text>
        <Button title="Logout" onPress={() => onLogout()} />
      </View>
    </SafeArea>
  );
};
