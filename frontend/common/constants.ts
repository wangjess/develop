import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

export const UIConstants = {
  bottomTabFontSize: 15,

  appMarginLeft: wp("4%"),
  appMarginRight: wp("4%"),
  appMenuYellowColor: "#EEE263",
  appMenuYellowColor80T: "#EEE263CC", // 80% transparency
  appMenuYellowColor60T: "#EEE26399", // 60% transparency
  appWhiteColor: "#FFFFFF",
  appWhiteColor80T: "#FFFFFFCC", // 80% transparency
  appWhiteColor60T: "#FFFFFF99", // 60% transparency
  appBlackColor: "#000000",
  appBlackColor80T: "#000000CC", // 80% transparency
  appBlackColor60T: "#00000099", // 60% transparency
  appGrayColor: "#807F80",
  appRedColor: "#F4B187",
  appGreenColor: "#D1E6AF",

  //   headerContainerMarginTopAndroid: wp('9%'),
  //   headerContainerMarginTopIOS: wp('6.5%'),
  imageCardLabelMarginBottom: hp("2.5%"),
  //   bodyContainerMarginTop: hp('2.5%'),
  //   bodyContainerMarginLeft: hp('3.9%'),

  mainFontFamily: "roboto-Cond"

  //   lineHeightHeaderLarge: 38,
  //   lineHeightHeaderSmall: 24,
  //   lineHeightBodyLarge: 20,
  //   lineHeightBodySmall: 20,

  //   mainBackgroundColor: '#FFFFFF',
  //   mainFontColor: '#061658',
  //   detailFontColor: 'rgba(6, 22, 88, 0.6)',

  //   chipHeight: wp('9%'),

  //   resourcesBkgColor: '#E9EBF8',
  //   resourcesFontColor: '#061658',
};

export const COMMON_ACTION_TYPES = {
  RESET_STORE: "commonActionTypes/RESET_STORE",
  NO_OP: "commonActionTypes/NO_OP"
};
