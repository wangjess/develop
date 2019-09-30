import { Platform, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { UIConstants } from "../../common/constants";
import { fontStyles } from "../../common/styles";

export const galleryDropDownStyles = StyleSheet.create({
  mainContainer: {
    width: wp("35%"),
    justifyContent: "center",
    aspectRatio: 35 / 18,
    // Android has padding on the left of the Picker text
    marginLeft: Platform.OS === "android" ? 0 : 10,
    marginRight: 10
  }
});
