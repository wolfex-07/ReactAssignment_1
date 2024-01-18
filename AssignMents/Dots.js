import { Text, View, StyleSheet, Image } from 'react-native';

export default function Dots(posn) {
  console.log('Rendering: BAr graph');
  return (
    <View style = {{flexDirection: 'column'}}>
    <View style={styles(posn.posn.bloodPressure).item}>
       <Text style = {{textAlign: 'center', color: 'black', fontSize: 0}}>{}</Text>
    </View>
     {/* <View style={styles(posn.posn.bloodPressure + 20).bariTEM}></View> */}
     </View>
  );
}

const styles = (posn) => StyleSheet.create({
    item: {
      backgroundColor: 'green',
      opacity: 1,
      top: 270 - posn,
      marginVertical: 0,
      marginHorizontal: 10,
      // height: 'auto',
      // width: 30,
      height: 20,
      width: 20,
      borderRadius: 10,
      justifyContent: 'center',
      overflow: 'hidden',
    },
    bariTEM: {
      backgroundColor: 'red',
      opacity: 1,
      top: 270 - posn,
      marginVertical: 0,
      marginHorizontal: 0,
      height: 25,
      width: 5,
      left: 0,
      // height: 20,
      // width: 20,
      // borderRadius: 10,
      justifyContent: 'center',
      overflow: 'hidden',
      transform: 'rotate(90deg)'
    }
});