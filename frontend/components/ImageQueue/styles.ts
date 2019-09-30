import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { UIConstants } from "../../common/constants";

export const imageCardQueueStyles = StyleSheet.create({
  headerText: {
    color: UIConstants.appBlackColor,
    marginBottom: UIConstants.imageCardLabelMarginBottom,
    marginLeft: UIConstants.appMarginLeft
  }
});
