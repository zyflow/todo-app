import {View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, SafeAreaView} from "react-native";
import React, {useState} from "react";
import {InputBlock} from "./InputBlock";
import {Footer} from "./Footer";
import {InputStepCount} from "./InputStepCount";
import {InputRadioGroup} from "./InputRadioGroup";
import {Platform} from "react-native";
import {ProgressBar} from "react-native-paper";
import {WhenArrive} from "./Steps/WhenArrive";
import {PictureBlock} from "./Steps/PIctureBlock";
import {AddressBlock} from "./Steps/AddressBlock";

export const ServiceView = ({route, navigation}) => {
    const {itemId, item} = route.params;
    const [currentStep, setCurrentStep] = useState(0);

    const step1 = <ScrollView>
        <InputBlock/>
        <InputStepCount/>
        <InputRadioGroup options={['Māja', 'Dzīvoklis', 'Viesu māja']}/>
    </ScrollView>

    const step2 = <ScrollView>
        <InputRadioGroup options={['Māja2', 'Dzīvoklis2', 'Viesu māja2']}/>
        <InputStepCount/>
    </ScrollView>

    const step3 = <ScrollView>
        <InputBlock/>
        <InputStepCount/>
    </ScrollView>

    const step4 = <WhenArrive />
    const step5 = <PictureBlock navigation={navigation}/>
    const step6 = <AddressBlock navigation={navigation}/>

    const stepContainer = [ step1, step6 ]


    return <SafeAreaView style={inlineStyle.test}>
        <ProgressBar progress={((currentStep + 1) / stepContainer.length) } color={"#2a7dca"}/>
        <KeyboardAvoidingView style={inlineStyle.container}
                              keyboardVerticalOffset={-900}
                              behavior={Platform.OS === 'ios' ? 'padding' : null}
        >

            {stepContainer[currentStep]}


            <Footer setCurrentStep={setCurrentStep} currentStep={currentStep}/>
        </KeyboardAvoidingView>
    </SafeAreaView>
}


export const inlineStyle = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: "#fff",
        height: "100%",
    },
    test: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        flex: 1,
    },
    padding: {
        padding: 400
    }
});
