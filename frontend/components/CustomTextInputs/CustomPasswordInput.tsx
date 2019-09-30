import _ from "lodash";
import * as React from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  Text,
  View,
  ViewStyle
} from "react-native";
import { UIConstants } from "../../common/constants";

type Props = {
  value: string;
  handleChangeText?: ((text: string) => void) | undefined;
  containerStyle?: StyleProp<ViewStyle>;
};

type State = {
  error: string;
  isInvalid: boolean;
};

class PasswordTextInput extends React.PureComponent<Props, State> {
  static defaultProps = {
    label: "Password"
  };

  state = {
    error: "",
    isInvalid: false
  };

  isPasswordInvalid = (password: string) => {
    let error = "";
    let isInvalid = false;

    if (!_.isEmpty(password)) {
      if (password.length < 6) {
        error = "Must be at least 6 characters";
        isInvalid = true;
      } else if (!password.match(/\d+/g)) {
        error = "Must contain at least one number";
        isInvalid = true;
      }
      this.setState({ error, isInvalid });
    }

    return isInvalid;
  };

  render() {
    const { handleChangeText, value, containerStyle } = this.props;

    return (
      <View style={[{ width: "100%", aspectRatio: 4 / 1 }, containerStyle]}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Password..."
          value={value}
          onChangeText={handleChangeText}
          autoCapitalize="none"
          selectionColor={UIConstants.appGrayColor}
        />
        {this.isPasswordInvalid(value) ? <Text>{this.state.error}</Text> : null}
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

export default PasswordTextInput;
