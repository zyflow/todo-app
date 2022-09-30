import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { Footer } from "../Footer";
import { AddressBlock } from "./AddressBlock";
import { StepInfoContext } from "../../Contexts/StepInfoProvider";
import { styles } from "../../css/styles";

export function AddressBlockContainer({ route, navigation, items }) {
  const [address, setAddress] = useState("");
  const { setSteps, steps, currentStep } = useContext(StepInfoContext);

  console.log("zadress...");
  useEffect(() => {
    setSteps({
      ...steps,
      [currentStep]: {
        address: address,
      },
    });
  }, [address]);

  return (
    <ScrollView style={styles.container}>
      <Text>Picture block container</Text>

      <AddressBlock navigation={navigation} setAddress={setAddress} />
      <Footer navigation={navigation} route={route} />
    </ScrollView>
  );
}
