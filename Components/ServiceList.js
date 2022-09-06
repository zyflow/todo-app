import {View, Text, FlatList, ScrollView} from "react-native";
import React from "react";
import {styles} from "../css/styles";
import {ServiceItem} from "./ServiceItem";

export const ServiceList = ({navigation}) => {

    const data = [
        {img: 'https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0', name: 'Standarta uzkopšana'},
        {img: 'https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0', name: 'Ģenerāltīrīšana'},
        {img: 'https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0', name: 'Biroja uzkopšana'},
        {img: 'https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0', name: 'Telpu dezinfekcija'},
        {img: 'https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0', name: 'Logu mazgāšana'},
        {img: 'https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0', name: 'Logu mazgāšana'},
        {img: 'https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0', name: 'Logu mazgāšana'},
        {img: 'https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0', name: 'Logu mazgāšana'},
        {img: 'https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0', name: 'Logu mazgāšana'},
        {img: 'https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0', name: 'Logu mazgāšana'},
        {img: 'https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0', name: 'Logu mazgāšana'},
    ]

    const itemList = data.map((item, key) => {
        return <ServiceItem key={key} image={item.img} text={item.name} onClick={() => {
            navigation.navigate('Item', {
                itemId: 86,
                item,
                title: item.name
            })
        }
        } />
    })

    return     <ScrollView style={styles.body} >
            {itemList}
    </ScrollView>
}
