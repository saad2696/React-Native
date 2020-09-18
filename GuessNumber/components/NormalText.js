import React from "react";
import { Text, StyleSheet } from "react-native";

const NormalText = (props) => {
  return <Text style={styles.body}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
  },
});

export default NormalText;
