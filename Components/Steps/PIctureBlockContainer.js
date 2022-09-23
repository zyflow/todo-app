import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { PictureBlock } from "./PIctureBlock";
import { Footer } from "../Footer";
import { StepInfoContext } from "../../Contexts/StepInfoProvider";

export function PictureBlockContainer({ route, navigation, items }) {
  const [pictureUrl, setPictureUrl] = useState("");
  const { setSteps, steps, currentStep } = useContext(StepInfoContext);
  useEffect(() => {
    setSteps({ ...steps, [currentStep]: { pictureUrl: pictureUrl } });
  }, [pictureUrl]);

  return (
    <ScrollView>
      <Text>Picture block container</Text>

      <PictureBlock navigation={navigation} setPictureUrl={setPictureUrl} />
      <Footer navigation={navigation} route={route} />
    </ScrollView>
  );
}

export const styles = StyleSheet.create({});
