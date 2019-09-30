import React from "react";
import {
  AsyncStorage,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  Platform,
  View
} from "react-native";
import CustomSpacer from "../components/CustomSpacer";
import ImageQueue from "../components/ImageQueue/index";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import CustomButton from "../components/CustomButtom/index";
import { UIConstants } from "../common/constants";
import { fontStyles } from "../common/styles";
import { withNavigation } from "react-navigation";

class LoginCreateAccountScreen extends React.Component {
  static navigationOptions = {
    title: "Please Login or Create an Account",
    header: null
  };
  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Login");
  };

  _createAccountAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("CreateAccount");
  };
  render() {
    return (
      <ImageBackground
        source={require("../assets/images/backgroundImage1.png")}
        imageStyle={{ resizeMode: "stretch" }}
        style={styles.backgroundImage}
      >
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <CustomButton
            backgroundColor={UIConstants.appGreenColor}
            color={UIConstants.appGrayColor}
            label="Sign In"
            handlePress={this._signInAsync}
            containerStyle={styles.buttonContainer}
          />
          <CustomSpacer width="100%" aspectRatio={20 / 1} />
          <CustomButton
            backgroundColor={UIConstants.appRedColor}
            color={UIConstants.appGrayColor}
            label="Create Account"
            handlePress={this._createAccountAsync}
            containerStyle={styles.buttonContainer}
          />
        </View>
      </ImageBackground>
    );
  }
}
export default LoginCreateAccountScreen;

const styles = StyleSheet.create({
  bodyContainer: {
    position: "absolute",
    flexDirection: "column",
    alignItems: "flex-start",
    width: wp("100%"),
    height: "100%"
  },
  headerContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: wp("100%"),
    aspectRatio: 9 / 4
  },
  searchContainer: {
    width: "100%",
    aspectRatio: 4 / 1,
    flexDirection: "row",
    alignItems: "center"
  },
  searchBar: {
    width: "55%",
    aspectRatio: 3 / 1,
    backgroundColor: UIConstants.appWhiteColor,
    borderColor: UIConstants.appGrayColor,
    borderWidth: 4,
    borderRadius: 15,
    marginLeft: UIConstants.appMarginLeft,
    marginRight: wp("3%")
  },
  buttonContainer: {
    width: "80%",
    aspectRatio: 3 / 1,
    borderWidth: 4,
    borderRadius: 15
  },
  resultsTextContainer: {
    width: "100%",
    aspectRatio: 7 / 1,
    overflow: "hidden",
    flexWrap: "wrap",
    textAlign: "center",
    letterSpacing: 1,
    color: UIConstants.appGrayColor,
    marginLeft: UIConstants.appMarginLeft
  },
  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});
