import React from "react";
import { Text } from "react-native";

export function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export function RobotoCondItalicText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "robotoCond-i" }]} />
  );
}

export function RobotoCondText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "robotoCond" }]} />
  );
}
