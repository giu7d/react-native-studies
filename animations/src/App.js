import React, { useState, createRef } from "react";
import { StyleSheet, View, Dimensions, StatusBar } from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme,
  Paragraph,
  Title,
  Text
} from "react-native-paper";
import AppBar from "./components/AppBar";
import Paginator from "./components/Paginator/Paginator";
import BottomSheet from "reanimated-bottom-sheet";
import { Video } from "expo-av";
import { registerRootComponent } from "expo";
import Animated from "react-native-reanimated";
import BottomSheetHeader from "./components/BottomSheet/BottomSheetHeader";
import SliderButton from "./components/Buttons/SliderButton";
import ArtImage from "./components/ArtImage";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const MIN_BOTTONSHEET = 54;
const MAX_BOTTONSHEET = SCREEN_HEIGHT - 54;

const DATA = [
  {
    title: "Artist",
    screen: <Paragraph>Artist</Paragraph>
  },
  {
    title: "About",
    screen: <Paragraph>About</Paragraph>
  },
  {
    title: "Review",
    screen: <Paragraph>Review</Paragraph>
  },
  {
    title: "Community",
    screen: <Paragraph>Community</Paragraph>
  },
  {
    title: "Files",
    screen: <Paragraph>Files</Paragraph>
  }
];

const theme = {
  ...DefaultTheme,
  roundness: 24,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FDD883",
    accent: "#EE558D",
    background: "#FEF7EC",
    subText: "#333333"
  }
};

function App() {
  const [isAppBarHidden, setIsAppBarHidden] = useState(false);
  const bottomSheetRef = createRef();

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={theme.colors.primary}
          barStyle="dark-content"
        />
        <AppBar isHidden={isAppBarHidden} />
        <ArtImage />

        <View
          style={{
            flex: 1,
            alignItems: "center"
          }}
        >
          <Title style={{ alignSelf: "center", opacity: 0.8 }}>THE FOOL</Title>
          <Paragraph
            style={{ alignSelf: "center", opacity: 0.3, fontSize: 12 }}
          >
            POSTER
          </Paragraph>

          <View
            style={{
              flexDirection: "row",
              width: "50%",
              paddingVertical: 8,
              marginVertical: 8
            }}
          >
            <Text
              style={{
                flexDirection: "column",
                alignSelf: "flex-end",
                textAlign: "right",
                marginRight: 4,
                flex: 1,
                fontSize: 18,
                opacity: 0.5,
                textDecorationLine: "line-through"
              }}
            >
              $20.00
            </Text>
            <Text
              style={{
                flexDirection: "column",
                alignSelf: "flex-end",
                textAlign: "center",
                flex: 2,
                fontSize: 42,
                fontWeight: "bold",
                borderBottomWidth: 3,
                borderBottomColor: theme.colors.accent
              }}
            >
              $15.00
            </Text>
          </View>
          <SliderButton />
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={[MIN_BOTTONSHEET, MAX_BOTTONSHEET]}
          enabledContentGestureInteraction={false}
          enabledInnerScrolling={true}
          onOpenStart={() => setIsAppBarHidden(true)}
          onOpenEnd={() => setIsAppBarHidden(true)}
          onCloseStart={() => setIsAppBarHidden(false)}
          onCloseEnd={() => setIsAppBarHidden(false)}
          renderHeader={() => <BottomSheetHeader />}
          renderContent={() => (
            <View style={styles.bottomSheetContent}>
              <Paginator data={DATA} pageWidth={SCREEN_WIDTH} />
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
  bottomSheetContent: {
    height: "100%",
    backgroundColor: theme.colors.background
  }
});

export default registerRootComponent(App);
