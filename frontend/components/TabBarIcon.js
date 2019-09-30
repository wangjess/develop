import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import { UIConstants } from "../common/constants";

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={35}
      style={{ marginBottom: -3 }}
      color={
        props.focused ? UIConstants.appRedColor : UIConstants.appGreenColor
      }
    />
  );
}
