import React from "react";
import { View, StyleSheet , Text} from "react-native";
import TextFont from '../components/TextFont'

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#ED4C67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'open-sans-bold'
  },
});

export default Header;
