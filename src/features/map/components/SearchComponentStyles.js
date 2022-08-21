import styled from "styled-components/native";
import { Platform } from "react-native";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: ${Platform.OS === "android" ? 35 : 30}px;
  width: 100%;
`;
