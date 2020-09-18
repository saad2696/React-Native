import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import NumberBox from "../components/NumberBox";
import TextFont from "../components/TextFont";
import NormalText from "../components/NormalText";
import DefaultFonts from "../constants/DefaultFonts";
import MainButton from "../components/MainButton";
const StartInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setconfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const NumberInputHandler = (inputNumber) => {
    setEnteredValue(inputNumber.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setEnteredValue("");
    setconfirmed(false);
  };
  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number need to be between 0 to 99", [
        { text: "okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setconfirmed(true);
    setSelectedNumber(choosenNumber); //saving current entered value in form of number
    setEnteredValue(""); //reseting input value
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.confirmCard}>
        <Text>You Selected</Text>
        <NumberBox>{selectedNumber}</NumberBox>
        <MainButton
          color={Colors.secondary}
          onPress={() => props.onStartGame(selectedNumber)}
        >
          Start Game
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={[DefaultFonts.title, styles.title]}>Start Game</Text>
        <Card style={styles.InputCard}>
          <Text style={DefaultFonts.body}>Select a Number!</Text>

          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={NumberInputHandler}
            value={enteredValue}
          />
          <View style={styles.ButtonContainer}>
            <View style={styles.wbtn}>
              <Button
                color={Colors.primary}
                title="Reset"
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.wbtn}>
              <Button
                color={Colors.secondary}
                title="Confirm"
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold", //custom fonts
  },
  InputCard: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  ButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  wbtn: {
    width: 90,
  },
  input: {
    width: 30,
    textAlign: "center",
  },
  confirmCard: {
    marginTop: 10,
    alignItems: "center",
  },
});
export default StartInput;
