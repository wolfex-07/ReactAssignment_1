import React from "react";
import { Text,View,StyleSheet } from "react-native";

const height = 120;
export default function DrawDots({data})  {
    return (
    <View style = {DrawDotsStyle().componentContainer}>
       <View style={
        {...DrawDotsStyle(data.item.title).item, backgroundColor: data.item.title % 5 === 0 ? 'red' : data.item.title % 3 === 0 ? 'green' : data.item.title % 2 === 0 ? 'pink': 'blue'}}>
   </View>
       <View style={DrawDotsStyle().xAxisComponent}>
        <Text style = {{padding: 5, textAlign: 'center', fontSize: 12, fontWeight: '400'}}>{data.item.time}</Text>
       </View>
       {/* <View  style = {DrawDotsStyle(data.item.title).lineView}>
         <View style = {DrawDotsStyle(data.item.title).lineComponent}>
         </View>
         <View style = {DrawDotsStyle(data.item.title).psudolineComponent}>
         </View>
       </View>  */}
       
    </View>
    );  
}

const DrawDotsStyle = (posn) => StyleSheet.create({
  lineView: {
      width: 0,
      height: 0, 
      top: height - posn - 43,
      left: 5,
      position: 'absolute',
      transform: 'rotate(90deg)',
      overflow: 'visible',
      //alignSelf: 'center',
     },
    lineComponent: {
      backgroundColor: 'red',
      height: 50,
      //top: 330 - posn
      // flex: 1,
    },
    psudolineComponent: {
      // flex: 1,
      height: 50,
    },
    item: {
        backgroundColor: 'green',
        height: posn + 20,
        width: 14,
        top: height - posn - 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginHorizontal: 0,
        // alignSelf: 'center',
        position: 'absolute',
      },
    componentContainer: {
        marginLeft: 0,
        //backgroundColor: 'white',

       },
       xAxisComponent: {
         height: 20,
         opacity: 1,
         top: height,
         marginTop:1,
         //justifyContent: 'flex-end',
         backgroundColor: 'white',
         //justifyContent: 'center',
         //position: 'relative'
       }
});