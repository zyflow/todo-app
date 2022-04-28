import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../css/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export function Footer({setCurrentScreen}) {

    const stuff = (data) => {
        console.log('... ??')
        setCurrentScreen(data)
    }

    return <View style={styles.footer}>
        <Icon.Button size={30} onPress={() => stuff("home")}  backgroundColor="#616164"name="home" ></Icon.Button>
        <Icon.Button size={30} onPress={() => stuff("calendar")}  backgroundColor="#616164" name="calendar" ></Icon.Button>
        <Icon.Button size={30} onPress={() => stuff("coffee")}  backgroundColor="#616164" name="coffee" ></Icon.Button>
        <Icon.Button size={30} onPress={() => stuff("beer")}  backgroundColor="#616164" name="beer" ></Icon.Button>
    </View>
}
