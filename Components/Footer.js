import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from "react-native-paper";

export function Footer({setCurrentStep, currentStep}) {

    return <View style={styles.footer}>
        <View>
            <Text style={styles.priceTitle}>Paredzamā cena</Text>
            <Text style={styles.price}>56.67E</Text>
        </View>

        <View >
            <Button contentStyle={styles.button} style={styles.button}   mode="contained" onPress={() => setCurrentStep(currentStep + 1)}>
                <Text>Press me</Text>
            </Button>
        </View>
    </View>
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
        fontSize: 15
    }
});
