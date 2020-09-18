import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartInput from "./Screens/StartInput";
import GameScreen from "./Screens/GameScreen";
import GameOver from "./Screens/GameOver";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState(); //undefined is false-ish
  const [guessRound, setGuessRound] = useState(0);
  const [dataloaded, setdataloaded] = useState(false);
  if (!dataloaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setdataloaded(true)}
        onError={(err)=>console.log(err)}
      />
    );
  }

  const configureNewGame = () => {
    setGuessRound(0);
    setUserNumber(null);
  };
  const startGameHnadler = (selectNumber) => {
    setUserNumber(selectNumber);
  };
  const gameoverHandler = (noOfRounds) => {
    setGuessRound(noOfRounds);
  };
  let content = <StartInput onStartGame={startGameHnadler} />;
  if (userNumber && guessRound <= 0) {
    //if true means if usernumber is selected or state is not empty
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameoverHandler} />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOver
        title={userNumber}
        rounds={guessRound}
        onRestart={configureNewGame}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" >Guess a Number</Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
