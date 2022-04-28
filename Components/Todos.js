import {Text, TextInput, ToastAndroid, View} from "react-native";
import {styles} from "../css/styles";
import React, {useEffect, useState} from "react";
import {Weekly} from "./weekly";
import {Daily} from "./daily";
import {Ultimate} from "./ultimate";
import {Header} from "./header";

export const Todos = ({itemList}) => {
    const [currentScreen, setCurrentScreen] = useState('weekly');
    let content = <Weekly/>

    switch (currentScreen) {
        case 'weekly':
            content = <Weekly />
            break;
        case 'daily':
            content = <Daily />
            break;
        case 'ultimate':
            content = <Ultimate />
            break;
    }

    return   <View style={styles.body}>
        <Header setCurrentScreen={setCurrentScreen} currentScreen={currentScreen} />
        {content}
    </View>
}
