import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Card from "../components/Card";
import NumberBox from "../components/NumberBox";
import Color from "../constants/Colors";
import Colors from "../constants/Colors";
import DefaultFonts from "../constants/DefaultFonts";
import MainButton from "../components/MainButton";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={[styles.title, DefaultFonts.title]}>
        The Game is Over!!!
      </Text>
      <View style={styles.rounded}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>

      <Text style={[DefaultFonts.body, styles.overtxt]}>
        Your phone needed :{" "}
        <Text style={[styles.highlights, DefaultFonts.title]}>
          {props.rounds}
        </Text>{" "}
        rounds to guess the number{" "}
        <Text style={[styles.highlights, DefaultFonts.title]}>
          {props.title}
        </Text>
      </Text>
      <View style={[styles.RestartButton, DefaultFonts.body]}>
        <MainButton  onPress={props.onRestart}>
          Restart Game
        </MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gameOver: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "black",
    fontSize: 20,
  },
  RestartButton: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 180,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rounded: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
  },
  highlights: {
    color: Colors.primary,
  },
  overtxt: {
    padding: 10,
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOver;
