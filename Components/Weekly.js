import {Button, FlatList, Text, TextInput, ToastAndroid, View, ActivityIndicator} from "react-native";
import {styles} from "../css/styles";
import React, {useEffect, useState} from "react";
import {ItemList} from "./ItemList";

export const Weekly = () => {
    const [itemList, setList] = useState(['FIrst']);
    const [number, onChangeNumber] = React.useState('Init');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getList = async()=>{
        try{
            setLoading(true)
            const response = await fetch('https://the-very-mine-todo-app.herokuapp.com/list');
            const json = await response.json();
            setData(json);
            setList(json);
            setLoading(false)
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

            {loading ?
                <ActivityIndicator size="large" color="#0000ff"/> :
                <ItemList  itemList={itemList} />
            }

            <Text> Add new item </Text>
            <TextInput style={styles.input} value={number} onChangeText={updateText} />
        </View>
        <View style={styles.layoutFooter}>
            <Button
                style={styles.mainButton}
                onPress={appendToList}
                title="Submit"
                accessibilityLabel="Submit button"
            />
        </View>
    </View>
}

