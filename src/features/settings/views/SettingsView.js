import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { SpacerComponent } from "../../../components/spacer/SpacerComponent";
import { Text } from "../../../components/typography/TextComponent";

import { SafeArea } from "../../../components/utility/SafeAreaComponent";
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext";

const SectionItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  padding-top: ${(props) => props.theme.space[1]};
  align-items: center;
`;

export const SettingsView = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={80} icon="human" backgroundColor="#2182BD" />
        <SpacerComponent position="top" size="large" />
        <Text variant="label">{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SectionItem
          title="Favourites"
          description="View your favourites places"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("FavouritesView")}
        />
        <SectionItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
