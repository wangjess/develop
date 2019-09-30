import React from "react";
import {
  TouchableOpacity,
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
import CustomButton from "../components/CustomButtom";
import CustomTextInput from "../components/CustomTextInputs/CustomTextInput";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { UIConstants } from "../common/constants";
import { fontStyles } from "../common/styles";
import { withNavigation } from "react-navigation";

class ShareGalleryScreen extends React.Component {
  static navigationOptions = {
    title: "ShareGallery",
    header: null
  };
  _submitAsync = async () => {
    //   await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Main");
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
              justifyContent: "center"
            }}
          >
            <Text
              numberOfLines={4}
              ellipsizeMode="tail"
              style={[fontStyles.headerSmall, styles.resultsTextContainer]}
            >
              Search for users to share your gallery with!
            </Text>
            <CustomTextInput
              value={"Cats"}
              handleChangeText={() => {}}
              placeholder="Enter user email here..."
              containerStyle={styles.customInputContainer}
            />
            <CustomSpacer width="100%" aspectRatio={20 / 1} />
            <TouchableOpacity
              onPress={this._submitAsync}
              style={{ alignSelf: "flex-end" }}
            >
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={[fontStyles.bodySmall, styles.resultsTextContainer]}
              >
                (skip)
              </Text>
            </TouchableOpacity>
            <CustomSpacer width="100%" aspectRatio={20 / 1} />
            <CustomButton
              backgroundColor={UIConstants.appRedColor}
              color={UIConstants.appGrayColor}
              label="Submit"
              handlePress={this._submitAsync}
              containerStyle={styles.buttonContainer}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default ShareGalleryScreen;

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
  buttonContainer: {
    width: "80%",
    aspectRatio: 3 / 1,
    borderWidth: 4,
    borderRadius: 15
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
  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});
