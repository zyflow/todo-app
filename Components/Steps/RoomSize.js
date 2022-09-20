import React, { useContext, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { InputBlock } from "../InputBlock";
import { InputStepCount } from "../InputStepCount";
import { InputRadioGroup } from "../InputRadioGroup";
import { PricingContext } from "../ServiceView";

export function RoomSize() {
  const [stepCountResult, setStepCountResult] = useState(0);
  const data = useContext(PricingContext);

  // const updatePrice = (cost) => {
  //   data.setPrice(data.price + cost);
  // };

  let res = stepCountResult * 5;
  data.setPrice(res);
  // data.setItems({
  //   step1: {
  //     roomCount: stepCountResult,
  //   },
  // });

  const [inputValue, setInputValue] = useState();

  return (
    <ScrollView>
      <InputBlock inputValue={inputValue} setInputValue={setInputValue} />
      <InputStepCount setStepCountResult={setStepCountResult} />
      <InputRadioGroup options={["Māja", "Dzīvoklis", "Viesu māja"]} />
    </ScrollView>
  );
}

export const styles = StyleSheet.create({});
