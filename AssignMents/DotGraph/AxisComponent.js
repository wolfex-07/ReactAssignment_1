import React from "react";
import { FlatList, StyleSheet, Text,View } from "react-native";

export default function AxisComponent() {

    const AxisData = [1,2,3,4,5];
    return (
        <FlatList
               data = {AxisData}
               renderItem={<Text>Hello</Text>}
            //    keyExtractor={item => item.id}
            //    horizontal = {true}
            //    scrollEnabled = {true}
        >

        </FlatList>
    )
}

const AxisStyle = StyleSheet.create({
   
});