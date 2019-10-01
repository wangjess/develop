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
import RNPickerSelect, { Item } from "react-native-picker-select";
import CustomSpacer from "../components/CustomSpacer";
import { UIConstants } from "../common/constants";
import { fontStyles } from "../common/styles";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
// import { usersService } from  "../UsersService.js";


type State = {
  userName: any;
};
type Props = {
    user: any;
  };

class RandomTestScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: "RandomTest",
  };
  
  static defaultProps = {
    // user: usersService,
  }

  state = {
      userName: "",
  }

  getUserName = async () => {
      const {user}=this.props;
      try{
      const userName = await user.getUser(0).username;
      this.setState({userName});
        }catch(error){
        
        }
  }

  render() {
    const {userName} = this.state;

    return (
            <ImageBackground
              source={require("../assets/images/backgroundImage1.png")}
              imageStyle={{ resizeMode: "stretch" }}
              style={customStyles.backgroundImage}
            >
              <SafeAreaView style={customStyles.bodyContainer}>
                  <TouchableOpacity style={{flex:1, width:"100%", aspectRatio: 4 /1, backgroundColor: "blue"}}
                      onPress={() => this.getUserName()}>

                        <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        style={[fontStyles.headerLarge, customStyles.resultsTextContainer]}
                        >
                        {userName}
                        </Text>
                </TouchableOpacity>
              </SafeAreaView>
            </ImageBackground>
    );
  }
}
export default RandomTestScreen;


const customStyles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%"
  },
  bodyContainer: {
    position: "absolute",
    flexDirection: "column",
    alignItems: "flex-start",
    width: wp("100%"),
    height: "100%"
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
});
