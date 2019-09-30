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
import validator from "validator";
import { UIConstants } from "../../common/constants";

type Props = {
  value: string;
  handleChangeText?: ((text: string) => void) | undefined;
  containerStyle?: StyleProp<ViewStyle>;
};

class EmailTextInput extends React.PureComponent<Props> {
  isEmailInvalid = (email: string) => {
    return !_.isEmpty(email) && !validator.isEmail(email);
  };

  render() {
    const { handleChangeText, value, containerStyle } = this.props;

    return (
      <View
        style={[
          { width: "100%", aspectRatio: 4 / 1, alignItems: "flex-start" },
          containerStyle
        ]}
      >
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Email..."
          value={value}
          onChangeText={handleChangeText}
          autoCapitalize="none"
          selectionColor={UIConstants.appGrayColor}
        />
        {this.isEmailInvalid(value) ? (
          <Text>Email address is invalid</Text>
        ) : null}
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

export default EmailTextInput;
