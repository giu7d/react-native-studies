import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  Platform
} from "react-native";
import {
  Appbar,
  Provider as PaperProvider,
  DefaultTheme,
  Button,
  Paragraph
} from "react-native-paper";
import Menu from "./src/components/Paginator/Menu/Menu";
import Paginator from "./src/components/Paginator/Paginator";

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
  const data = ["Project", "About", "Reviews", "Community", "Files"];
  const screenWidth = Dimensions.get("window").width;

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
        <Paginator data={data} pageWidth={screenWidth} />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary
  }
});

export default App;
