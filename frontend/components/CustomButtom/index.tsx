import _ from "lodash";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { fontStyles } from "../../common/styles";

type Props = {
  backgroundColor: string;
  color: string;
  label: string;
  handlePress: () => void;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  fontStyle?: StyleProp<TextStyle>;
};

const defaultProps = {
  disabled: false
};

const CustomButton: React.SFC<Props> = props => {
  const {
    backgroundColor,
    color,
    label,
    handlePress,
    disabled,
    containerStyle,
    fontStyle
  } = props;

  const mainContainer = _.clone(styles.mainContainer);
  _.set(mainContainer, "backgroundColor", backgroundColor);

  const textStyle = {
    color
  };

  return (
    <TouchableOpacity onPress={handlePress} disabled={disabled}>
      <View style={[mainContainer, containerStyle]}>
        <Text style={[textStyle, fontStyles.bodySmall, fontStyle]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

CustomButton.defaultProps = defaultProps;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: wp("83%"),
    aspectRatio: 20 / 3,
    borderRadius: 7
  }
});

export default CustomButton;
