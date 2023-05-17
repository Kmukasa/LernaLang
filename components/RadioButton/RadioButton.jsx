import React from "react";
import { StyleSheet } from "react-native";
import RadioButtonRN from "radio-buttons-react-native";

const RadioButton = ({ radioOptions, handleSelection }) => {
  return (
    <RadioButtonRN
      data={radioOptions}
      selectedBtn={(e) => {
        handleSelection(e);
        console.log(e);
      }}
      box={false}
      circleSize={10}
      activeColor={"#0601B4"}
      deactiveColor={null}
      textStyle={styles.buttonText}
      style={styles.buttonContainer}
    />
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column",
    marginLeft: 10,
    // padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    padding: 5,
    color: "#000",
    fontSize: 18,
    textAlign: "center",
  },
});

export default RadioButton;
