import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import NumberBox from "../components/NumberBox";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import DefaultFonts from "../constants/DefaultFonts";
import { render } from "react-dom";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
const renderList = (listLength, itemData) => (
  <View style={styles.listItem}>
    <Text style={DefaultFonts.body}>#{listLength - itemData.index}</Text>
    <Text style={DefaultFonts.body}>{itemData.item}</Text>
  </View>
);
const GameScreen = (props) => {
  const intialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);
  const [PastGuesses, SetPassGuesses] = useState([intialGuess.toString()]);
  const currLow = useRef(1);
  const currHigh = useRef(100);
  const nextGuessHandler = (direction) => {
    if (
      (direction == "lower" && currentGuess < props.userChoice) ||
      (direction == "higher" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You Know that Wrongs...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction == "lower") {
      currHigh.current = currentGuess;
    } else {
      currLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currLow.current,
      currHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    //setRounds((curRounds) => curRounds + 1);
    SetPassGuesses((curPasGueses) => [nextNumber.toString(), ...curPasGueses]);
  };
  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess == userChoice) {
      onGameOver(PastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberBox>{currentGuess}</NumberBox>
      <Card style={styles.btnContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton
          style={styles.highBtn}
          onPress={nextGuessHandler.bind(this, "higher")}
        >
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.containerlist}>
        {/*  <ScrollView contentContainerStyle={styles.list}>
          {PastGuesses.map((guess, index) =>
            renderList(guess, PastGuesses.length - index)
          )}
          </ScrollView>*/}
        <FlatList
          keyExtractor={(item) => item}
          data={PastGuesses}
          renderItem={renderList.bind(this, PastGuesses.length)}
          contentContainerStyle={styles.list}
         
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  highBtn: {
    color: Colors.secondary,
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent:'space-between',
    width: "100%",
  },
  conatinerlist: {
    flex: 1,
    width: "40%",
  },
  list: {

    flexGrow: 1,
    alignItems: 'stretch'
    
  
  
 
  },
});

export default GameScreen;
