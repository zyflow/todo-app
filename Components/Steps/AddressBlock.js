import React, {useState} from 'react';
import {Button, View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';


export function AddressBlock({navigation}) {


    return <ScrollView>
        <Text style={styles.title}>Kāda ir tava adrese?</Text>


    </ScrollView>
}


export const styles = StyleSheet.create({
    textArea: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 20,
        borderWidth: 0.3,
        borderColor: "#ccc",
        width: "90%",
        height: 70,
        borderRadius: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 20,
    },
    buttonBlock: {
        justifyContent: "center",
        alignItems: 'center',
    },
    block: {
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "row",
        width: "90%",
        borderWidth: 0.3,
        borderColor: "#ccc",
        height: 100,
    },
    blockTitle: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: "500",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});


