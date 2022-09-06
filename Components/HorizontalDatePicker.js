import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback} from "react-native";
import moment from 'moment';

export const HorizontalDatePicker = () => {

    const date = moment();
    let dates = [];
    const [selected, setSelected] = useState(8);

    const toggle = (e, i) => {
        setSelected(i);
    }

    for (let i = 0; i < 15; i++) {
        const currDate = moment().add(i, 'days');

        dates.push(
            <View style={styles.dateBlock}>
                <TouchableWithoutFeedback onPress={(e) => toggle(e, i)} style={styles.center}>
                    <View style={[styles.date, styles.center, i === selected ? styles.selected : '']} >
                        <Text >
                            {currDate.format('ddd')}
                        </Text>
                        <Text style={styles.largeNumber}>
                            {moment().add(i, 'days').format('D')}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        )
    }

    return <View style={styles.block}>
        <ScrollView style={styles.dateContainer}
                    contentContainerStyle={styles.wrapper}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    snapToEnd={"end"}
        >
            {dates}
        </ScrollView>
            <Text>Selected: {selected}</Text>


    </View>
}


export const styles = StyleSheet.create({
    center: {
      justifyContent: "center",
      alignItems: "center"
    },
    block: {
        fontSize: 20,
        fontWeight: "700",
        justifyContent: "center",
        alignItems: "center"
    },
    dateContainer: {
        display: "flex",
        width: "100%",
    },
    wrapper: {
        justifyContent: "center",
        alignItems: "flex-end"
    },

    selected: {
        backgroundColor:   "#9fd5f6",
        color:  "#074a75",
    },
    dateBlock: {
        width: 50,
        padding: 5,
        margin: 10,
    },
    date: {
        padding: 7,
        height: 60,
        width: 55,
        borderWidth: 0.5,
        borderColor: "#4d2dd4",
        borderRadius: 5,
    },
    largeNumber: {
        fontSize: 20,
    }
})
