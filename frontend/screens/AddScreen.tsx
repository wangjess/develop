import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";

import { RobotoCondText } from "../components/StyledText";
import DropDownArrow from "../components/CustomDropDown/DropDownArrow";
import CustomButton from "../components/CustomButtom/index";
import RNPickerSelect, { Item } from "react-native-picker-select";
import CustomSpacer from "../components/CustomSpacer";
import { UIConstants } from "../common/constants";
import { fontStyles } from "../common/styles";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { labeledStatement } from "@babel/types";

type State = {
  labelName: string;
  category: string;
  imageUrl: string;
  pickerSelected: any;
  imageUploaded: boolean;
};

class AddScreen extends React.Component<State> {
  static navigationOptions = {
    title: "Upload New Image",
    header: null
  };

  state = {
    labelName: undefined,
    category: undefined,
    newCategory: undefined,
    imageUrl: undefined,
    dropdownSelected: null,
    imageUploaded: false,
    categoryList: [
      { label: "All", value: "1" },
      { label: "Foods", value: "2" },
      { label: "Common", value: "3" }
    ]
  };

  handleChangeLabel = (text: string) => {
    this.setState({
      labelName: text
    });
  };

  handleCreateCategory = (text: string) => {
    this.setState({
      newCategory: text
    });
  };

  handleChangeDropDown = (value: any) => {
    const { categoryList } = this.state;
    Alert.alert(`${value}`);
    if (value !== null) {
      let newPick = categoryList.find(cat => cat.value === value);
      this.setState({
        dropdownSelected: value,
        category: newPick.label
      });
      return;
    }
    this.setState({
      dropdownSelected: undefined,
      category: undefined
    });
  };

  handleImageUpload = () => {
    const { labelName, newCategory, category } = this.state;
    if (labelName == undefined || labelName == "") {
      Alert.alert("Image must have a name!");
      return;
    }
    if (
      (newCategory !== undefined &&
        newCategory !== "" &&
        category !== undefined) ||
      ((newCategory === undefined || newCategory === "") &&
        category === undefined)
    ) {
      Alert.alert("Select or create a new category. Only one please!");
      return;
    }
    if (newCategory !== undefined && newCategory !== "") {
      Alert.alert(
        `Image uploaded!\nImageName: ${labelName}\nCategory: ${category} [EMPTY]\n NewCategory: ${newCategory}`
      );
      return;
    }
    Alert.alert(
      `Image uploaded!\nImageName: ${labelName}\nCategory: ${category}\n NewCategory: ${newCategory} [EMPTY]`
    );
  };

  render() {
    const {
      labelName,
      imageUrl,
      imageUploaded,
      categoryList,
      dropdownSelected,
      newCategory
    } = this.state;
    return (
      <ImageBackground
        source={require("../assets/images/backgroundImage2.png")}
        imageStyle={{ resizeMode: "stretch" }}
        style={customStyles.backgroundImage}
      >
        <SafeAreaView style={customStyles.bodyContainer}>
          <View style={customStyles.headerContainer}>
            <Text
              style={[fontStyles.headerLarge]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Upload New Image
            </Text>
            <CustomSpacer width="100%" aspectRatio={30 / 1} />
            <Text
              style={[
                fontStyles.headerSmall,
                { color: UIConstants.appGrayColor }
              ]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Image Name
            </Text>
            <View style={customStyles.labelContainer}>
              <Text
                style={[
                  fontStyles.bodyLarge,
                  {
                    color: UIConstants.appGrayColor,
                    marginLeft: UIConstants.appMarginLeft
                  }
                ]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Name
              </Text>
              <View style={customStyles.searchBar}>
                <TextInput
                  style={customStyles.searchBarInput}
                  placeholder={"Enter image name..."}
                  value={labelName}
                  onChangeText={(text: string) => this.handleChangeLabel(text)}
                  allowFontScaling={true}
                  autoCapitalize="none"
                  selectionColor={UIConstants.appGrayColor}
                />
              </View>
            </View>
            <CustomSpacer width="100%" aspectRatio={20 / 1} />
            <Text
              style={[
                fontStyles.headerSmall,
                { color: UIConstants.appGrayColor }
              ]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Image Category
            </Text>
            <View style={customStyles.labelContainer}>
              <Text
                style={[
                  fontStyles.bodyLarge,
                  {
                    color: UIConstants.appGrayColor,
                    marginLeft: UIConstants.appMarginLeft
                  }
                ]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Create Category
              </Text>
              <View style={customStyles.searchBar}>
                <TextInput
                  style={customStyles.searchBarInput}
                  placeholder={"Enter new category..."}
                  value={newCategory}
                  onChangeText={(text: string) =>
                    this.handleCreateCategory(text)
                  }
                  allowFontScaling={true}
                  autoCapitalize="none"
                  selectionColor={UIConstants.appGrayColor}
                />
              </View>
            </View>
            <View style={customStyles.orContainer}>
              <Text
                style={[
                  fontStyles.headerSmallItalic,
                  {
                    color: UIConstants.appGrayColor,
                    marginLeft: UIConstants.appMarginLeft
                  }
                ]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Or
              </Text>
            </View>
            <View style={customStyles.dropDownContainer}>
              <Text
                style={[
                  fontStyles.bodyLarge,
                  {
                    color: UIConstants.appGrayColor,
                    marginLeft: UIConstants.appMarginLeft
                  }
                ]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Select Category
              </Text>
              <RNPickerSelect
                style={dropDownStyle}
                items={categoryList}
                textInputProps={{ fontStyle: fontStyles.bodyLarge }}
                onValueChange={value => this.handleChangeDropDown(value)}
                value={dropdownSelected}
                Icon={() => <DropDownArrow />}
              />
            </View>
          </View>
          <CustomSpacer width="100%" aspectRatio={30 / 1} />
          {!imageUploaded ? (
            <TouchableOpacity
              style={customStyles.imageUploadContainer}
              onPress={() => this.setState({ imageUploaded: !imageUploaded })}
            >
              <Image
                source={require("../assets/images/imageupload.png")}
                style={customStyles.iconContainer}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          ) : (
            <View style={{ flex: 1, width: "90%", flexDirection: "column" }}>
              <ImageBackground
                source={require("../assets/images/backgroundImage2.png")}
                style={customStyles.imageUploadedContainer}
                imageStyle={{ borderRadius: 20 }}
                resizeMode="stretch"
              >
                <CustomButton
                  backgroundColor={UIConstants.appGreenColor}
                  color={UIConstants.appGrayColor}
                  label="SUBMIT IMAGE"
                  handlePress={() => this.handleImageUpload()}
                  containerStyle={{ width: "70%", aspectRatio: 5 / 1 }}
                />
                <CustomSpacer width="100%" aspectRatio={15 / 1} />
                <CustomButton
                  backgroundColor={UIConstants.appBlackColor60T}
                  color={UIConstants.appRedColor}
                  label="USE DIFFERENT IMAGE"
                  handlePress={() => {
                    Alert.alert("Image cancelled");
                    this.setState({ imageUploaded: !imageUploaded });
                  }}
                  containerStyle={{ width: "70%", aspectRatio: 5 / 1 }}
                />
              </ImageBackground>
            </View>
          )}
          <CustomSpacer width="100%" aspectRatio={30 / 1} />
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
export default AddScreen;

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
  );
}

const customStyles = StyleSheet.create({
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
    aspectRatio: 13 / 16
  },
  labelContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: wp("100%"),
    aspectRatio: 4 / 1
  },
  dropDownContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: wp("100%"),
    aspectRatio: 4 / 1
  },
  imageUploadContainer: {
    flex: 1,
    width: "90%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 4,
    backgroundColor: UIConstants.appBlackColor60T,
    marginLeft: UIConstants.appMarginLeft,
    marginRight: UIConstants.appMarginRight
  },
  imageUploadedContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    borderRadius: 20,
    borderWidth: 4,
    backgroundColor: UIConstants.appBlackColor60T,
    marginLeft: UIConstants.appMarginLeft,
    marginRight: UIConstants.appMarginRight
  },
  orContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: wp("75%"),
    marginLeft: UIConstants.appMarginLeft
  },
  searchContainer: {
    width: "100%",
    aspectRatio: 5 / 1,
    flexDirection: "row",
    alignItems: "center"
  },
  searchBar: {
    width: wp("55%"),
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
  iconContainer: {
    aspectRatio: 1,
    height: undefined,
    width: "30%"
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
    flexDirection: Platform.OS === "android" ? "row" : null,
    alignItems: Platform.OS === "android" ? "center" : null,
    width: wp("45%"),
    aspectRatio: 5 / 2,
    backgroundColor: UIConstants.appGreenColor,
    borderColor: UIConstants.appGrayColor,
    marginLeft: UIConstants.appMarginLeft,
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