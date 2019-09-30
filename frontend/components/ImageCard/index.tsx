import _ from "lodash";
import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
// import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';

// import { goToProfile } from '../../../features/profile/navigation';
// import { RootState } from '../../../reducers';
import { fontStyles } from "../../common/styles";
// import { EntityTypes, Event, Locale } from '../../types';
// import { getMonth } from '../../utils/date';
import { imageStyles } from "./styles";
import { UIConstants } from "../../common/constants";

type PropsFromParent = {
  id: string;
  componentId: string;
  imageUrl?: string;
  imageLabel: string;
  caption: string;
};

type PropsFromState = {};

type PropsFromDispatch = {};

type AllProps = PropsFromParent & PropsFromState & PropsFromDispatch;

class ImageCard extends React.PureComponent<AllProps> {
  handlePress = (id: string) => {
    return Alert.alert("You long pressed it!");
  };

  renderImageLabel = (label: string) => {
    return (
      <View style={imageStyles.imageLabelContainer}>
        <Text
          style={[fontStyles.headerLarge, imageStyles.imageLabelText]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {label}
        </Text>
      </View>
    );
  };

  renderCardStyle = () => {
    let { imageLabel, id } = this.props;

    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        {this.renderImageLabel(imageLabel)}
        <View style={imageStyles.shadowContainer}>
          <TouchableOpacity
            style={imageStyles.mainContainer}
            onLongPress={() => this.handlePress(id)}
          >
            <View style={imageStyles.imageContainer}>
              <Image
                source={require("../../assets/images/robot-dev.png")}
                style={imageStyles.image}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return <View>{this.renderCardStyle()}</View>;
  }
}

export default ImageCard;
