import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default StockCards = ({stock}) => {
  return (
    <View style={styles.container}>
      <View style={styles.stockContainer}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUCiW7IU9ZYK8KRi_1JyMX-iW7wjtxjE3NW8Zmxq-xQ&s"
          style={{height: 20, width: 20, marginRight: 6}}
        />
        <DisplayUpToThreeChars
          text={stock.cryptoshortname}></DisplayUpToThreeChars>
      </View>
      <Text style={styles.price}>${stock.price}</Text>
      <Text style={styles.change}>{stock.netgrowth}%</Text>
      <Text style={styles.capital}>${stock.capital}</Text>
    </View>
  );
};

const DisplayUpToThreeChars = ({text}) => {
  return <Text>{text.slice(0, 3)}</Text>;
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginVertical: 1,
    paddingVertical: 4,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  stockContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    // backgroundColor: 'white',
    alignSelf: 'center',
    textAlign: 'left',
    flex: 3,
  },
  change: {
    // backgroundColor: '',
    alignSelf: 'center',
    textAlign: 'left',
    flex: 2,
    color: 'green',
  },
  capital: {
    // backgroundColor: 'blue',
    alignSelf: 'center',
    textAlign: 'left',
    flex: 4,
  },
});
