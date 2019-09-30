import _ from "lodash";
import * as React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextInput
} from "react-native";
import { UIConstants } from "../../common/constants";

type Props = {
  value: string;
  handleChangeText?: ((text: string) => void) | undefined;
  placeholder: string;
  containerStyle?: StyleProp<ViewStyle>;
};

class CustomTextInput extends React.PureComponent<Props> {
  render() {
    const { handleChangeText, value, containerStyle, placeholder } = this.props;

    return (
      <View
        style={[
          { width: "100%", aspectRatio: 4 / 1, alignItems: "flex-start" },
          containerStyle
        ]}
      >
        <TextInput
          style={styles.inputStyle}
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          autoCapitalize="none"
          selectionColor={UIConstants.appGrayColor}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputStyle: {
    aspectRatio: 4 / 1,
    marginLeft: 10,
    width: "100%",
    fontSize: 20
  }
});

export default CustomTextInput;
