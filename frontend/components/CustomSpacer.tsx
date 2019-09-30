import React from "react";
import { View } from "react-native";
import { UIConstants } from "../common/constants";

type Props = {
  height?: number | string;
  width?: number | string;
  vertical?: boolean;
  aspectRatio?: number;
};

const defaultProps = {
  height: undefined,
  width: undefined,
  vertical: false
};

const CustomSpacer: React.SFC<Props> = props => {
  const { height, width, vertical, aspectRatio } = props;

  const style = [
    {
      height,
      width,
      backgroundColor: "rgba(52, 52, 52, alpha)"
    },
    aspectRatio ? { aspectRatio } : null
  ];

  return <View style={style} />;
};

CustomSpacer.defaultProps = defaultProps;

export default CustomSpacer;
