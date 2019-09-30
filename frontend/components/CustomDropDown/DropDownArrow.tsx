import React from "react";
import { Image } from "react-native";

const DropDownArrow: React.SFC = () => {
  return (
    <Image
      source={require("../../assets/images/dropdown-lt.png")}
      style={{ marginRight: 10 }}
    />
  );
};

export default DropDownArrow;
