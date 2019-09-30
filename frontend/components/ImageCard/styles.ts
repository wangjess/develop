import { StyleSheet, Platform } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { UIConstants } from "../../common/constants";

export const imageStyles = StyleSheet.create({
  shadowContainer: {
    width: wp("75%"),
    flex: 1,
    marginRight: wp("6%"),
    marginBottom: wp("3%"),
    borderRadius: 20,
    // For iOS only
    shadowColor: "#000000",
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowRadius: 10
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: 20,
    borderColor: UIConstants.appBlackColor,
    borderWidth: 4,
    // For Android only
    elevation: 12,
    marginTop: wp("2%"),
    marginLeft: wp("3%"),
    marginRight: wp("2%"),
    marginBottom: wp("4%")
  },
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    alignSelf: "stretch",
    width: undefined,
    height: undefined
  },
  imageLabelContainer: {
    width: wp("70%"),
    marginLeft: wp("3%"),
    marginRight: wp("2%"),
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 10
  },
  imageLabelText: {
    flexWrap: "wrap",
    textAlign: "center",
    letterSpacing: 1,
    fontFamily: UIConstants.mainFontFamily,
    color: UIConstants.appBlackColor
  },
  captionText: {
    marginLeft: "7.5%",
    marginRight: "7.5%",
    fontFamily: UIConstants.mainFontFamily,
    color: UIConstants.appWhiteColor
  }
});
