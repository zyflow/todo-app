import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { InputSingleRadioButton } from "./InputSingleRadioButton";

export const InputRadioGroup = ({ options, setResult }) => {
  const flagOption = () => {
    console.log("radio clicked");
    // setResult();
  };

  const radioButtons = options.map((option, key) => {
    return (
      <InputSingleRadioButton
        key={key}
        option={option}
        onClick={(e) => flagOption()}
        onChange={(e) => flagOption()}
      />
    );
  });

  return <View>{radioButtons}</View>;
};

export const styles = StyleSheet.create({});
