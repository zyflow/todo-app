import { FlatList, Text, View} from "react-native";
import {listStyles} from "../css/list";
import React, { useState} from "react";

export const ItemList = ({itemList}) => {
    const Element = (item) => {
        const [enabled, setEnabled] = useState(false);

        let styleBlock = [listStyles.item]
        if (enabled) {
            styleBlock = [listStyles.item, listStyles.strikeout]
        }

        return <View>
            <Text style={styleBlock} onPress={() => { setEnabled(!enabled)}}>
                {item.item}
            </Text>
        </View>
    }

    const renderItem = ({ item }) => (
        <Element  item={item} />
    );

    return <FlatList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item,index) => index.toString()}
    />
}
