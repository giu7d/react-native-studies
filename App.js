import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions
} from "react-native";
import {
  Appbar,
  Provider as PaperProvider,
  DefaultTheme,
  Button,
  Paragraph
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 24,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FDD883",
    background: "#FEF7EC"
  }
};

function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        {/* AppBar */}
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Eazy App" />
          <Appbar.Action icon="search" onPress={() => {}} />
          <Appbar.Action icon="more-vert" onPress={() => {}} />
        </Appbar.Header>
        {/* Content */}
        <Content />
      </View>
    </PaperProvider>
  );
}

class Content extends Component {
  state = {
    data: ["Project", "About", "Reviews", "Community", "Files"],
    dataIndex: 0
  };

  _viewabilityConfig = {
    itemVisiblePercentThreshold: 50
  };

  _onViewableItemsChanged = info => {
    const { index = 0 } = info.viewableItems[0]
      ? info.viewableItems[0]
      : { index: 0 };

    this.setState({ dataIndex: index });
  };

  _itemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index
  });

  render() {
    const { data, dataIndex } = this.state;

    return (
      <View style={styles.flatListContainer}>
        {/* Menu */}
        <FlatList
          style={styles.flatListMenu}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <ListButton
              style={styles.flatListItem}
              isSelected={index == dataIndex}
              title={item}
              onPress={() => {}}
            />
          )}
        />
        {/* Content */}
        <FlatList
          style={styles.flatListContent}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          getItemLayout={this._itemLayout}
          viewabilityConfig={this._viewabilityConfig}
          onViewableItemsChanged={this._onViewableItemsChanged}
          // decelerationRate="fast"
          // bounces={true}
          // snapToInterval={screenWidth}
          // onViewableItemsChanged={this._onViewableItemsChanged}
          // viewabilityConfig={this._viewabilityConfig}

          renderItem={({ item, index }) => (
            <ScrollView style={styles.contentContainer}>
              <Paragraph>{item}</Paragraph>
            </ScrollView>
          )}
        />
      </View>
    );
  }
}

function ListButton({ title, onPress, isSelected }) {
  return (
    <View>
      {isSelected ? (
        <Button mode={"contained"} onPress={onPress}>
          {title}
        </Button>
      ) : (
        <Button color="#333" onPress={onPress}>
          {title}
        </Button>
      )}
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary
  },
  flatListContainer: {
    paddingHorizontal: 14,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    backgroundColor: theme.colors.background
  },
  contentContainer: {
    width: screenWidth - 28
  },
  flatListContent: {
    backgroundColor: theme.colors.background,
    height: "100%"
  },
  flatListMenu: {
    marginVertical: 24,
    height: 56
  },
  flatListItem: {
    marginHorizontal: 14
  }
});

export default App;
