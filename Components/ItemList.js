import {Button, FlatList, Text, TextInput, ToastAndroid, View} from "react-native";
import {styles} from "../css/list";
import React, {useEffect, useState} from "react";

export const ItemList = ({itemList}) => {
    return     <FlatList
        style={styles.item}
        data={itemList}
        renderItem={({item}) => <Text style={styles.item}>- {item}</Text>}
        keyExtractor={(item,index) => index.toString()}

    />
}
