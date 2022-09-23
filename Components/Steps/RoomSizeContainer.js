import React, { useContext, useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

import { RoomSize } from "./RoomSize";
import { Footer } from "../Footer";
import { StepInfoContext } from "../../Contexts/StepInfoProvider";

export function RoomSizeContainer({ route, navigation, items }) {
  const [stepValues, setStepValues] = useState({});

  const stuff = useContext(StepInfoContext);

  return (
    <ScrollView>
      <Text>Room size container</Text>
      <RoomSize
        navigation={navigation}
        stepValues={stepValues}
        setStepValues={setStepValues}
      />
      <Footer
        stepValues={{ roomValues: stepValues }}
        navigation={navigation}
        route={route}
      />
    </ScrollView>
  );
}

export const styles = StyleSheet.create({});
