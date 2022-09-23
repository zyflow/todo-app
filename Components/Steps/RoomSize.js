import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { InputBlock } from "../InputBlock";
import { InputStepCount } from "../InputStepCount";
import { InputRadioGroup } from "../InputRadioGroup";
import { StepInfoContext } from "../../Contexts/StepInfoProvider";

export function RoomSize({ stepValues, setStepValues }) {
  const [stepCountResult, setStepCountResult] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const { setSteps, steps, currentStep } = useContext(StepInfoContext);

  // const updateStepValues = () => {
  //   if (inputValue > 3) {
  //     setStepValues(...stepValues, { roomSize: 5 });
  //   }
  // };

  useEffect(() => {
    setStepValues({
      roomCount: inputValue,
      roomSize: stepCountResult,
    });

    setSteps({
      ...steps,
      [currentStep]: {
        roomSizeM2: inputValue,
        roomCount: stepCountResult,
      },
    });
  }, [inputValue, stepCountResult]);

  return (
    <ScrollView>
      <InputBlock inputValue={inputValue} setInputValue={setInputValue} />
      <InputStepCount setStepCountResult={setStepCountResult} />
      <InputRadioGroup options={["Māja", "Dzīvoklis", "Viesu māja"]} />
    </ScrollView>
  );
}

export const styles = StyleSheet.create({});
