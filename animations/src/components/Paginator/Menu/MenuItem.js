import React from "react";
import { View } from "react-native";
import { Button, withTheme } from "react-native-paper";
import PropTypes from "prop-types";

function MenuItem({ title, onPress, isSelected, theme }) {
  return (
    <View>
      <Button
        style={{ elevation: 0 }}
        mode={isSelected ? "contained" : "text"}
        color={isSelected ? theme.colors.primary : theme.colors.text}
        onPress={onPress}
      >
        {title}
      </Button>
    </View>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default withTheme(MenuItem);
