import React, {useState} from "react";
import {StyleSheet, TextInput, View, Text} from "react-native";

export const InputBlock = () => {

    const [text, setText] = useState('');

    return   <View  style={styles.block}>
        <TextInput
            keyboardType="phone-pad"
            style={styles.input}
            value={text}
            onChange={e => setText(e.target.value)}
        />
        <View style={styles.endPartBlock}>
            <Text style={styles.endPart}>m2</Text>
        </View>

    </View>
}


export const styles = StyleSheet.create({
    input: {
        // paddingLeft: 5,
        display: "flex",
        width: "75%",
        padding: 15,
    },

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
    endPartBlock: {
        display: "flex",
        height: "100%",
        maxWidth: 120,
        backgroundColor: "#b4a7d7",
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
    endPart: {
        fontWeight: "700",
        color: "black",
        fontSize: 17,
    }
});
