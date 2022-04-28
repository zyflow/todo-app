import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../css/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export function Footer({currentScreen, setCurrentScreen}) {

    const stuff = (data) => {
        console.log('... ??', data)
        setCurrentScreen(data)
    }

    const isActive = (data) => {

        if (data === currentScreen) {
            return styles.activeFooterItem
        }

        return styles.footerItem;
    }

    return <View style={styles.footer}>
        <Icon.Button style={isActive("home")}       size={30} onPress={() => stuff("home")}      name="home"  />
        <Icon.Button style={isActive("calendar")}   size={30} onPress={() => stuff("calendar")}  name="calendar"  />
        <Icon.Button style={isActive("coffee")}     size={30} onPress={() => stuff("coffee")}    name="coffee"  />
        <Icon.Button style={isActive("beer")}       size={30} onPress={() => stuff("beer")}      name="beer"  />
    </View>
}
