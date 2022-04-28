import {Button, FlatList, Text, TextInput, ToastAndroid, View} from "react-native";
import {styles} from "../css/styles";
import React, {useEffect, useState} from "react";
import {ItemList} from "./ItemList";

export const Weekly = () => {
    const [itemList, setList] = useState(['FIrst']);
    const [number, onChangeNumber] = React.useState('Init');
    const [data, setData] = useState([]);

    const getList = async()=>{
        try{
            const response = await fetch('https://the-very-mine-todo-app.herokuapp.com/list');

            const json = await response.json();
            setData(json);
            setList(json);
        }catch(e){
            console.log('ERROR',e)
        }
    }

    useEffect(() => {
        getList();
    }, []);


    const updateText = (e) => {
        onChangeNumber(e)
    }

    const appendToList = () => {
        setList([number,...itemList])
        showToast();
    }


    const showToast = () => {
        ToastAndroid.show("Item saved", ToastAndroid.SHORT);
    };

    return     <View style={styles.body}>
        <View style={styles.container}>
            <Text style={styles.headerText}> Weekly TODO:</Text>
            <ItemList itemList={itemList} />

            <Text> Add new item </Text>
            <TextInput style={styles.input} value={number} onChangeText={updateText} />
        </View>
        <View style={styles.layoutFooter}>
            <Button
                style={styles.mainButton}
                onPress={appendToList}
                title="Submit"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    </View>
}
