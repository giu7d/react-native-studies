import React, { Component } from "react";
import { View, Platform } from "react-native";
import { withTheme } from "react-native-paper";
import Page from "./Page";
import Menu from "./Menu/Menu";

class Paginator extends Component {
  _pageRef = React.createRef();
  _menuRef = React.createRef();

  VIEW_ABILITY_CONFIG = {
    itemVisiblePercentThreshold: 50
  };

  IOS = Platform.OS === "ios";

  state = {
    dataIndex: 0
  };

  _itemLayout = (data, index) => ({
    length: this.props.pageWidth,
    offset: this.props.pageWidth * index,
    index
  });

  _onScrollEnd = event => {
    const { dataIndex } = this.state;
    const { data } = this.props;

    const speed = event.nativeEvent.velocity.x;
    let index = dataIndex;

    if (this.IOS) {
      if (speed > 1 && index < data.length - 1) {
        index += 1;
      }
      if (speed < -1 && index > 0) {
        index -= 1;
      }
    } else {
      if (speed < -1 && index < data.length - 1) {
        index += 1;
      }
      if (speed > 1 && index > 0) {
        index -= 1;
      }
    }

    const scrollToIndexOptions = {
      index: index,
      animated: true,
      viewPosition: 0.5
    };

    this._pageRef.current.scrollToIndex(scrollToIndexOptions);
    this._menuRef.current.scrollToIndex(scrollToIndexOptions);
    this.setState({ dataIndex: index });
  };

  _navigateToIndex = index => {
    const scrollToIndexOptions = {
      index: index,
      animated: true,
      viewPosition: 0.5
    };

    this._pageRef.current.scrollToIndex(scrollToIndexOptions);
    this._menuRef.current.scrollToIndex(scrollToIndexOptions);
    this.setState({ dataIndex: index });
  };

  render() {
    const { dataIndex } = this.state;
    const { data, theme } = this.props;
    const title = data.map(el => el.title);
    const screen = data.map(el => el.screen);

    return (
      <View style={{ backgroundColor: theme.colors.background }}>
        {/* Menu */}
        <Menu
          reference={this._menuRef}
          data={title}
          dataIndex={dataIndex}
          onPress={this._navigateToIndex}
        />
        {/* Pages */}
        <Page
          reference={this._pageRef}
          data={screen}
          getItemLayout={this._itemLayout}
          viewabilityConfig={this.VIEW_ABILITY_CONFIG}
          onScrollEndDrag={this._onScrollEnd}
        />
      </View>
    );
  }
}

export default withTheme(Paginator);
