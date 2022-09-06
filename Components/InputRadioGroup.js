import React from "react";
import {StyleSheet, View} from "react-native";
import {InputSingleRadioButton} from "./InputSingleRadioButton";

export const InputRadioGroup = ({options}) => {
       const radioButtons = options.map(option => {
           return <InputSingleRadioButton option={option} />
       })

    return   <View  >
        {radioButtons}
    </View>
}


export const styles = StyleSheet.create({

});
