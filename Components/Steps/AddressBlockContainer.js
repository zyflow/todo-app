import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { Footer } from "../Footer";
import { AddressBlock } from "./AddressBlock";

export function AddressBlockContainer({ route, navigation, items }) {
  return (
    <ScrollView>
      <Text>Picture block container</Text>

      <AddressBlock navigation={navigation} />
      <Footer navigation={navigation} route={route} />
    </ScrollView>
  );
}

export const styles = StyleSheet.create({});
