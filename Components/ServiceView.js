import { StyleSheet, KeyboardAvoidingView, SafeAreaView } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { Footer } from "./Footer";
import { Platform } from "react-native";
import { ProgressBar } from "react-native-paper";
import { WhenArrive } from "./Steps/WhenArrive";
import { PictureBlock } from "./Steps/PIctureBlock";
import { AddressBlock } from "./Steps/AddressBlock";
import { RoomSize } from "./Steps/RoomSize";
import { Step3 } from "./Steps/Step3";
import { Step2 } from "./Steps/Step2";

export const PricingContext = React.createContext({
  price: 0,
  items: {},
  setPrice: () => {},
  setItems: () => {},
});

export const ServiceView = ({ route, navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState({});

  let stepContainer = [];
  const step1 = <RoomSize />;
  const step2 = <Step2 />;
  const step3 = <Step3 />;

  const step4 = <WhenArrive />;
  const step5 = <PictureBlock navigation={navigation} />;
  const step6 = <AddressBlock navigation={navigation} />;
  stepContainer = [step1, step2, step3, step4, step5, step6];

  // memoize the full context value
  const contextValue = useMemo(
    () => ({
      price,
      setPrice,
      items,
      setItems,
    }),
    [price, setPrice, items, setItems]
  );

  return (
    <PricingContext.Provider value={contextValue}>
      <SafeAreaView style={inlineStyle.test}>
        <ProgressBar
          progress={(currentStep + 1) / stepContainer.length}
          color={"#2a7dca"}
        />
        <KeyboardAvoidingView
          style={inlineStyle.container}
          keyboardVerticalOffset={-900}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          {stepContainer ? stepContainer[currentStep] : ""}

          <Footer setCurrentStep={setCurrentStep} currentStep={currentStep} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </PricingContext.Provider>
  );
};

export const inlineStyle = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
    height: "100%",
  },
  test: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
  },
  padding: {
    padding: 400,
  },
});
