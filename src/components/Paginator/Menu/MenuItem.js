import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import PropTypes from "prop-types";

function MenuItem({ title, onPress, isSelected }) {
  return (
    <View>
      {isSelected ? (
        <Button style={{ elevation: 0 }} mode={"contained"} onPress={onPress}>
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

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default MenuItem;
