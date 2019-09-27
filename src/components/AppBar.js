import React from "react";
import { Appbar } from "react-native-paper";

function AppBar() {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title="App" />
      <Appbar.Action icon="search" onPress={() => {}} />
      <Appbar.Action icon="more-vert" onPress={() => {}} />
    </Appbar.Header>
  );
}

export default AppBar;
