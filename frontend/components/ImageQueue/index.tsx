import _ from "lodash";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { UIConstants } from "../../common/constants";
import { fontStyles } from "../../common/styles";
import ImageCard from "../ImageCard";
import CustomSpacer from "../CustomSpacer";
import { imageCardQueueStyles as imageQStyles } from "./styles";

type Props = {
  ids: string[];
  componentId: string;
};

/**
 * Renders a horizontally scrollable view of cards that contain an image, caption,
 * and an optional date.
 * @param ids The array of ids to display as cards connected to an associated profile.
 */
class ImageQueue extends React.PureComponent<Props> {
  renderCards = (ids: string[]) => {
    const rows: any[] = [];

    _.forEach(ids, (id, index) => {
      rows.push(
        <ImageCard
          key={index}
          id={id}
          componentId={this.props.componentId}
          imageLabel="Robot"
          caption="kitty"
        />
      );
    });

    return <View style={{ flexDirection: "row", flex: 1 }}>{rows}</View>;
  };

  render() {
    const { ids } = this.props;

    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <CustomSpacer vertical={true} width={UIConstants.appMarginLeft} />
        {this.renderCards(ids)}
      </ScrollView>
    );
  }
}

export default ImageQueue;
