import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme,
  Paragraph
} from "react-native-paper";
import AppBar from "./src/components/AppBar";
import Paginator from "./src/components/Paginator/Paginator";
import BottomSheet from "reanimated-bottom-sheet";

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
        <AppBar />
        <BottomSheet
          snapPoints={["30%", "90%"]}
          enabledInnerScrolling={true}
          enabledContentGestureInteraction={false}
          renderHeader={() => (
            <View style={styles.bottomSheetHeader}>
              <View style={styles.headerBar}></View>
            </View>
          )}
          renderContent={() => (
            <View style={styles.bottomSheetContent}>
              <Paginator data={data} pageWidth={screenWidth} />
            </View>
          )}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary
  },
  bottomSheetHeader: {
    height: 54,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomSheetContent: {
    backgroundColor: theme.colors.background
  },
  headerBar: {
    width: "20%",
    borderTopColor: theme.colors.disabled,
    borderTopWidth: 1
  }
});

export default App;
