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
import CustomButton from "../components/CustomButtom";
import CustomEmailInput from "../components/CustomTextInputs/CustomEmailInput";
import CustomPasswordInput from "../components/CustomTextInputs/CustomPasswordInput";
import ImageQueue from "../components/ImageQueue/index";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { UIConstants } from "../common/constants";
import { fontStyles } from "../common/styles";
import { withNavigation } from "react-navigation";

class CreateAccountScreen extends React.Component {
  static navigationOptions = {
    title: "Please Create an Account",
    header: null
  };
  _submitAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("GalleryName");
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/images/backgroundImage1.png")}
        imageStyle={{ resizeMode: "stretch" }}
        style={styles.backgroundImage}
      >
        <SafeAreaView style={styles.bodyContainer}>
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-start"
            }}
          >
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={[fontStyles.bodySmall, styles.resultsTextContainer]}
            >
              Email
            </Text>
            <CustomEmailInput
              value={"Cats"}
              handleChangeText={() => {}}
              containerStyle={styles.customInputContainer}
            />
            <CustomSpacer width="100%" aspectRatio={20 / 1} />
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={[fontStyles.bodySmall, styles.resultsTextContainer]}
            >
              Password
            </Text>
            <CustomPasswordInput
              value={"Cats"}
              handleChangeText={() => {}}
              containerStyle={styles.customInputContainer}
            />
            <CustomSpacer width="100%" aspectRatio={20 / 1} />

            <CustomSpacer width="100%" aspectRatio={20 / 1} />
            <CustomButton
              backgroundColor={UIConstants.appRedColor}
              color={UIConstants.appGrayColor}
              label="Create Account"
              handlePress={this._submitAsync}
              containerStyle={styles.buttonContainer}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
export default CreateAccountScreen;

const styles = StyleSheet.create({
  bodyContainer: {
    position: "absolute",
    flexDirection: "column",
    alignItems: "flex-start",
    width: wp("100%"),
    height: "100%"
  },
  buttonContainer: {
    width: "80%",
    aspectRatio: 3 / 1,
    borderWidth: 4,
    borderRadius: 15
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
  customInputContainer: {
    width: "80%",
    aspectRatio: 4 / 1,
    backgroundColor: UIConstants.appWhiteColor,
    borderColor: UIConstants.appGrayColor,
    borderWidth: 4,
    borderRadius: 15,
    marginLeft: UIConstants.appMarginLeft,
    marginRight: UIConstants.appMarginRight
  },
  resultsTextContainer: {
    width: "100%",
    aspectRatio: 10 / 1,
    letterSpacing: 1,
    color: UIConstants.appGrayColor,
    marginLeft: UIConstants.appMarginLeft,
    marginRight: UIConstants.appMarginRight
  },
  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});
