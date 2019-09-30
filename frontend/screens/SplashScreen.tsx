import React from "react";
import {
  AsyncStorage,
  ActivityIndicator,
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  Platform
} from "react-native";
import CustomSpacer from "../components/CustomSpacer";
import ImageQueue from "../components/ImageQueue/index";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { UIConstants } from "../common/constants";
import { fontStyles } from "../common/styles";
import { withNavigation } from "react-navigation";

class SplashScreen extends React.Component {
  static navigationOptions = {
    title: "Splash Screen",
    header: null
  };

  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(
      userToken ? "CreateAccount" : "CreateAccount"
    );
  };

  // Render any loading content that you like here
  render() {
    return (
      <ImageBackground
        source={require("../assets/images/backgroundImage1.png")}
        imageStyle={{ resizeMode: "stretch" }}
        style={styles.backgroundImage}
      >
        <SafeAreaView style={styles.bodyContainer}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[fontStyles.headerLarge, styles.resultsTextContainer]}
          >
            Splash Screen
          </Text>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
export default SplashScreen;

// SplashScreen.navigationOptions = {
//   header: null
// };

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
