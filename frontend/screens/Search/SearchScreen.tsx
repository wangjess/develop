import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  Platform,
  View,
  Alert
} from "react-native";
import DropDownArrow from "../../components/CustomDropDown/DropDownArrow";
import CustomSpacer from "../../components/CustomSpacer";
import RNPickerSelect, { Item } from "react-native-picker-select";
import ImageQueue from "../../components/ImageQueue/index";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { customStyles, dropDownStyle, categoryDropDownStyles } from "./styles";
import { UIConstants } from "../../common/constants";
import { fontStyles } from "../../common/styles";
import UsersList from "../../UsersList.js";

type Props = {
  userName: string;
  user: any;
  categoryList: Item[];
  imageList: [];
};

type State = {
  searchInput?: string;
  resultText?: string;
  category?: string;
  dropdownSelected?: any;
};

class SearchScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: "Search/Home",
    header: null
  };

  static defaultProps = {
    userName: "Jason",
    user: UsersList[0],
    categoryList: [
      { label: "All", value: "0" },
      { label: "Foods", value: "1" },
      { label: "Common", value: "2" }
    ],
    imageList: ["1", "2", "3"]
  };

  state = {
    searchInput: undefined,
    resultText: undefined,
    category: "All",
    dropdownSelected: 0
  };

  getSearchResult = () => {
    const { searchInput, category } = this.state;
    if (searchInput !== undefined) {
      this.setState({
        resultText: `Results for "${searchInput}" in Jason's Gallery`
      });
    }
    Alert.alert(`SearchInput: ${searchInput} \n Category: ${category}`);
  };

  handleChangeText = (text: string) => {
    const { searchInput } = this.state;
    this.setState({
      resultText: undefined
    });
    this.setState({
      searchInput: text
    });
  };

  handleChangeDropDown = (value: any) => {
    const { category, dropdownSelected } = this.state;
    const { categoryList } = this.props;
    let newPick = categoryList.find(cat => cat.value === value);
    this.setState({
      dropdownSelected: value,
      category: newPick.label
    });
  };

  render() {
    const { searchInput, resultText, dropdownSelected } = this.state;
    const { categoryList, imageList, user } = this.props;
    this.setState({ searchInput: user.username });

    return (
      <ImageBackground
        source={require("../../assets/images/backgroundImage1.png")}
        imageStyle={{ resizeMode: "stretch" }}
        style={customStyles.backgroundImage}
      >
        <SafeAreaView style={customStyles.bodyContainer}>
          <View style={customStyles.headerContainer}>
            {Platform.OS !== "ios" ? (
              <CustomSpacer width="100%" aspectRatio={20 / 1} />
            ) : null}
            <View style={customStyles.searchContainer}>
              <View style={customStyles.searchBar}>
                <TextInput
                  style={customStyles.searchBarInput}
                  placeholder={"Search for Jason's..."}
                  value={searchInput}
                  onChangeText={(text: string) => this.handleChangeText(text)}
                  onSubmitEditing={any => this.getSearchResult()}
                  allowFontScaling={true}
                  autoCapitalize="none"
                  selectionColor={UIConstants.appGrayColor}
                />
              </View>
              <View style={[categoryDropDownStyles.mainContainer]}>
                <RNPickerSelect
                  style={dropDownStyle}
                  items={categoryList}
                  textInputProps={{ fontStyle: fontStyles.bodyLarge }}
                  placeholder={{}}
                  onValueChange={value => this.handleChangeDropDown(value)}
                  value={dropdownSelected}
                  Icon={() => <DropDownArrow />}
                />
              </View>
            </View>

            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={[
                fontStyles.headerSmallItalic,
                customStyles.resultsTextContainer
              ]}
            >
              {resultText}
            </Text>
          </View>
          <View
            style={{
              width: wp("100%"),
              flex: 1
            }}
          >
            <ImageQueue ids={imageList} componentId="2" />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default SearchScreen;
