import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

import { Footer } from "../Footer";
import { WhenArrive } from "./WhenArrive";

export function WhenArriveContainer({ route, navigation, items }) {
  const [stepValues, setStepValues] = useState({});

  return (
    <ScrollView>
      <Text>Room size container</Text>
      <WhenArrive
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
