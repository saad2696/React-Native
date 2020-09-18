import React from "react";
import { Text, StyleSheet } from "react-native";

const TextFont = (props) => {
    return(
    <Text>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
  body: {
    fontFamily:'open-sans-bold'

  },
});

export default TextFont;
