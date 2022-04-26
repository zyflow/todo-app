import {Button, FlatList, Text, TextInput, ToastAndroid, View} from "react-native";
import {styles} from "../styles";
import React, {useEffect, useState} from "react";

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


    const listItems = itemList.map((item) => {
        return <Text> - {item}</Text>
    })

    console.log('data', Platform.OS)

    const showToast = () => {
        ToastAndroid.show("Item saved", ToastAndroid.SHORT);
    };

    return     <View style={styles.body}>
        <View style={styles.container}>
            <Text> Weekly TODO:</Text>
            <FlatList
                style={styles.list}
                data={itemList}
                renderItem={({item}) => <Text style={styles.item}>- {item}</Text>}
            />

            <Text> Add new item </Text>
            <TextInput style={styles.input} value={number} onChangeText={updateText} />
        </View>
        <View style={styles.footer}>
            <Button
                style={styles.mainButton}
                onPress={appendToList}
                title="Submit"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    </View>
}
