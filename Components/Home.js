import {Button, FlatList, Text, TextInput, ToastAndroid, View, PanResponder} from "react-native";
import {styles} from "../css/styles";
import React, {useEffect, useState} from "react";

export const Home = () => {


    return     <View style={styles.body} >
        <View style={styles.container}>
            <Text style={styles.headerText}>Home page</Text>


            <Text>This is overall first page</Text>
            <Text>Second is calendar - todo list, with multiple sublists</Text>
            <Text>Coffee icon is for coffee reviews and ratings</Text>
            <Text>Beer icon is for coffee reviews and ratings</Text>
        </View>

    </View>
}
