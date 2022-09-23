import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { StepInfoContext } from "../Contexts/StepInfoProvider";

export function Footer({ navigation, route, stepValues = {} }) {
  const { currentStep, setCurrentStep, serviceListData, steps } =
    useContext(StepInfoContext);

  const currentIndex = serviceListData.indexOf(currentStep);
  const total = route.params.total ?? 0;

  const nextStep = () => {
    console.log("current steps", steps);

    const newStep = serviceListData[currentIndex + 1];
    if (typeof newStep === "undefined" || typeof newStep === undefined) {
      navigation.navigate("ServiceList", {});
    } else {
      setCurrentStep(newStep);
      navigation.navigate(newStep + "Container", {
        itemId: 86,
        currentStep,
        nextStep: 2,
        total: 123,
        stepValues,
      });
    }
  };

  return (
    <View style={styles.footer}>
      <View>
        <Text style={styles.priceTitle}>Paredzamā cena ...</Text>
        <Text style={styles.price}>{total} E</Text>
      </View>

      <View>
        <Button
          contentStyle={styles.button}
          style={styles.button}
          mode="contained"
          onPress={() => nextStep()}
        >
          <Text>Next</Text>
        </Button>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  button: {
    width: 220,
    backgroundColor: "#2669ba",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    margin: 15,
    padding: 10,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceTitle: {
    color: "#8a8989",
  },
  price: {
    fontWeight: "900",
    fontSize: 15,
  },
});
