import { Platform, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { UIConstants } from "../../common/constants";

export const customStyles = StyleSheet.create({
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
    aspectRatio: 10 / 4
  },
  searchContainer: {
    width: "100%",
    aspectRatio: 5 / 1,
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
    justifyContent: "center",
    marginRight: wp("3%")
  },
  searchBarInput: {
    width: "90%",
    aspectRatio: 3 / 1,
    backgroundColor: "transparent",
    borderRadius: 15,
    alignSelf: "center",
    fontSize: 20
  },
  resultsTextContainer: {
    width: "100%",
    aspectRatio: 6 / 1,
    overflow: "hidden",
    flexWrap: "wrap",
    textAlign: "center",
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

export const dropDownStyle = {
  // The main container for the text and Icon
  viewContainer: {
    flex: 1,
    flexDirection: Platform.OS === "android" ? "row" : null,
    alignItems: Platform.OS === "android" ? "center" : null,
    width: "35%",
    aspectRatio: 35 / 18,
    backgroundColor: UIConstants.appGreenColor,
    borderColor: UIConstants.appGrayColor,
    borderWidth: 4,
    borderRadius: 15
  },
  inputIOS: {
    flex: 1,
    color: UIConstants.appGrayColor,
    marginLeft: 20
  },
  inputIOSContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  // inputAndroidContainer: {
  //   fontSize: 30
  // },
  inputAndroid: {
    flex: 1,
    color: UIConstants.appGrayColor,
    marginLeft: 10
  },
  iconContainer: {
    zIndex: -1
  }
};

export const categoryDropDownStyles = StyleSheet.create({
  mainContainer: {
    width: wp("35%"),
    justifyContent: "center",
    aspectRatio: 35 / 18,
    // Android has padding on the left of the Picker text
    marginLeft: Platform.OS === "android" ? 0 : 10,
    marginRight: 10
  }
});