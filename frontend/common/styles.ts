import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

type FontStyles = {
  headerLarge: TextStyle;
  headerMedium: TextStyle;
  headerSmall: TextStyle;
  bodyLarge: TextStyle;
  bodySmall: TextStyle;
  clickableText: TextStyle;
  miniLabel: TextStyle;
};

export const fontStyles = StyleSheet.create<FontStyles>({
  headerLarge: {
    fontFamily: "roboto-Cond",
    fontSize: wp("9%")
  },
  headerMedium: {
    fontFamily: "roboto-Cond",
    fontSize: wp("7.5%")
  },
  headerSmall: {
    fontFamily: "roboto-Cond",
    fontSize: wp("6%")
  },
  bodyLarge: {
    fontFamily: "roboto-Cond",
    fontSize: wp("4.7%")
  },
  bodySmall: {
    fontFamily: "roboto-Cond",
    fontSize: wp("4.3%")
  },
  clickableText: {
    fontFamily: "roboto-Cond",
    fontSize: wp("4.3%")
  },
  miniLabel: {
    fontFamily: "roboto-Cond",
    opacity: 0.6,
    fontSize: wp("4.3%")
  },
  headerLargeItalic: {
    fontFamily: "robotoCond-i",
    fontSize: wp("9%")
  },
  headerMediumItalic: {
    fontFamily: "robotoCond-i",
    fontSize: wp("7.5%")
  },
  headerSmallItalic: {
    fontFamily: "robotoCond-i",
    fontSize: wp("6%")
  },
  bodyLargeItalic: {
    fontFamily: "robotoCond-i",
    fontSize: wp("4.7%")
  },
  bodySmallItalic: {
    fontFamily: "robotoCond-i",
    fontSize: wp("4.3%")
  },
  clickableTextItalic: {
    fontFamily: "robotoCond-i",
    fontSize: wp("4.3%")
  },
  miniLabelItalic: {
    fontFamily: "robotoCondi",
    opacity: 0.6,
    fontSize: wp("4.3%")
  }
});

export const topBarRightBtnStyle: ViewStyle = {
  marginRight: wp("4%"),
  marginTop: Platform.OS === "ios" ? 0 : 13,
  marginBottom: Platform.OS === "ios" ? 0 : 13
};
