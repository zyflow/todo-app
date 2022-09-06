import React, {useState} from "react";
import {StyleSheet, TextInput, View, Text} from "react-native";

export const InputStepCount = () => {

    const [text, setText] = useState('');

    return <View style={styles.block}>
        <View style={styles.startLabel}>
            <Text style={styles.startLabelText}> Istabu skaits</Text>
        </View>
        <View style={styles.endPartBlock}>
        </View>


    </View>
}


export const styles = StyleSheet.create({

    block: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: "#808080",
        height: 50,
        marginBottom: 10,
    },
    startLabel: {
        width: "75%",
        padding: 15,

    },
    startLabelText: {
        fontSize: 14,
        fontWeight: "700",
    },
    endPartBlock: {
        display: "flex",
        height: "100%",
        maxWidth: 120,
        fontWeight: "700",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 17,
        width: "25%",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

});
