import React, { useContext } from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import DrawDots from '../DotGraph/DrawDots';
import StockDataContext from './Context';

function fetchData() {

    const usersData = [];
    const yAxisData = [];
    const range = 30;
 
    for (let i = 0; i < range; i++) {
      const x = i - range / 2;
      const time = (i%13) + ' am'
      const food = (i%7==0)
      const title = Math.round( 10 * Math.sin((Math.PI * x) / (range / 2)) + 20); // Parabolic function
      usersData.push({ id: i, title: title, time, food });
    }
 
   return usersData;
 
 }

 const DATA = fetchData();



export default GraphCard = () => {
  console.log('graphCard: Rerenders');
  const [price2, setPrice2] = useContext(StockDataContext);
  return (
    <View style={(style = styles.container)}>
      <View style={styles.graphHeader}>
        <View style={styles.TextBoxTop}>
          <Text>Current Balance(USD)</Text>
          <Text>USD</Text>
        </View>
        <View style={styles.TextBoxDown}>
        <Text style = {styles.text}>${price2}</Text>
        </View>
      </View>
      <View style={styles.graphview}>
      <FlatList
               data={DATA}
               renderItem={(item) => <DrawDots data = {item} />}
               keyExtractor={item => item.id}
               horizontal = {true}
               scrollEnabled = {true}
              />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 20,
    marginBottom: 0,
    padding: 30,
    borderRadius: 20,
    flex: 1,
  },
  graphHeader: {
   //  backgroundColor: 'lightpink',
    height: 80,
    padding: 10,
    // flexDirection: 'row',
  },
  graphview: {
    // backgroundColor: 'lightblue',
    padding: 10,
    height: 160,
   // height: 20,
    //flex: 1,
  },
  TextBoxTop: {
    flexDirection: 'row',
    // backgroundColor: 'lightgreen',
    justifyContent: 'space-between',
    // marginHorizontal: 10,
  },
  TextBoxDown: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  text: {
    fontSize: 28,
    fontWeight: '700',
  }
});
